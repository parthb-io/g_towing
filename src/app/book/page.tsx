"use client";

import { useState, useEffect, useMemo } from "react";
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  Truck,
  Wrench,
  Bike,
  Route,
  Zap,
  Timer,
  DollarSign,
  Sparkles,
  CircleDot,
  Navigation,
  Star,
  BadgeCheck,
  Loader2,
  Check,
  ChevronDown,
  MapPinned,
} from "lucide-react";

const services = [
  {
    id: "emergency-towing",
    name: "Emergency Towing",
    price: 89,
    priceType: "flat",
    icon: AlertTriangle,
    description: "24/7 rapid response",
    eta: "20-30 min",
    popular: true,
  },
  {
    id: "roadside-assistance",
    name: "Roadside Assistance",
    price: 59,
    priceType: "flat",
    icon: Wrench,
    description: "Jump start, flat tire, lockout",
    eta: "15-25 min",
  },
  {
    id: "heavy-duty-towing",
    name: "Heavy Duty Towing",
    price: 250,
    priceType: "flat",
    icon: Truck,
    description: "Trucks, RVs, commercial",
    eta: "30-45 min",
  },
  {
    id: "long-distance-towing",
    name: "Long Distance Towing",
    price: 1.5,
    priceType: "per-km",
    icon: Route,
    description: "Canada & USA transport",
    eta: "Scheduled",
  },
  {
    id: "motorcycle-towing",
    name: "Motorcycle Towing",
    price: 79,
    priceType: "flat",
    icon: Bike,
    description: "Specialized handling",
    eta: "20-35 min",
  },
  {
    id: "accident-recovery",
    name: "Accident Recovery",
    price: 0,
    priceType: "insurance",
    icon: Car,
    description: "Insurance coordination",
    eta: "ASAP",
  },
];

const vehicleTypes = [
  { id: "sedan", name: "Sedan/Compact", icon: "🚗" },
  { id: "suv", name: "SUV/Crossover", icon: "🚙" },
  { id: "truck", name: "Truck/Pickup", icon: "🛻" },
  { id: "van", name: "Van/Minivan", icon: "🚐" },
  { id: "motorcycle", name: "Motorcycle", icon: "🏍️" },
  { id: "rv", name: "RV/Motorhome", icon: "🚌" },
  { id: "commercial", name: "Commercial Truck", icon: "🚛" },
  { id: "bus", name: "Bus", icon: "🚌" },
  { id: "other", name: "Other", icon: "🚘" },
];

const timeSlots = [
  { id: "asap", name: "ASAP (Emergency)", icon: Zap, urgent: true },
  { id: "2hours", name: "Within 2 hours", icon: Timer },
  { id: "today", name: "Later Today", icon: Clock },
  { id: "tomorrow", name: "Tomorrow", icon: CalendarDays },
  { id: "scheduled", name: "Schedule for Later", icon: CalendarDays },
];

interface FormData {
  service: string;
  vehicleType: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleColor: string;
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
  estimatedDistance: number;
}

// Animated Progress Bar Component
function ProgressBar({ step, totalSteps }: { step: number; totalSteps: number }) {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-8">
      {/* Step Indicators */}
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute left-0 right-0 top-5 h-1 bg-muted mx-8">
          <div
            className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {[
          { num: 1, label: "Service", icon: Truck },
          { num: 2, label: "Location", icon: MapPin },
          { num: 3, label: "Contact", icon: User },
          { num: 4, label: "Confirm", icon: CheckCircle },
        ].map((s) => (
          <div key={s.num} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step > s.num
                  ? "bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30"
                  : step === s.num
                  ? "bg-secondary text-white shadow-lg shadow-secondary/30 animate-pulse-scale"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s.num ? (
                <Check className="h-5 w-5" />
              ) : (
                <s.icon className="h-5 w-5" />
              )}
            </div>
            <span className={`mt-2 text-xs font-medium transition-colors ${
              step >= s.num ? "text-foreground" : "text-muted-foreground"
            }`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Service Selection Card
function ServiceCard({
  service,
  selected,
  onSelect
}: {
  service: typeof services[0];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 group hover:border-secondary hover:shadow-lg ${
        selected
          ? "border-secondary bg-secondary/5 shadow-lg shadow-secondary/10"
          : "border-border hover:bg-muted/50"
      }`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-4">
          <Badge variant="secondary" className="text-xs shadow-md">
            <Sparkles className="h-3 w-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
          selected ? "bg-secondary text-white" : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
        }`}>
          <service.icon className="h-6 w-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-bold">{service.name}</h4>
            <div className="text-right">
              {service.priceType === "flat" && (
                <span className="font-bold text-secondary">${service.price}</span>
              )}
              {service.priceType === "per-km" && (
                <span className="font-bold text-secondary">${service.price}/km</span>
              )}
              {service.priceType === "insurance" && (
                <span className="text-sm text-muted-foreground">Insurance</span>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{service.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-xs">
              <Timer className="h-3 w-3 mr-1" />
              ETA: {service.eta}
            </Badge>
          </div>
        </div>

        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          selected ? "border-secondary bg-secondary" : "border-muted-foreground/30"
        }`}>
          {selected && <Check className="h-4 w-4 text-white" />}
        </div>
      </div>
    </div>
  );
}

// Vehicle Type Selector
function VehicleTypeSelector({
  selected,
  onSelect
}: {
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
      {vehicleTypes.map((vehicle) => (
        <button
          key={vehicle.id}
          type="button"
          onClick={() => onSelect(vehicle.id)}
          className={`p-3 rounded-xl border-2 text-center transition-all duration-200 hover:border-secondary hover:shadow-md ${
            selected === vehicle.id
              ? "border-secondary bg-secondary/5 shadow-md"
              : "border-border"
          }`}
        >
          <div className="text-2xl mb-1">{vehicle.icon}</div>
          <div className="text-xs font-medium truncate">{vehicle.name}</div>
        </button>
      ))}
    </div>
  );
}

// Time Slot Selector
function TimeSlotSelector({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {timeSlots.map((slot) => (
        <button
          key={slot.id}
          type="button"
          onClick={() => onSelect(slot.id)}
          className={`p-4 rounded-xl border-2 text-center transition-all duration-200 hover:border-secondary ${
            selected === slot.id
              ? "border-secondary bg-secondary/5"
              : "border-border"
          } ${slot.urgent ? "ring-2 ring-destructive/20" : ""}`}
        >
          <slot.icon className={`h-6 w-6 mx-auto mb-2 ${
            slot.urgent ? "text-destructive" : "text-secondary"
          }`} />
          <div className={`text-sm font-medium ${
            slot.urgent ? "text-destructive" : ""
          }`}>
            {slot.name}
          </div>
        </button>
      ))}
    </div>
  );
}

// Price Estimate Component
function PriceEstimate({
  formData,
  selectedService
}: {
  formData: FormData;
  selectedService: typeof services[0] | undefined;
}) {
  const estimate = useMemo(() => {
    if (!selectedService) return null;

    if (selectedService.priceType === "insurance") {
      return { type: "insurance", text: "Covered by Insurance" };
    }

    if (selectedService.priceType === "per-km") {
      const distance = formData.estimatedDistance || 50; // Default 50km
      const base = 89; // Base fee
      const perKm = selectedService.price * distance;
      return {
        type: "calculated",
        amount: base + perKm,
        breakdown: `$${base} base + $${perKm.toFixed(2)} (${distance}km × $${selectedService.price}/km)`
      };
    }

    return { type: "flat", amount: selectedService.price };
  }, [formData.estimatedDistance, selectedService]);

  if (!estimate) return null;

  return (
    <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-4 border border-secondary/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-secondary" />
          <span className="font-semibold">Estimated Price</span>
        </div>
        <div className="text-right">
          {estimate.type === "insurance" ? (
            <span className="text-lg font-bold text-success">{estimate.text}</span>
          ) : (
            <>
              <span className="text-2xl font-bold text-secondary">
                ${typeof estimate.amount === 'number' ? estimate.amount.toFixed(2) : estimate.amount}
              </span>
              {estimate.breakdown && (
                <p className="text-xs text-muted-foreground">{estimate.breakdown}</p>
              )}
            </>
          )}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Final price may vary based on actual distance and conditions. No hidden fees.
      </p>
    </div>
  );
}

// Location Input with Map Pin
function LocationInput({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  icon: Icon = MapPin,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  icon?: React.ElementType;
}) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-1">
        {label}
        {required && <span className="text-destructive">*</span>}
      </Label>
      <div className="relative group">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
        <Input
          className="pl-10 h-12 border-2 focus:border-secondary transition-colors"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-secondary transition-colors"
          title="Use current location"
        >
          <Navigation className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: "",
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleColor: "",
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
    estimatedDistance: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedService = useMemo(
    () => services.find((s) => s.id === formData.service),
    [formData.service]
  );

  const updateFormData = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Booking submitted:", formData);
    setIsSubmitting(false);
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

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-background py-12">
        <div className="max-w-lg w-full mx-4">
          <Card className="border-2 border-success/30 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-success to-success/80 p-8 text-white text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-white/80">
                Your service request has been received
              </p>
            </div>

            <CardContent className="p-6">
              <div className="bg-muted rounded-xl p-4 mb-6 space-y-3">
                <h3 className="font-bold flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  Booking Summary
                </h3>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-medium">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vehicle:</span>
                    <span className="font-medium">
                      {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pickup:</span>
                    <span className="font-medium truncate max-w-[200px]">{formData.pickupAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">When:</span>
                    <span className="font-medium">
                      {timeSlots.find(t => t.id === formData.timeSlot)?.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Timer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">What&apos;s Next?</p>
                  <p className="text-sm text-muted-foreground">
                    A dispatcher will contact you within 5 minutes
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mb-6">
                Confirmation sent to <span className="font-medium">{formData.email}</span>
              </p>

              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/">Return Home</Link>
                </Button>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <a href="tel:1-800-GUARDIUM">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 1-800-GUARDIUM
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-mesh text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute -right-20 top-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <CalendarDays className="h-3 w-3 mr-1" />
              Book Online
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Book Your <span className="text-gradient-animated">Towing Service</span>
            </h1>
            <p className="text-white/80 max-w-2xl text-lg">
              Get a quote in seconds. Our team will dispatch the nearest truck to your location.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Progress Steps */}
            <ProgressBar step={step} totalSteps={4} />

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 shadow-xl">
                  <CardHeader className="border-b bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      {step === 1 && (
                        <>
                          <Truck className="h-5 w-5 text-secondary" />
                          Select Your Service
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <MapPin className="h-5 w-5 text-secondary" />
                          Location & Timing
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <User className="h-5 w-5 text-secondary" />
                          Your Information
                        </>
                      )}
                      {step === 4 && (
                        <>
                          <CheckCircle className="h-5 w-5 text-secondary" />
                          Review & Confirm
                        </>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {step === 1 && "Choose the service you need and tell us about your vehicle"}
                      {step === 2 && "Where should we pick you up?"}
                      {step === 3 && "How can we reach you?"}
                      {step === 4 && "Review your booking details before confirming"}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Service Selection */}
                      {step === 1 && (
                        <div className="space-y-8 animate-fade-in">
                          <div className="space-y-4">
                            <Label className="text-base font-semibold">
                              What service do you need? <span className="text-destructive">*</span>
                            </Label>
                            <div className="grid gap-3">
                              {services.map((service) => (
                                <ServiceCard
                                  key={service.id}
                                  service={service}
                                  selected={formData.service === service.id}
                                  onSelect={() => updateFormData("service", service.id)}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <Label className="text-base font-semibold">
                              Vehicle Type <span className="text-destructive">*</span>
                            </Label>
                            <VehicleTypeSelector
                              selected={formData.vehicleType}
                              onSelect={(id) => updateFormData("vehicleType", id)}
                            />
                          </div>

                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label>Make</Label>
                              <Input
                                placeholder="e.g. Toyota"
                                value={formData.vehicleMake}
                                onChange={(e) => updateFormData("vehicleMake", e.target.value)}
                                className="h-11"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Model</Label>
                              <Input
                                placeholder="e.g. Camry"
                                value={formData.vehicleModel}
                                onChange={(e) => updateFormData("vehicleModel", e.target.value)}
                                className="h-11"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Year</Label>
                              <Input
                                placeholder="e.g. 2020"
                                value={formData.vehicleYear}
                                onChange={(e) => updateFormData("vehicleYear", e.target.value)}
                                className="h-11"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Vehicle Color (helps us find you)</Label>
                            <Input
                              placeholder="e.g. Silver, Red, Black"
                              value={formData.vehicleColor}
                              onChange={(e) => updateFormData("vehicleColor", e.target.value)}
                              className="h-11"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Location & Timing */}
                      {step === 2 && (
                        <div className="space-y-8 animate-fade-in">
                          <LocationInput
                            label="Pickup Location"
                            placeholder="Enter street address, city, or landmark"
                            value={formData.pickupAddress}
                            onChange={(val) => updateFormData("pickupAddress", val)}
                            required
                            icon={MapPinned}
                          />

                          <LocationInput
                            label="Drop-off Location (Optional)"
                            placeholder="Where should we take your vehicle?"
                            value={formData.dropoffAddress}
                            onChange={(val) => updateFormData("dropoffAddress", val)}
                            icon={MapPin}
                          />

                          {formData.service === "long-distance-towing" && (
                            <div className="space-y-2">
                              <Label>Estimated Distance (km)</Label>
                              <Input
                                type="number"
                                placeholder="e.g. 100"
                                value={formData.estimatedDistance || ""}
                                onChange={(e) => updateFormData("estimatedDistance", parseInt(e.target.value) || 0)}
                                className="h-11"
                              />
                            </div>
                          )}

                          <div className="space-y-4">
                            <Label className="text-base font-semibold">
                              When do you need service? <span className="text-destructive">*</span>
                            </Label>
                            <TimeSlotSelector
                              selected={formData.timeSlot}
                              onSelect={(id) => updateFormData("timeSlot", id)}
                            />
                          </div>

                          {formData.timeSlot === "scheduled" && (
                            <div className="grid sm:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-xl animate-fade-in">
                              <div className="space-y-2">
                                <Label>Preferred Date</Label>
                                <Input
                                  type="date"
                                  value={formData.scheduledDate}
                                  onChange={(e) => updateFormData("scheduledDate", e.target.value)}
                                  className="h-11"
                                  min={new Date().toISOString().split('T')[0]}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Preferred Time</Label>
                                <Input
                                  type="time"
                                  value={formData.scheduledTime}
                                  onChange={(e) => updateFormData("scheduledTime", e.target.value)}
                                  className="h-11"
                                />
                              </div>
                            </div>
                          )}

                          <PriceEstimate formData={formData} selectedService={selectedService} />
                        </div>
                      )}

                      {/* Step 3: Contact Information */}
                      {step === 3 && (
                        <div className="space-y-6 animate-fade-in">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>First Name <span className="text-destructive">*</span></Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                  className="pl-10 h-12"
                                  placeholder="John"
                                  value={formData.firstName}
                                  onChange={(e) => updateFormData("firstName", e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>Last Name <span className="text-destructive">*</span></Label>
                              <Input
                                className="h-12"
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={(e) => updateFormData("lastName", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Email Address <span className="text-destructive">*</span></Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                type="email"
                                className="pl-10 h-12"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => updateFormData("email", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Phone Number <span className="text-destructive">*</span></Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input
                                type="tel"
                                className="pl-10 h-12"
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={(e) => updateFormData("phone", e.target.value)}
                                required
                              />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              We&apos;ll call this number when the driver is on the way
                            </p>
                          </div>

                          <div className="space-y-2">
                            <Label>Additional Notes</Label>
                            <div className="relative">
                              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Textarea
                                className="pl-10 min-h-[100px]"
                                placeholder="Any special instructions, access codes, or details about your situation..."
                                value={formData.notes}
                                onChange={(e) => updateFormData("notes", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Review & Confirm */}
                      {step === 4 && (
                        <div className="space-y-6 animate-fade-in">
                          <div className="grid gap-4">
                            {/* Service Summary */}
                            <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                              <div className="flex items-center gap-2 font-semibold">
                                <Truck className="h-4 w-4 text-secondary" />
                                Service Details
                              </div>
                              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Service:</span>
                                  <p className="font-medium">{selectedService?.name}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Vehicle:</span>
                                  <p className="font-medium">
                                    {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                                    {formData.vehicleColor && ` (${formData.vehicleColor})`}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Location Summary */}
                            <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                              <div className="flex items-center gap-2 font-semibold">
                                <MapPin className="h-4 w-4 text-secondary" />
                                Location & Timing
                              </div>
                              <div className="grid gap-3 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Pickup:</span>
                                  <p className="font-medium">{formData.pickupAddress}</p>
                                </div>
                                {formData.dropoffAddress && (
                                  <div>
                                    <span className="text-muted-foreground">Drop-off:</span>
                                    <p className="font-medium">{formData.dropoffAddress}</p>
                                  </div>
                                )}
                                <div>
                                  <span className="text-muted-foreground">When:</span>
                                  <p className="font-medium">
                                    {timeSlots.find(t => t.id === formData.timeSlot)?.name}
                                    {formData.scheduledDate && ` - ${formData.scheduledDate}`}
                                    {formData.scheduledTime && ` at ${formData.scheduledTime}`}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Contact Summary */}
                            <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                              <div className="flex items-center gap-2 font-semibold">
                                <User className="h-4 w-4 text-secondary" />
                                Contact Information
                              </div>
                              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Name:</span>
                                  <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Phone:</span>
                                  <p className="font-medium">{formData.phone}</p>
                                </div>
                                <div className="sm:col-span-2">
                                  <span className="text-muted-foreground">Email:</span>
                                  <p className="font-medium">{formData.email}</p>
                                </div>
                              </div>
                            </div>

                            {formData.notes && (
                              <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                                <div className="flex items-center gap-2 font-semibold">
                                  <MessageSquare className="h-4 w-4 text-secondary" />
                                  Notes
                                </div>
                                <p className="text-sm">{formData.notes}</p>
                              </div>
                            )}
                          </div>

                          <PriceEstimate formData={formData} selectedService={selectedService} />

                          <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                            <Shield className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <p className="font-semibold">Secure & Confidential</p>
                              <p className="text-muted-foreground">
                                Your information is protected and will only be used to provide you with towing services. We never share your data.
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
                            size="lg"
                            onClick={prevStep}
                            className="gap-2"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </Button>
                        ) : (
                          <div />
                        )}

                        {step < 4 ? (
                          <Button
                            type="button"
                            size="lg"
                            onClick={nextStep}
                            disabled={
                              (step === 1 && !canProceedStep1) ||
                              (step === 2 && !canProceedStep2) ||
                              (step === 3 && !canProceedStep3)
                            }
                            className="gap-2 btn-shine"
                          >
                            Continue
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            size="lg"
                            variant="secondary"
                            disabled={isSubmitting}
                            className="gap-2 min-w-[180px] btn-shine"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              <>
                                Confirm Booking
                                <CheckCircle className="h-4 w-4" />
                              </>
                            )}
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
                <Card className="bg-destructive/5 border-destructive/20 overflow-hidden">
                  <div className="bg-destructive/10 px-4 py-2 border-b border-destructive/20">
                    <div className="flex items-center gap-2 font-bold text-destructive">
                      <AlertTriangle className="h-5 w-5" />
                      Emergency?
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      For immediate emergency assistance, skip the form and call us directly.
                    </p>
                    <Button className="w-full animate-emergency-pulse" variant="destructive" asChild>
                      <a href="tel:1-800-GUARDIUM">
                        <Phone className="mr-2 h-4 w-4" />
                        1-800-GUARDIUM
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-secondary" />
                      Why Book With Us?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: CheckCircle, text: "No hidden fees - transparent pricing", color: "text-success" },
                      { icon: Timer, text: "Average 30-minute response", color: "text-secondary" },
                      { icon: Shield, text: "Fully licensed and insured", color: "text-primary" },
                      { icon: Car, text: "All vehicle types accepted", color: "text-accent" },
                      { icon: Star, text: "4.9/5 rating (2,500+ reviews)", color: "text-secondary" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Selected Service Summary */}
                {selectedService && (
                  <Card className="border-secondary/30 bg-secondary/5 animate-fade-in">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                          <selectedService.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold">{selectedService.name}</p>
                          <p className="text-sm text-muted-foreground">Selected service</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">ETA:</span>
                        <Badge variant="outline">{selectedService.eta}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
