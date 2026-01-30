import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadside Assistance",
  description:
    "Comprehensive roadside assistance services including battery jump starts, flat tire changes, fuel delivery, and lockout services. Available 24/7 across Canada.",
};

const features = [
  {
    title: "Battery Jump Start",
    description:
      "Dead battery? Our technicians will jump start your vehicle and get you back on the road quickly. We also test your battery health.",
  },
  {
    title: "Flat Tire Change",
    description:
      "We'll replace your flat tire with your spare tire safely and efficiently. Don't have a spare? We can tow you to the nearest tire shop.",
  },
  {
    title: "Fuel Delivery",
    description:
      "Run out of gas? We'll deliver enough fuel to get you to the nearest gas station. Available for gasoline and diesel vehicles.",
  },
  {
    title: "Vehicle Lockout Service",
    description:
      "Locked your keys in your car? Our trained technicians can safely unlock most vehicle makes and models without damage.",
  },
  {
    title: "Minor Mechanical Repairs",
    description:
      "For minor issues like loose belts, disconnected hoses, or other quick fixes, our technicians can often get you going on the spot.",
  },
  {
    title: "Winch Out Service",
    description:
      "Stuck in mud, snow, or a ditch? Our powerful winch equipment can safely extract your vehicle and get you back on solid ground.",
  },
];

const benefits = [
  "Quick response for non-towing emergencies",
  "Trained and certified technicians",
  "Service for all vehicle makes and models",
  "Competitive flat-rate pricing",
  "No membership required",
  "Available 24/7, 365 days a year",
];

export default function RoadsideAssistancePage() {
  return (
    <ServicePageLayout
      title="Roadside Assistance"
      subtitle="Help When You Need It"
      description="From dead batteries to flat tires, locked keys to empty fuel tanks, our comprehensive roadside assistance services cover all your needs. Get professional help without the need for a tow."
      icon={Wrench}
      features={features}
      benefits={benefits}
      pricing={{
        starting: "Starting at $59",
        note: "Service-specific pricing. Battery jump start from $59, tire change from $69, lockout from $79.",
      }}
    />
  );
}
