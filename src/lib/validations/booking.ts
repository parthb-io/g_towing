import { z } from "zod";

export const services = [
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
] as const;

export const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck/Pickup",
  "Van",
  "Motorcycle",
  "RV/Motorhome",
  "Commercial Truck",
  "Bus",
  "Other",
] as const;

export const urgencyOptions = [
  { id: "emergency", label: "Emergency - ASAP", description: "Immediate assistance needed" },
  { id: "today", label: "Today", description: "Within the next few hours" },
  { id: "scheduled", label: "Schedule for Later", description: "Pick a specific date" },
] as const;

// Simplified booking schema - single page form
export const bookingSchema = z.object({
  // Service details
  service: z.string().min(1, "Please select a service"),
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  vehicleInfo: z.string().optional(), // Combined make/model/year

  // Location
  pickupAddress: z.string().min(5, "Please enter a valid pickup address"),
  dropoffAddress: z.string().optional(),

  // Timing
  urgency: z.enum(["emergency", "today", "scheduled"], {
    message: "Please select when you need service",
  }),
  scheduledDate: z.string().optional(),
  scheduledTime: z.string().optional(),

  // Contact (Brevo-ready)
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+]+$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  notes: z.string().optional(),
}).refine(
  (data) => {
    if (data.urgency === "scheduled") {
      return data.scheduledDate && data.scheduledDate.length > 0;
    }
    return true;
  },
  {
    message: "Please select a date for scheduled service",
    path: ["scheduledDate"],
  }
);

export type BookingFormData = z.infer<typeof bookingSchema>;

// Utility to split name into first and last for Brevo
export function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName };
}

// Format phone number for Brevo (E.164 format with +1 for Canada)
export function formatPhoneForBrevo(phone: string): string {
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

// Get service name by ID
export function getServiceName(serviceId: string): string {
  return services.find((s) => s.id === serviceId)?.name || serviceId;
}

// Get urgency label
export function getUrgencyLabel(urgencyId: string): string {
  return urgencyOptions.find((u) => u.id === urgencyId)?.label || urgencyId;
}
