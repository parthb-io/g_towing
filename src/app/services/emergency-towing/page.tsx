import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Towing Services",
  description:
    "24/7 emergency towing services across Canada. Fast response times, professional service, and competitive rates. Call 1-800-GUARDIUM for immediate assistance.",
};

const features = [
  {
    title: "Rapid Response",
    description:
      "Our average response time is 30 minutes or less in urban areas. We prioritize emergency calls to get help to you as fast as possible.",
  },
  {
    title: "24/7 Availability",
    description:
      "We're always here when you need us. Day or night, weekends or holidays, our dispatch team is standing by.",
  },
  {
    title: "GPS-Tracked Fleet",
    description:
      "Our entire fleet is GPS-tracked, allowing us to dispatch the nearest available truck to your location for faster service.",
  },
  {
    title: "All Vehicle Types",
    description:
      "From compact cars to SUVs and trucks, our flatbed and wheel-lift tow trucks can handle any standard vehicle.",
  },
  {
    title: "Safe Towing Practices",
    description:
      "Our certified operators use proper techniques to ensure your vehicle is transported safely without additional damage.",
  },
  {
    title: "Direct Insurance Billing",
    description:
      "We work with all major insurance providers and can bill your insurer directly, minimizing your out-of-pocket expenses.",
  },
];

const benefits = [
  "Average 30-minute response time in urban areas",
  "Fully licensed and insured operators",
  "Modern fleet with latest towing equipment",
  "Transparent pricing with no hidden fees",
  "GPS tracking for real-time updates",
  "Friendly, professional service every time",
];

export default function EmergencyTowingPage() {
  return (
    <ServicePageLayout
      title="Emergency Towing"
      subtitle="24/7 Emergency Service"
      description="Stranded on the road? Our emergency towing service provides fast, reliable assistance whenever and wherever you need it. With our rapid response team and nationwide coverage, help is just a phone call away."
      icon={AlertTriangle}
      features={features}
      benefits={benefits}
      pricing={{
        starting: "Starting at $89",
        note: "Final price depends on distance, vehicle type, and time of service. Free quotes available.",
      }}
    />
  );
}
