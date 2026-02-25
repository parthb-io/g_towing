import { Metadata } from "next";
import { Truck } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Light & Medium Duty Towing Edmonton | Guardium Towing",
  description:
    "Fast, reliable light and medium duty towing in Edmonton and surrounding areas. We tow cars, SUVs, vans, and pickup trucks 24/7. Call 1-800-GUARDIUM.",
};

export default function LightMediumDutyTowingPage() {
  return (
    <ServicePageLayout
      title="Light & Medium Duty Towing"
      subtitle="Towing Service"
      description="Fast, reliable towing for cars, SUVs, vans, and light pickup trucks throughout Edmonton and the surrounding area. We're available 24/7 and our average response time is 20–30 minutes."
      icon={Truck}
      features={[
        {
          title: "All Passenger Vehicles",
          description:
            "We tow sedans, hatchbacks, coupes, SUVs, crossovers, minivans, and light pickup trucks of all makes and models.",
        },
        {
          title: "24/7 Dispatch",
          description:
            "Our dispatch team is available around the clock. Call any time — day, night, weekends, or holidays.",
        },
        {
          title: "Fast Response Times",
          description:
            "With trucks stationed throughout Edmonton and surrounding communities, we typically arrive within 20–30 minutes.",
        },
        {
          title: "GPS-Tracked Fleet",
          description:
            "All our trucks are GPS-tracked so we can route the nearest available driver to your location.",
        },
        {
          title: "Direct Insurance Billing",
          description:
            "We work directly with all major Alberta insurance providers to handle billing on your behalf.",
        },
        {
          title: "Safe Vehicle Handling",
          description:
            "Our operators are trained to secure and transport your vehicle without causing additional damage.",
        },
      ]}
      benefits={[
        "Serving Edmonton, Sherwood Park, St. Albert, Spruce Grove, Leduc & more",
        "Upfront pricing with no hidden fees",
        "Fully licensed and insured operators",
        "4.9-star customer rating",
        "All major insurance providers accepted",
        "15+ years serving Edmonton drivers",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Pricing depends on distance, vehicle type, and time of service. We provide upfront quotes before any work begins.",
      }}
    />
  );
}
