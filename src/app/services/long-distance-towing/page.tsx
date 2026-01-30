import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Route } from "lucide-react";

export const metadata: Metadata = {
  title: "Long Distance Towing Services",
  description:
    "Safe and reliable long-distance vehicle transport across Canada and to the USA. Enclosed and open transport options available with real-time tracking.",
};

const features = [
  {
    title: "Coast-to-Coast Transport",
    description:
      "We transport vehicles anywhere in Canada and to major US destinations. Vancouver to Halifax, Toronto to Calgary, and everywhere in between.",
  },
  {
    title: "Enclosed Transport",
    description:
      "Protect your vehicle from weather and road debris with our enclosed car carriers. Ideal for classic cars, luxury vehicles, and motorcycles.",
  },
  {
    title: "Open Carrier Transport",
    description:
      "Cost-effective option for standard vehicles. Our multi-car carriers can transport your vehicle safely alongside others.",
  },
  {
    title: "Door-to-Door Service",
    description:
      "We pick up from your location and deliver directly to your destination. No need to drop off or pick up at terminals.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track your vehicle's journey in real-time with our GPS tracking system. Get updates on estimated arrival times.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Plan your transport around your schedule. We offer flexible pickup and delivery windows to accommodate your needs.",
  },
];

const benefits = [
  "Competitive per-kilometer rates",
  "Full insurance coverage during transport",
  "Experienced long-haul drivers",
  "Regular status updates throughout journey",
  "Both enclosed and open transport options",
  "Cross-border transport to the USA available",
];

export default function LongDistanceTowingPage() {
  return (
    <ServicePageLayout
      title="Long Distance Towing"
      subtitle="Nationwide Transport"
      description="Moving across the country? Buying a car from another province? Our long-distance towing service provides safe, reliable vehicle transport anywhere in Canada and to the USA. Your vehicle arrives in the same condition it left."
      icon={Route}
      features={features}
      benefits={benefits}
      pricing={{
        starting: "From $1.50/km",
        note: "Pricing based on distance, vehicle type, and transport method. Get a free quote for your specific route.",
      }}
    />
  );
}
