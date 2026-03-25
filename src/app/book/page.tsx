"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
  MapPin,
  Car,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  AlertTriangle,
  CalendarDays,
  User,
  Mail,
  MessageSquare,
  Star,
} from "lucide-react";

const services = [
  { id: "light-medium-duty-towing", name: "Light & Medium Duty Towing" },
  { id: "heavy-duty-towing", name: "Heavy Duty Towing" },
  { id: "flatbed-towing", name: "Flatbed Towing" },
  { id: "accident-towing", name: "Accident Towing" },
  { id: "roadside-assistance", name: "Roadside Assistance" },
  { id: "fuel-delivery", name: "Fuel Delivery" },
  { id: "battery-boost", name: "Battery Boost & Jump Start" },
  { id: "tire-service", name: "Tire Repair & Replacement" },
  { id: "winching-recovery", name: "Winching & Recovery" },
  { id: "deck-hauling", name: "Deck & Transportation Hauling" },
];

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck/Pickup",
  "Van",
  "Motorcycle",
  "RV/Motorhome",
  "Commercial Truck",
  "Bus",
  "Other",
];

const timeSlots = [
  "ASAP (Emergency)",
  "Within 2 hours",
  "Today",
  "Tomorrow",
  "This Week",
  "Schedule for Later",
];

interface FormData {
  service: string;
  vehicleType: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  pickupAddress: string;
  dropoffAddress: string;
  timeSlot: string;
  scheduledDate: string;
  scheduledTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: "",
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    pickupAddress: "",
    dropoffAddress: "",
    timeSlot: "",
    scheduledDate: "",
    scheduledTime: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setIsSubmitted(true);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const canProceedStep1 = formData.service && formData.vehicleType;
  const canProceedStep2 = formData.pickupAddress && formData.timeSlot;
  const canProceedStep3 =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone;

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <div className="h-20" />
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full mx-4 bg-white rounded-xl border border-gray-100 p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for choosing Guardium Towing. We&apos;ve received your booking
                request and will contact you shortly to confirm the details.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Booking Summary</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="text-gray-500">Service:</span>{" "}
                    {services.find((s) => s.id === formData.service)?.name}
                  </p>
                  <p>
                    <span className="text-gray-500">Vehicle:</span>{" "}
                    {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                  </p>
                  <p>
                    <span className="text-gray-500">Pickup:</span>{" "}
                    {formData.pickupAddress}
                  </p>
                  <p>
                    <span className="text-gray-500">When:</span>{" "}
                    {formData.timeSlot}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                A confirmation email has been sent to {formData.email}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Book Online</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <CalendarDays className="h-4 w-4" />
              Book Online
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Book Your Towing Service
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Fill out the form below to request a towing service. For immediate
              emergency assistance, call us directly at{" "}
              <a href="tel:+17808097860" className="text-primary font-semibold hover:underline">
                780-809-7860
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8 bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= i
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {step > i ? <CheckCircle className="h-5 w-5" /> : i}
                    </div>
                    {i < 4 && (
                      <div
                        className={`hidden sm:block w-16 md:w-24 lg:w-32 h-1 mx-2 rounded ${
                          step > i ? "bg-primary" : "bg-gray-100"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-xs sm:text-sm text-gray-500">
                <span>Service</span>
                <span>Location</span>
                <span>Contact</span>
                <span>Confirm</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    {step === 1 && "Select Your Service"}
                    {step === 2 && "Location & Timing"}
                    {step === 3 && "Your Information"}
                    {step === 4 && "Review & Confirm"}
                  </h2>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Service Selection */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <Label className="text-gray-700">Service Type *</Label>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {services.map((service) => (
                              <div
                                key={service.id}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                  formData.service === service.id
                                    ? "border-primary bg-primary/5"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => updateFormData("service", service.id)}
                              >
                                <div className="font-semibold text-gray-900">{service.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-700">Vehicle Type *</Label>
                          <Select
                            value={formData.vehicleType}
                            onValueChange={(value) => updateFormData("vehicleType", value)}
                          >
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicleTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label className="text-gray-700">Make</Label>
                            <Input
                              placeholder="e.g. Toyota"
                              value={formData.vehicleMake}
                              onChange={(e) => updateFormData("vehicleMake", e.target.value)}
                              className="bg-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-gray-700">Model</Label>
                            <Input
                              placeholder="e.g. Camry"
                              value={formData.vehicleModel}
                              onChange={(e) => updateFormData("vehicleModel", e.target.value)}
                              className="bg-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-gray-700">Year</Label>
                            <Input
                              placeholder="e.g. 2020"
                              value={formData.vehicleYear}
                              onChange={(e) => updateFormData("vehicleYear", e.target.value)}
                              className="bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Location & Timing */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label className="text-gray-700">Pickup Location *</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              className="pl-10 bg-white"
                              placeholder="Enter pickup address"
                              value={formData.pickupAddress}
                              onChange={(e) => updateFormData("pickupAddress", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-700">Drop-off Location</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              className="pl-10 bg-white"
                              placeholder="Enter drop-off address (optional)"
                              value={formData.dropoffAddress}
                              onChange={(e) => updateFormData("dropoffAddress", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-700">When do you need service? *</Label>
                          <Select
                            value={formData.timeSlot}
                            onValueChange={(value) => updateFormData("timeSlot", value)}
                          >
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Select timing" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {formData.timeSlot === "Schedule for Later" && (
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-gray-700">Preferred Date</Label>
                              <Input
                                type="date"
                                value={formData.scheduledDate}
                                onChange={(e) => updateFormData("scheduledDate", e.target.value)}
                                className="bg-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-gray-700">Preferred Time</Label>
                              <Input
                                type="time"
                                value={formData.scheduledTime}
                                onChange={(e) => updateFormData("scheduledTime", e.target.value)}
                                className="bg-white"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Step 3: Contact Information */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-gray-700">First Name *</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <Input
                                className="pl-10 bg-white"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={(e) => updateFormData("firstName", e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-gray-700">Last Name *</Label>
                            <Input
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={(e) => updateFormData("lastName", e.target.value)}
                              className="bg-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-700">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              type="email"
                              className="pl-10 bg-white"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => updateFormData("email", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-700">Phone Number *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              type="tel"
                              className="pl-10 bg-white"
                              placeholder="(780) 123-4567"
                              value={formData.phone}
                              onChange={(e) => updateFormData("phone", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-700">Additional Notes</Label>
                          <Textarea
                            className="bg-white"
                            placeholder="Any special instructions or details about your situation..."
                            value={formData.notes}
                            onChange={(e) => updateFormData("notes", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review & Confirm */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 mb-1">Service</h4>
                            <p className="font-medium text-gray-900">
                              {services.find((s) => s.id === formData.service)?.name}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 mb-1">Vehicle</h4>
                            <p className="font-medium text-gray-900">
                              {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel} ({formData.vehicleType})
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 mb-1">Pickup Location</h4>
                            <p className="font-medium text-gray-900">{formData.pickupAddress}</p>
                          </div>

                          {formData.dropoffAddress && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500 mb-1">Drop-off Location</h4>
                              <p className="font-medium text-gray-900">{formData.dropoffAddress}</p>
                            </div>
                          )}

                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 mb-1">Timing</h4>
                            <p className="font-medium text-gray-900">
                              {formData.timeSlot}
                              {formData.scheduledDate && ` - ${formData.scheduledDate}`}
                              {formData.scheduledTime && ` at ${formData.scheduledTime}`}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 mb-1">Contact</h4>
                            <p className="font-medium text-gray-900">
                              {formData.firstName} {formData.lastName}
                            </p>
                            <p className="text-sm text-gray-600">{formData.email} | {formData.phone}</p>
                          </div>

                          {formData.notes && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500 mb-1">Notes</h4>
                              <p className="text-sm text-gray-700">{formData.notes}</p>
                            </div>
                          )}
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-lg">
                          <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-semibold text-gray-900">Secure & Confidential</p>
                            <p className="text-gray-600">
                              Your information is protected and will only be used to provide you with towing services.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                      {step > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                      ) : (
                        <div />
                      )}

                      {step < 4 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-primary hover:bg-primary/90"
                          disabled={
                            (step === 1 && !canProceedStep1) ||
                            (step === 2 && !canProceedStep2) ||
                            (step === 3 && !canProceedStep3)
                          }
                        >
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button type="submit" className="bg-primary hover:bg-primary/90">
                          Confirm Booking
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Emergency Card */}
                <div className="bg-gray-900 text-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                    <h3 className="font-bold">Emergency?</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    For immediate emergency assistance, skip the form and call us directly.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 h-12" asChild>
                    <a href="tel:+17808097860">
                      <Phone className="mr-2 h-4 w-4" />
                      780-809-7860
                    </a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Why Book With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>No hidden fees - transparent pricing</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Average 30-minute response</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Fully licensed and insured</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Car className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>All vehicle types accepted</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span>4.9 customer rating</span>
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
