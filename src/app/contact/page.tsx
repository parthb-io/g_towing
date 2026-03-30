"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form-field";
import { Turnstile } from "@/components/ui/turnstile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  AlertTriangle,
  Loader2,
  Shield,
  User,
} from "lucide-react";
import {
  contactReasons,
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { submitContact, type ContactSubmission } from "@/lib/actions/contact";
import { cn } from "@/lib/utils";

// Turnstile site key (public)
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

// Generate form security token
function generateFormToken(): { token: string; timestamp: number } {
  const timestamp = Date.now();
  const token = btoa(`${timestamp}:${Math.random().toString(36).slice(2)}`);
  return { token, timestamp };
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Security state
  const [formSecurity, setFormSecurity] = useState<{
    token: string;
    timestamp: number;
  } | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  // Initialize form security on mount
  useEffect(() => {
    setFormSecurity(generateFormToken());
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    },
  });

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  // Handle Turnstile verification
  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
    setSubmitError("Security verification failed. Please refresh and try again.");
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    // Check if Turnstile is required and verified
    if (!!TURNSTILE_SITE_KEY && !turnstileToken) {
      setSubmitError("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Build submission with security data
      const submission: ContactSubmission = {
        ...data,
        _honeypot: honeypot,
        _formToken: formSecurity?.token,
        _timestamp: formSecurity?.timestamp,
        _turnstileToken: turnstileToken || undefined,
      };

      const result = await submitContact(submission);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message);
        // Refresh form token on error
        setFormSecurity(generateFormToken());
      }
    } catch {
      setSubmitError("An unexpected error occurred. Please try again.");
      setFormSecurity(generateFormToken());
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setSubmitError(null);
    setTurnstileToken(null);
    setHoneypot("");
    setFormSecurity(generateFormToken());
  };

  return (
    <div className="min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Contact</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="h-4 w-4" />
              Get In Touch
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Contact Us
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions? Need a quote? Want to partner with us? We&apos;re
              here to help. Reach out and our team will get back to you
              promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Emergency Line
              </h3>
              <a
                href="tel:+17808097860"
                className="text-primary hover:underline font-medium"
              >
                780-809-7860
              </a>
              <p className="text-sm text-gray-500 mt-1">24/7 Service</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a
                href="mailto:dispatch@guardiumtowing.com"
                className="text-primary hover:underline font-medium text-sm"
              >
                dispatch@guardiumtowing.com
              </a>
              <p className="text-sm text-gray-500 mt-1">
                We reply within 24 hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
              <p className="text-sm text-gray-700">Unit 206, 4918 Roper Rd NW</p>
              <p className="text-sm text-gray-500">Edmonton, AB T6B3T7</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
              <p className="text-sm text-gray-700">Towing: 24/7</p>
              <p className="text-sm text-gray-500">Office: Mon-Fri 9am-6pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <Button variant="outline" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 md:p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <label htmlFor="contact_website">
                        Leave this field empty
                        <input
                          type="text"
                          id="contact_website"
                          name="contact_website"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        label="Full Name"
                        required
                        error={errors.name?.message}
                      >
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            placeholder="John Doe"
                            {...register("name")}
                            className={cn(
                              "pl-10 bg-white",
                              errors.name && "border-red-500"
                            )}
                          />
                        </div>
                      </FormField>

                      <FormField
                        label="Email Address"
                        required
                        error={errors.email?.message}
                      >
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...register("email")}
                            className={cn(
                              "pl-10 bg-white",
                              errors.email && "border-red-500"
                            )}
                          />
                        </div>
                      </FormField>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        label="Phone Number"
                        error={errors.phone?.message}
                      >
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            type="tel"
                            placeholder="(780) 123-4567"
                            {...register("phone")}
                            className={cn(
                              "pl-10 bg-white",
                              errors.phone && "border-red-500"
                            )}
                          />
                        </div>
                      </FormField>

                      <FormField
                        label="Reason for Contact"
                        required
                        error={errors.reason?.message}
                      >
                        <Select
                          value={watch("reason")}
                          onValueChange={(value) =>
                            setValue("reason", value, { shouldValidate: true })
                          }
                        >
                          <SelectTrigger
                            className={cn(
                              "bg-white",
                              errors.reason && "border-red-500"
                            )}
                          >
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactReasons.map((reason) => (
                              <SelectItem key={reason} value={reason}>
                                {reason}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormField>
                    </div>

                    <FormField
                      label="Message"
                      required
                      error={errors.message?.message}
                    >
                      <Textarea
                        placeholder="Tell us how we can help..."
                        className={cn(
                          "min-h-[150px] bg-white",
                          errors.message && "border-red-500"
                        )}
                        {...register("message")}
                      />
                    </FormField>

                    {/* Turnstile CAPTCHA */}
                    {TURNSTILE_SITE_KEY && (
                      <div className="flex justify-center">
                        <Turnstile
                          siteKey={TURNSTILE_SITE_KEY}
                          onVerify={handleTurnstileVerify}
                          onError={handleTurnstileError}
                          onExpire={handleTurnstileExpire}
                          theme="light"
                        />
                      </div>
                    )}

                    {/* Error Message */}
                    {submitError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-red-800">
                            Unable to Send
                          </p>
                          <p className="text-sm text-red-600">{submitError}</p>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-primary hover:bg-primary/90"
                      disabled={isSubmitting || (!!TURNSTILE_SITE_KEY && !turnstileToken)}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Security Note */}
                    <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                      <Shield className="h-3 w-3" />
                      Your information is secure and protected
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  For emergencies, call our 24/7 dispatch line directly.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 h-12"
                  asChild
                >
                  <a href="tel:+17808097860">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 780-809-7860
                  </a>
                </Button>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Towing</span>
                    <span className="font-semibold text-green-600">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Service</span>
                    <span className="text-gray-900">Mon-Fri: 8am-8pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Office Hours</span>
                    <span className="text-gray-900">Mon-Fri: 9am-6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekend Support</span>
                    <span className="text-gray-900">Sat-Sun: 10am-4pm</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Edmonton", "Sherwood Park", "Spruce Grove", "Leduc"].map(
                    (area) => (
                      <Link
                        key={area}
                        href={`/locations/${area.toLowerCase().replace(" ", "-")}`}
                        className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                      >
                        {area}
                      </Link>
                    )
                  )}
                </div>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:underline"
                >
                  View all locations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h2>
            <p className="text-gray-600">
              Located in Edmonton, serving the greater Edmonton area
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8762844750387!2d-113.4319!3d53.5277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2s4918%20Roper%20Rd%20NW%2C%20Edmonton%2C%20AB%20T6B%203T7!5e0!3m2!1sen!2sca!4v1711324800000!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Guardium Towing Location"
                className="w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">Guardium Towing</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Unit 206, 4918 Roper Rd NW
                      <br />
                      Edmonton, AB T6B3T7
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=4918+Roper+Rd+NW,+Edmonton,+AB+T6B3T7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Tow Right Now?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Our dispatch team is available 24/7. Call us for immediate service.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 h-14 px-10 text-base"
            asChild
          >
            <a href="tel:+17808097860">
              <Phone className="mr-2 h-5 w-5" />
              Call 780-809-7860
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
