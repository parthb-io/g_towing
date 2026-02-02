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
  Truck,
} from "lucide-react";

const services = [
  { id: "emergency-towing", name: "Emergency Towing", price: "From $89", icon: "🚨" },
  { id: "roadside-assistance", name: "Roadside Assistance", price: "From $59", icon: "🔧" },
  { id: "heavy-duty-towing", name: "Heavy Duty Towing", price: "From $250", icon: "🚛" },
  { id: "long-distance-towing", name: "Long Distance Towing", price: "From $1.50/km", icon: "🛣️" },
  { id: "motorcycle-towing", name: "Motorcycle Towing", price: "From $79", icon: "🏍️" },
  { id: "accident-recovery", name: "Accident Recovery", price: "Insurance Rates", icon: "🚗" },
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
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-subtle py-20">
        <div className="max-w-md w-full mx-4 bg-white rounded-2xl shadow-airbnb-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Booking confirmed!</h2>
            <p className="text-muted-foreground mb-8">
              We've received your request and will contact you shortly to confirm the details.
            </p>

            <div className="bg-muted rounded-xl p-5 mb-6 text-left">
              <h3 className="font-semibold text-foreground mb-3">Booking summary</h3>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Service</span>
                  <span className="font-medium">{services.find((s) => s.id === formData.service)?.name}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Vehicle</span>
                  <span className="font-medium">{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">When</span>
                  <span className="font-medium">{formData.timeSlot}</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Confirmation email sent to {formData.email}
            </p>

            <div className="space-y-3">
              <Button className="w-full rounded-full" asChild>
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" className="w-full rounded-full" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-airbnb-sm mb-4">
              <CalendarDays className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Book Online</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Book your towing service
            </h1>
            <p className="text-muted-foreground">
              Fill out the form below to request a service. For immediate emergencies, call{" "}
              <a href="tel:1-800-GUARDIUM" className="text-secondary font-semibold hover:underline">
                1-800-GUARDIUM
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-10">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {["Service", "Location", "Contact", "Confirm"].map((label, i) => (
                  <div key={label} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                          step > i + 1
                            ? "bg-success text-white"
                            : step === i + 1
                            ? "bg-secondary text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step > i + 1 ? <CheckCircle className="h-5 w-5" /> : i + 1}
                      </div>
                      <span className={`text-xs mt-2 ${step === i + 1 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                        {label}
                      </span>
                    </div>
                    {i < 3 && (
                      <div
                        className={`w-12 sm:w-16 h-0.5 mx-1 ${
                          step > i + 1 ? "bg-success" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-airbnb-sm">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    {step === 1 && "Select your service"}
                    {step === 2 && "Location & timing"}
                    {step === 3 && "Your information"}
                    {step === 4 && "Review & confirm"}
                  </h2>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Service Selection */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <Label className="text-foreground font-medium">Service type</Label>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {services.map((service) => (
                              <div
                                key={service.id}
                                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                  formData.service === service.id
                                    ? "border-secondary bg-secondary/5"
                                    : "border-border hover:border-secondary/50"
                                }`}
                                onClick={() => updateFormData("service", service.id)}
                              >
                                <div className="flex items-start gap-3">
                                  <span className="text-2xl">{service.icon}</span>
                                  <div>
                                    <div className="font-semibold text-foreground">{service.name}</div>
                                    <div className="text-sm text-muted-foreground">{service.price}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-foreground font-medium">Vehicle type</Label>
                          <Select
                            value={formData.vehicleType}
                            onValueChange={(value) => updateFormData("vehicleType", value)}
                          >
                            <SelectTrigger className="rounded-xl h-12">
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
                            <Label className="text-muted-foreground text-sm">Make</Label>
                            <Input
                              className="rounded-xl h-11"
                              placeholder="e.g. Toyota"
                              value={formData.vehicleMake}
                              onChange={(e) => updateFormData("vehicleMake", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-muted-foreground text-sm">Model</Label>
                            <Input
                              className="rounded-xl h-11"
                              placeholder="e.g. Camry"
                              value={formData.vehicleModel}
                              onChange={(e) => updateFormData("vehicleModel", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-muted-foreground text-sm">Year</Label>
                            <Input
                              className="rounded-xl h-11"
                              placeholder="e.g. 2020"
                              value={formData.vehicleYear}
                              onChange={(e) => updateFormData("vehicleYear", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Location & Timing */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <Label className="text-foreground font-medium">Pickup location</Label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              className="pl-11 rounded-xl h-12"
                              placeholder="Enter pickup address"
                              value={formData.pickupAddress}
                              onChange={(e) => updateFormData("pickupAddress", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-muted-foreground text-sm">Drop-off location (optional)</Label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              className="pl-11 rounded-xl h-12"
                              placeholder="Enter drop-off address"
                              value={formData.dropoffAddress}
                              onChange={(e) => updateFormData("dropoffAddress", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-foreground font-medium">When do you need service?</Label>
                          <Select
                            value={formData.timeSlot}
                            onValueChange={(value) => updateFormData("timeSlot", value)}
                          >
                            <SelectTrigger className="rounded-xl h-12">
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
                              <Label className="text-muted-foreground text-sm">Date</Label>
                              <Input
                                type="date"
                                className="rounded-xl h-11"
                                value={formData.scheduledDate}
                                onChange={(e) => updateFormData("scheduledDate", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-muted-foreground text-sm">Time</Label>
                              <Input
                                type="time"
                                className="rounded-xl h-11"
                                value={formData.scheduledTime}
                                onChange={(e) => updateFormData("scheduledTime", e.target.value)}
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
                          <div className="space-y-3">
                            <Label className="text-foreground font-medium">First name</Label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                className="pl-11 rounded-xl h-12"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={(e) => updateFormData("firstName", e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <Label className="text-foreground font-medium">Last name</Label>
                            <Input
                              className="rounded-xl h-12"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={(e) => updateFormData("lastName", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-foreground font-medium">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              type="email"
                              className="pl-11 rounded-xl h-12"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => updateFormData("email", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-foreground font-medium">Phone</Label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              type="tel"
                              className="pl-11 rounded-xl h-12"
                              placeholder="(555) 123-4567"
                              value={formData.phone}
                              onChange={(e) => updateFormData("phone", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-muted-foreground text-sm">Additional notes (optional)</Label>
                          <Textarea
                            className="rounded-xl min-h-[100px]"
                            placeholder="Any special instructions or details..."
                            value={formData.notes}
                            onChange={(e) => updateFormData("notes", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review & Confirm */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <div className="bg-muted rounded-xl p-6 space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Service</p>
                              <p className="font-medium text-foreground">
                                {services.find((s) => s.id === formData.service)?.name}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Vehicle</p>
                              <p className="font-medium text-foreground">
                                {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                              </p>
                              <p className="text-sm text-muted-foreground">{formData.vehicleType}</p>
                            </div>
                          </div>

                          <div className="border-t border-border pt-4 grid sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pickup</p>
                              <p className="font-medium text-foreground">{formData.pickupAddress}</p>
                            </div>
                            {formData.dropoffAddress && (
                              <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Drop-off</p>
                                <p className="font-medium text-foreground">{formData.dropoffAddress}</p>
                              </div>
                            )}
                          </div>

                          <div className="border-t border-border pt-4 grid sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">When</p>
                              <p className="font-medium text-foreground">
                                {formData.timeSlot}
                                {formData.scheduledDate && ` - ${formData.scheduledDate}`}
                                {formData.scheduledTime && ` at ${formData.scheduledTime}`}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Contact</p>
                              <p className="font-medium text-foreground">{formData.firstName} {formData.lastName}</p>
                              <p className="text-sm text-muted-foreground">{formData.phone}</p>
                            </div>
                          </div>

                          {formData.notes && (
                            <div className="border-t border-border pt-4">
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Notes</p>
                              <p className="text-sm text-foreground">{formData.notes}</p>
                            </div>
                          )}
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-secondary/5 border border-secondary/20 rounded-xl">
                          <Shield className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-semibold text-foreground">Secure & Confidential</p>
                            <p className="text-muted-foreground">
                              Your information is protected and only used to provide towing services.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-border">
                      {step > 1 ? (
                        <Button type="button" variant="ghost" className="rounded-full" onClick={prevStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                      ) : (
                        <div />
                      )}

                      {step < 4 ? (
                        <Button
                          type="button"
                          className="rounded-full"
                          onClick={nextStep}
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
                        <Button type="submit" variant="secondary" className="rounded-full">
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
                <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground">Emergency?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    For immediate emergency assistance, skip the form and call us directly.
                  </p>
                  <Button className="w-full rounded-full" variant="secondary" asChild>
                    <a href="tel:1-800-GUARDIUM">
                      <Phone className="mr-2 h-4 w-4" />
                      1-800-GUARDIUM
                    </a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white border border-border rounded-2xl p-6 shadow-airbnb-sm">
                  <h3 className="font-bold text-foreground mb-4">Why book with us?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: CheckCircle, text: "No hidden fees - transparent pricing", color: "text-success" },
                      { icon: Clock, text: "Average 30-minute response time", color: "text-secondary" },
                      { icon: Shield, text: "Fully licensed and insured", color: "text-primary" },
                      { icon: Star, text: "4.9/5 rating from 50,000+ customers", color: "text-secondary" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
