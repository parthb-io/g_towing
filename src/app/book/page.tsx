"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form-field";
import { AddressAutocomplete } from "@/components/ui/address-autocomplete";
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
  Clock,
  Car,
  CheckCircle,
  Shield,
  AlertTriangle,
  CalendarDays,
  User,
  Mail,
  Star,
  ChevronDown,
  Loader2,
  MapPin,
} from "lucide-react";
import {
  services,
  vehicleTypes,
  urgencyOptions,
  bookingSchema,
  getServiceName,
  type BookingFormData,
} from "@/lib/validations/booking";
import { submitBooking, type BookingSubmission } from "@/lib/actions/booking";
import { cn } from "@/lib/utils";

// Turnstile site key (public)
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

// Generate form security token
function generateFormToken(): { token: string; timestamp: number } {
  const timestamp = Date.now();
  const token = btoa(`${timestamp}:${Math.random().toString(36).slice(2)}`);
  return { token, timestamp };
}

// Success screen component
function BookingSuccess({
  data,
  onReset,
}: {
  data: BookingFormData;
  onReset: () => void;
}) {
  return (
    <div className="min-h-screen">
      <div className="h-20" />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4 bg-white rounded-xl border border-gray-100 p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Booking Request Sent!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for choosing Guardium Towing. We&apos;ll contact you
              shortly to confirm the details.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">
                Booking Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-medium text-gray-900">
                    {getServiceName(data.service)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Vehicle:</span>
                  <span className="font-medium text-gray-900">
                    {data.vehicleInfo || data.vehicleType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pickup:</span>
                  <span className="font-medium text-gray-900 text-right max-w-[200px] truncate">
                    {data.pickupAddress}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              A confirmation email has been sent to{" "}
              <span className="font-medium">{data.email}</span>
            </p>
            <div className="flex flex-col gap-3">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+17808097860">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us: 780-809-7860
                </a>
              </Button>
              <Button variant="ghost" onClick={onReset}>
                Book Another Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
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

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      service: "",
      vehicleType: "",
      vehicleInfo: "",
      pickupAddress: "",
      dropoffAddress: "",
      urgency: undefined,
      scheduledDate: "",
      scheduledTime: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
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

  const urgency = watch("urgency");
  const pickupAddress = watch("pickupAddress");
  const dropoffAddress = watch("dropoffAddress");

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

  const onSubmit = async (data: BookingFormData) => {
    // Check if Turnstile is required and verified
    if (!!TURNSTILE_SITE_KEY && !turnstileToken) {
      setSubmitError("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Build submission with security data
      const submission: BookingSubmission = {
        ...data,
        _honeypot: honeypot,
        _formToken: formSecurity?.token,
        _timestamp: formSecurity?.timestamp,
        _turnstileToken: turnstileToken || undefined,
      };

      const result = await submitBooking(submission);

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

  if (isSubmitted) {
    return <BookingSuccess data={form.getValues()} onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-8 md:py-18">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Book Online</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CalendarDays className="h-4 w-4" />
              Quick Booking
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Book Your Towing Service
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Need immediate help? Call{" "}
              <a
                href="tel:+17808097860"
                className="text-primary font-semibold hover:underline"
              >
                780-809-7860
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-xl border border-gray-100 p-6 md:p-8"
                >
                  {/* Honeypot field - hidden from users, filled by bots */}
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
                    <label htmlFor="website_url">
                      Leave this field empty
                      <input
                        type="text"
                        id="website_url"
                        name="website_url"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </label>
                  </div>

                  {/* Service Details Section */}
                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary" />
                      Service Details
                    </h2>

                    <div className="grid gap-4">
                      {/* Service Type */}
                      <FormField
                        label="Service Type"
                        required
                        error={errors.service?.message}
                      >
                        <Select
                          value={watch("service")}
                          onValueChange={(value) =>
                            setValue("service", value, { shouldValidate: true })
                          }
                        >
                          <SelectTrigger
                            className={cn(
                              "bg-white h-12",
                              errors.service && "border-red-500"
                            )}
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormField>

                      {/* Vehicle Type + Info */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          label="Vehicle Type"
                          required
                          error={errors.vehicleType?.message}
                        >
                          <Select
                            value={watch("vehicleType")}
                            onValueChange={(value) =>
                              setValue("vehicleType", value, {
                                shouldValidate: true,
                              })
                            }
                          >
                            <SelectTrigger
                              className={cn(
                                "bg-white h-12",
                                errors.vehicleType && "border-red-500"
                              )}
                            >
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicleTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormField>

                        <FormField
                          label="Vehicle Details"
                          error={errors.vehicleInfo?.message}
                        >
                          <Input
                            placeholder="e.g. 2020 Toyota Camry"
                            {...register("vehicleInfo")}
                            className="bg-white h-12"
                          />
                        </FormField>
                      </div>

                      {/* Locations */}
                      <FormField
                        label="Pickup Location"
                        required
                        error={errors.pickupAddress?.message}
                      >
                        <AddressAutocomplete
                          value={pickupAddress}
                          onChange={(value) =>
                            setValue("pickupAddress", value, {
                              shouldValidate: true,
                            })
                          }
                          placeholder="Enter pickup address"
                          className="h-12"
                        />
                      </FormField>

                      <FormField
                        label="Drop-off Location"
                        error={errors.dropoffAddress?.message}
                      >
                        <AddressAutocomplete
                          value={dropoffAddress || ""}
                          onChange={(value) =>
                            setValue("dropoffAddress", value)
                          }
                          placeholder="Enter drop-off address (optional)"
                          className="h-12"
                        />
                      </FormField>

                      {/* Urgency */}
                      <FormField
                        label="When do you need service?"
                        required
                        error={errors.urgency?.message}
                      >
                        <div className="grid grid-cols-3 gap-2">
                          {urgencyOptions.map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() =>
                                setValue(
                                  "urgency",
                                  option.id as BookingFormData["urgency"],
                                  {
                                    shouldValidate: true,
                                  }
                                )
                              }
                              className={cn(
                                "p-3 rounded-lg border-2 text-center transition-all",
                                urgency === option.id
                                  ? "border-primary bg-primary/5"
                                  : "border-gray-200 hover:border-gray-300",
                                option.id === "emergency" &&
                                  urgency === option.id &&
                                  "border-red-500 bg-red-50"
                              )}
                            >
                              <div
                                className={cn(
                                  "font-semibold text-sm",
                                  option.id === "emergency" &&
                                    urgency === option.id
                                    ? "text-red-600"
                                    : "text-gray-900"
                                )}
                              >
                                {option.id === "emergency"
                                  ? "Emergency"
                                  : option.id === "today"
                                  ? "Today"
                                  : "Schedule"}
                              </div>
                            </button>
                          ))}
                        </div>
                      </FormField>

                      {/* Scheduled Date/Time */}
                      {urgency === "scheduled" && (
                        <div className="grid sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <FormField
                            label="Date"
                            required
                            error={errors.scheduledDate?.message}
                          >
                            <Input
                              type="date"
                              {...register("scheduledDate")}
                              className={cn(
                                "bg-white h-12",
                                errors.scheduledDate && "border-red-500"
                              )}
                              min={new Date().toISOString().split("T")[0]}
                            />
                          </FormField>
                          <FormField
                            label="Time (optional)"
                            error={errors.scheduledTime?.message}
                          >
                            <Input
                              type="time"
                              {...register("scheduledTime")}
                              className="bg-white h-12"
                            />
                          </FormField>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Contact Information
                    </h2>

                    <div className="grid gap-4">
                      <FormField
                        label="Your Name"
                        required
                        error={errors.name?.message}
                      >
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            placeholder="John Doe"
                            {...register("name")}
                            className={cn(
                              "pl-10 bg-white h-12",
                              errors.name && "border-red-500"
                            )}
                          />
                        </div>
                      </FormField>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          label="Phone"
                          required
                          error={errors.phone?.message}
                        >
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              type="tel"
                              placeholder="(780) 123-4567"
                              {...register("phone")}
                              className={cn(
                                "pl-10 bg-white h-12",
                                errors.phone && "border-red-500"
                              )}
                            />
                          </div>
                        </FormField>

                        <FormField
                          label="Email"
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
                                "pl-10 bg-white h-12",
                                errors.email && "border-red-500"
                              )}
                            />
                          </div>
                        </FormField>
                      </div>

                      {/* Collapsible Notes */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setShowNotes(!showNotes)}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              showNotes && "rotate-180"
                            )}
                          />
                          Add notes (optional)
                        </button>
                        {showNotes && (
                          <div className="mt-3">
                            <Textarea
                              placeholder="Any special instructions or details about your situation..."
                              {...register("notes")}
                              className="bg-white min-h-[80px]"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Turnstile CAPTCHA */}
                  {TURNSTILE_SITE_KEY && (
                    <div className="mb-6 flex justify-center">
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
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800">
                          Submission Failed
                        </p>
                        <p className="text-sm text-red-600">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                    disabled={isSubmitting || (!!TURNSTILE_SITE_KEY && !turnstileToken)}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Booking Request
                        <CheckCircle className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* Security Note */}
                  <p className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                    <Shield className="h-3 w-3" />
                    Protected by industry-standard security
                  </p>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Emergency Card */}
                <div className="bg-gray-900 text-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                    <h3 className="font-bold">Need Help Now?</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    For immediate emergency assistance, call us directly.
                  </p>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 h-12"
                    asChild
                  >
                    <a href="tel:+17808097860">
                      <Phone className="mr-2 h-4 w-4" />
                      780-809-7860
                    </a>
                  </Button>
                </div>

                {/* Service Area */}
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Service Area
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    We serve Edmonton and surrounding areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Edmonton",
                      "Sherwood Park",
                      "St. Albert",
                      "Leduc",
                      "Spruce Grove",
                    ].map((city) => (
                      <span
                        key={city}
                        className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>No hidden fees</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>30-min average response</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Fully licensed & insured</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span>Trusted by thousands</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
