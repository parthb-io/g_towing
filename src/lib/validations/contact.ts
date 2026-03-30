import { z } from "zod";

export const contactReasons = [
  "General Inquiry",
  "Request a Quote",
  "Service Feedback",
  "Business Partnership",
  "Fleet Services",
  "Careers",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\(\)\+]*$/.test(val),
      "Invalid phone number format"
    ),
  reason: z.string().min(1, "Please select a reason for contact"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Format phone for Brevo (E.164 format with +1 for Canada)
export function formatPhoneForBrevo(phone: string | undefined): string {
  if (!phone) return "";

  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // If already has country code (11 digits starting with 1)
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  // Add +1 for Canadian numbers (10 digits)
  if (digits.length === 10) {
    return `+1${digits}`;
  }

  // Return as-is if format is unexpected
  return phone;
}

// Split name into first and last for Brevo
export function splitName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName };
}
