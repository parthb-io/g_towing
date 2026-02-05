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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const services = [
  { id: "emergency-towing", name: "Emergency Towing", price: "From $89" },
  { id: "roadside-assistance", name: "Roadside Assistance", price: "From $59" },
  { id: "heavy-duty-towing", name: "Heavy Duty Towing", price: "From $250" },
  { id: "long-distance-towing", name: "Long Distance Towing", price: "From $1.50/km" },
  { id: "motorcycle-towing", name: "Motorcycle Towing", price: "From $79" },
  { id: "accident-recovery", name: "Accident Recovery", price: "Insurance Rates" },
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
    // In a real app, this would send data to a server
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
      <div className="min-h-[80vh] flex items-center justify-center bg-background">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for choosing Guardium Towing. We&apos;ve received your booking
              request and will contact you shortly to confirm the details.
            </p>
            <div className="bg-muted rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold mb-2">Booking Summary</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="text-muted-foreground">Service:</span>{" "}
                  {services.find((s) => s.id === formData.service)?.name}
                </p>
                <p>
                  <span className="text-muted-foreground">Vehicle:</span>{" "}
                  {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                </p>
                <p>
                  <span className="text-muted-foreground">Pickup:</span>{" "}
                  {formData.pickupAddress}
                </p>
                <p>
                  <span className="text-muted-foreground">When:</span>{" "}
                  {formData.timeSlot}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              A confirmation email has been sent to {formData.email}
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us: 1-800-GUARDIUM
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            <CalendarDays className="h-3 w-3 mr-1" />
            Book Online
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Towing Service
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Fill out the form below to request a towing service. For immediate
            emergency assistance, call us directly at 1-800-GUARDIUM.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= i
                          ? "bg-secondary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step > i ? <CheckCircle className="h-5 w-5" /> : i}
                    </div>
                    {i < 4 && (
                      <div
                        className={`hidden sm:block w-20 md:w-32 h-1 mx-2 ${
                          step > i ? "bg-secondary" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs sm:text-sm">
                <span>Service</span>
                <span>Location</span>
                <span>Contact</span>
                <span>Confirm</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {step === 1 && "Select Your Service"}
                      {step === 2 && "Location & Timing"}
                      {step === 3 && "Your Information"}
                      {step === 4 && "Review & Confirm"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Service Selection */}
                      {step === 1 && (
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label>Service Type *</Label>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {services.map((service) => (
                                <div
                                  key={service.id}
                                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    formData.service === service.id
                                      ? "border-secondary bg-secondary/5"
                                      : "border-border hover:border-secondary/50"
                                  }`}
                                  onClick={() =>
                                    updateFormData("service", service.id)
                                  }
                                >
                                  <div className="font-semibold">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {service.price}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Vehicle Type *</Label>
                            <Select
                              value={formData.vehicleType}
                              onValueChange={(value) =>
                                updateFormData("vehicleType", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select vehicle type" />
                              </SelectTrigger>
                              <SelectContent>
                                {vehicleTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label>Make</Label>
                              <Input
                                placeholder="e.g. Toyota"
                                value={formData.vehicleMake}
                                onChange={(e) =>
                                  updateFormData("vehicleMake", e.target.value)
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Model</Label>
                              <Input
                                placeholder="e.g. Camry"
                                value={formData.vehicleModel}
                                onChange={(e) =>
                                  updateFormData("vehicleModel", e.target.value)
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Year</Label>
                              <Input
                                placeholder="e.g. 2020"
                                value={formData.vehicleYear}
                                onChange={(e) =>
                                  updateFormData("vehicleYear", e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Location & Timing */}
                      {step === 2 && (
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label>Pickup Location *</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                className="pl-10"
                                placeholder="Enter pickup address"
                                value={formData.pickupAddress}
                                onChange={(e) =>
                                  updateFormData("pickupAddress", e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Drop-off Location</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                className="pl-10"
                                placeholder="Enter drop-off address (optional)"
                                value={formData.dropoffAddress}
                                onChange={(e) =>
                                  updateFormData("dropoffAddress", e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>When do you need service? *</Label>
                            <Select
                              value={formData.timeSlot}
                              onValueChange={(value) =>
                                updateFormData("timeSlot", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select timing" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot} value={slot}>
                                    {slot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {formData.timeSlot === "Schedule for Later" && (
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>Preferred Date</Label>
                                <Input
                                  type="date"
                                  value={formData.scheduledDate}
                                  onChange={(e) =>
                                    updateFormData("scheduledDate", e.target.value)
                                  }
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Preferred Time</Label>
                                <Input
                                  type="time"
                                  value={formData.scheduledTime}
                                  onChange={(e) =>
                                    updateFormData("scheduledTime", e.target.value)
                                  }
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
                              <Label>First Name *</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                  className="pl-10"
                                  placeholder="John"
                                  value={formData.firstName}
                                  onChange={(e) =>
                                    updateFormData("firstName", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>Last Name *</Label>
                              <Input
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={(e) =>
                                  updateFormData("lastName", e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Email Address *</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                type="email"
                                className="pl-10"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                  updateFormData("email", e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Phone Number *</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                type="tel"
                                className="pl-10"
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={(e) =>
                                  updateFormData("phone", e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Additional Notes</Label>
                            <div className="relative">
                              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Textarea
                                className="pl-10"
                                placeholder="Any special instructions or details about your situation..."
                                value={formData.notes}
                                onChange={(e) =>
                                  updateFormData("notes", e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Review & Confirm */}
                      {step === 4 && (
                        <div className="space-y-6">
                          <div className="bg-muted rounded-lg p-6 space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                                Service
                              </h4>
                              <p className="font-medium">
                                {services.find((s) => s.id === formData.service)?.name}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                                Vehicle
                              </h4>
                              <p className="font-medium">
                                {formData.vehicleYear} {formData.vehicleMake}{" "}
                                {formData.vehicleModel} ({formData.vehicleType})
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                                Pickup Location
                              </h4>
                              <p className="font-medium">{formData.pickupAddress}</p>
                            </div>

                            {formData.dropoffAddress && (
                              <div>
                                <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                                  Drop-off Location
                                </h4>
                                <p className="font-medium">
                                  {formData.dropoffAddress}
                                </p>
                              </div>
                            )}

                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                                Timing
                              </h4>
                              <p className="font-medium">
                                {formData.timeSlot}
                                {formData.scheduledDate &&
                                  ` - ${formData.scheduledDate}`}
                                {formData.scheduledTime &&
                                  ` at ${formData.scheduledTime}`}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                                Contact
                              </h4>
                              <p className="font-medium">
                                {formData.firstName} {formData.lastName}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {formData.email} | {formData.phone}
                              </p>
                            </div>

                            {formData.notes && (
                              <div>
                                <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                                  Notes
                                </h4>
                                <p className="text-sm">{formData.notes}</p>
                              </div>
                            )}
                          </div>

                          <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                            <Shield className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <p className="font-semibold">
                                Secure & Confidential
                              </p>
                              <p className="text-muted-foreground">
                                Your information is protected and will only be
                                used to provide you with towing services.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-8 pt-6 border-t">
                        {step > 1 ? (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                          >
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
                          <Button type="submit" variant="secondary">
                            Confirm Booking
                            <CheckCircle className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Emergency Card */}
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                      <h3 className="font-bold">Emergency?</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      For immediate emergency assistance, skip the form and call
                      us directly.
                    </p>
                    <Button className="w-full" variant="destructive" asChild>
                      <a href="tel:1-800-GUARDIUM">
                        <Phone className="mr-2 h-4 w-4" />
                        1-800-GUARDIUM
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-4">Why Book With Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span>No hidden fees - transparent pricing</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <Clock className="h-5 w-5 text-secondary" />
                        <span>Average 30-minute response</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <Shield className="h-5 w-5 text-primary" />
                        <span>Fully licensed and insured</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <Car className="h-5 w-5 text-accent" />
                        <span>All vehicle types accepted</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
