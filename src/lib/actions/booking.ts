"use server";

import { headers } from "next/headers";
import {
  type BookingFormData,
  splitName,
  formatPhoneForBrevo,
  getServiceName,
  getUrgencyLabel,
} from "@/lib/validations/booking";
import {
  checkRateLimit,
  getRateLimitKey,
  RATE_LIMITS,
} from "@/lib/security/rate-limiter";
import {
  validateHoneypot,
  validateFormTiming,
  performSpamCheck,
  sanitizeFormData,
} from "@/lib/security/spam-detection";
import { verifyTurnstileToken } from "@/components/ui/turnstile";

const BREVO_API_URL = "https://api.brevo.com/v3";

export interface BookingSubmission extends BookingFormData {
  // Security fields
  _honeypot?: string;
  _formToken?: string;
  _timestamp?: number;
  _turnstileToken?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  error?: string;
  code?: string;
}

/**
 * Get client IP from headers
 */
async function getClientIP(): Promise<string> {
  const headersList = await headers();

  // Check various headers for real IP (behind proxies/CDN)
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = headersList.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  const cfConnectingIP = headersList.get("cf-connecting-ip");
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return "unknown";
}

/**
 * Make authenticated request to Brevo API
 */
async function brevoRequest(
  endpoint: string,
  body: Record<string, unknown>
): Promise<Response> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY not configured");
  }

  return fetch(`${BREVO_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });
}

/**
 * Log security events (can be enhanced to send to monitoring service)
 */
function logSecurityEvent(
  event: string,
  details: Record<string, unknown>
): void {
  console.warn(`[SECURITY] ${event}:`, {
    ...details,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Submit booking with comprehensive security checks
 */
export async function submitBooking(
  rawData: BookingSubmission
): Promise<BookingResponse> {
  const clientIP = await getClientIP();

  try {
    // ==========================================
    // LAYER 1: Honeypot Check
    // ==========================================
    if (!validateHoneypot(rawData._honeypot)) {
      logSecurityEvent("HONEYPOT_TRIGGERED", { ip: clientIP });
      // Return fake success to not alert bots
      return {
        success: true,
        message: "Booking request submitted successfully!",
      };
    }

    // ==========================================
    // LAYER 2: Timing Validation
    // ==========================================
    const timingResult = validateFormTiming(
      rawData._formToken,
      rawData._timestamp
    );
    if (!timingResult.valid) {
      logSecurityEvent("TIMING_VIOLATION", {
        ip: clientIP,
        reason: timingResult.reason,
      });
      return {
        success: false,
        message: timingResult.reason || "Please try again",
        code: "TIMING_ERROR",
      };
    }

    // ==========================================
    // LAYER 3: Rate Limiting by IP
    // ==========================================
    const ipRateLimit = checkRateLimit(
      getRateLimitKey("booking_ip", clientIP),
      RATE_LIMITS.booking
    );

    if (!ipRateLimit.allowed) {
      logSecurityEvent("RATE_LIMIT_IP", {
        ip: clientIP,
        retryAfter: ipRateLimit.retryAfter,
      });
      return {
        success: false,
        message: `Too many requests. Please wait ${Math.ceil((ipRateLimit.retryAfter || 60) / 60)} minutes before trying again.`,
        code: "RATE_LIMIT",
      };
    }

    // ==========================================
    // LAYER 4: Sanitize Input
    // ==========================================
    const data = sanitizeFormData(rawData);

    // ==========================================
    // LAYER 5: Rate Limiting by Email
    // ==========================================
    const emailRateLimit = checkRateLimit(
      getRateLimitKey("booking_email", data.email.toLowerCase()),
      RATE_LIMITS.bookingByEmail
    );

    if (!emailRateLimit.allowed) {
      logSecurityEvent("RATE_LIMIT_EMAIL", {
        ip: clientIP,
        email: data.email,
      });
      return {
        success: false,
        message:
          "A booking request was recently submitted with this email. Please wait or call us directly.",
        code: "RATE_LIMIT",
      };
    }

    // ==========================================
    // LAYER 6: Turnstile CAPTCHA Verification
    // ==========================================
    if (process.env.TURNSTILE_SECRET_KEY && data._turnstileToken) {
      const turnstileResult = await verifyTurnstileToken(data._turnstileToken);
      if (!turnstileResult.success) {
        logSecurityEvent("TURNSTILE_FAILED", {
          ip: clientIP,
          error: turnstileResult.error,
        });
        return {
          success: false,
          message: "Security verification failed. Please refresh and try again.",
          code: "CAPTCHA_FAILED",
        };
      }
    }

    // ==========================================
    // LAYER 7: Spam Content Analysis
    // ==========================================
    const spamCheck = performSpamCheck({
      name: data.name,
      email: data.email,
      phone: data.phone,
      notes: data.notes,
      pickupAddress: data.pickupAddress,
      dropoffAddress: data.dropoffAddress,
    });

    if (spamCheck.isSpam) {
      logSecurityEvent("SPAM_DETECTED", {
        ip: clientIP,
        score: spamCheck.score,
        reasons: spamCheck.reasons,
      });

      // Apply stricter rate limit for suspicious IP
      checkRateLimit(
        getRateLimitKey("suspicious", clientIP),
        RATE_LIMITS.suspicious
      );

      return {
        success: false,
        message:
          "Your submission could not be processed. Please call us directly at 780-809-7860.",
        code: "VALIDATION_ERROR",
      };
    }

    // ==========================================
    // LAYER 8: Environment Check
    // ==========================================
    if (!process.env.BREVO_API_KEY) {
      console.error("BREVO_API_KEY not configured");
      return {
        success: false,
        message: "Booking service temporarily unavailable. Please call us directly.",
        code: "CONFIG_ERROR",
      };
    }

    // ==========================================
    // PROCESS BOOKING
    // ==========================================
    const listId = process.env.BREVO_LIST_ID
      ? parseInt(process.env.BREVO_LIST_ID, 10)
      : undefined;
    const templateId = process.env.BREVO_TEMPLATE_ID
      ? parseInt(process.env.BREVO_TEMPLATE_ID, 10)
      : undefined;

    // Split name for Brevo
    const { firstName, lastName } = splitName(data.name);

    // Format phone for E.164
    const formattedPhone = formatPhoneForBrevo(data.phone);

    // Build timing string
    let timing = getUrgencyLabel(data.urgency);
    if (data.urgency === "scheduled" && data.scheduledDate) {
      timing += ` - ${data.scheduledDate}`;
      if (data.scheduledTime) {
        timing += ` at ${data.scheduledTime}`;
      }
    }

    // Create/update contact in Brevo
    const contactPayload: Record<string, unknown> = {
      email: data.email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        SMS: formattedPhone,
        SERVICE: getServiceName(data.service),
        VEHICLE_TYPE: data.vehicleType,
        VEHICLE_INFO: data.vehicleInfo || "",
        PICKUP_ADDRESS: data.pickupAddress,
        DROPOFF_ADDRESS: data.dropoffAddress || "",
        URGENCY: timing,
        NOTES: data.notes || "",
        SOURCE: "website_booking",
        SUBMISSION_IP: clientIP,
        SUBMISSION_DATE: new Date().toISOString(),
      },
      updateEnabled: true,
    };

    if (listId) {
      contactPayload.listIds = [listId];
    }

    const contactResponse = await brevoRequest("/contacts", contactPayload);

    if (!contactResponse.ok && contactResponse.status !== 204) {
      const errorData = await contactResponse.json().catch(() => ({}));
      // Duplicate contact is fine - we update it
      if (
        contactResponse.status !== 400 ||
        !JSON.stringify(errorData).includes("duplicate")
      ) {
        console.error("Brevo contact error:", errorData);
      }
    }

    // Send transactional confirmation email
    if (templateId) {
      const emailPayload = {
        to: [{ email: data.email, name: data.name }],
        templateId: templateId,
        params: {
          name: data.name,
          firstName: firstName,
          service: getServiceName(data.service),
          vehicleType: data.vehicleType,
          vehicleInfo: data.vehicleInfo || "Not specified",
          pickupAddress: data.pickupAddress,
          dropoffAddress: data.dropoffAddress || "To be determined",
          timing: timing,
          phone: data.phone,
          email: data.email,
          notes: data.notes || "None",
        },
      };

      const emailResponse = await brevoRequest("/smtp/email", emailPayload);

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json().catch(() => ({}));
        console.error("Brevo email error:", errorData);
        // Don't fail the whole submission if email fails
      }
    }

    // Log successful submission
    console.log(`[BOOKING] Successful submission from ${clientIP} for ${data.email}`);

    return {
      success: true,
      message: "Booking request submitted successfully!",
    };
  } catch (error) {
    console.error("Booking submission error:", error);

    logSecurityEvent("SUBMISSION_ERROR", {
      ip: clientIP,
      error: error instanceof Error ? error.message : "Unknown",
    });

    return {
      success: false,
      message: "Unable to submit booking. Please try again or call us directly.",
      code: "SERVER_ERROR",
    };
  }
}
