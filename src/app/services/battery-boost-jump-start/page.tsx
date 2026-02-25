import { Metadata } from "next";
import { Zap } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Battery Boost & Jump Start Edmonton | Guardium Towing",
  description:
    "Fast battery boost and jump start service in Edmonton and surrounding areas. Dead battery? We'll get you running in minutes. Available 24/7.",
};

export default function BatteryBoostJumpStartPage() {
  return (
    <ServicePageLayout
      title="Battery Boost & Jump Start"
      subtitle="Battery Service"
      description="Dead battery leaving you stranded? Our battery boost and jump start service gets you back on the road fast — no tow required. We respond 24/7 across Edmonton, Sherwood Park, St. Albert, and all surrounding communities."
      icon={Zap}
      features={[
        {
          title: "Fast Jump Start Service",
          description:
            "We arrive quickly and jump start your vehicle using professional-grade booster packs and cables.",
        },
        {
          title: "Cold Weather Specialists",
          description:
            "Edmonton winters are brutal on batteries. We're experienced with cold-weather battery failures and boosting procedures.",
        },
        {
          title: "Battery Diagnostics",
          description:
            "After the boost, we can assess whether your battery needs replacement or if there's an underlying charging issue.",
        },
        {
          title: "All Vehicle Types",
          description:
            "Cars, trucks, SUVs, vans, diesels, and most hybrid vehicles can be boosted by our technicians.",
        },
        {
          title: "No Damage to Your Vehicle",
          description:
            "Our technicians follow proper procedures to boost your vehicle safely without risk to electrical systems.",
        },
        {
          title: "24/7 Availability",
          description:
            "A dead battery doesn't wait for business hours — and neither do we. We're available any time, day or night.",
        },
      ]}
      benefits={[
        "Typically arrive within 20–30 minutes",
        "Experienced with Alberta's extreme cold weather",
        "Professional-grade boosting equipment",
        "Honest advice on battery health after service",
        "Serving all of Edmonton and surrounding area",
        "Often resolves the issue without a tow",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Battery boost service is priced affordably. We provide upfront pricing before any work begins.",
      }}
    />
  );
}
