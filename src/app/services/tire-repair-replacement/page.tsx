import { Metadata } from "next";
import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Tire Repair & Replacement Edmonton | Guardium Towing",
  description:
    "On-site tire repair and spare tire installation in Edmonton and area. Flat tire? We come to you and get you moving. Available 24/7.",
};

export default function TireRepairReplacementPage() {
  return (
    <ServicePageLayout
      title="Tire Repair & Replacement"
      subtitle="Tire Service"
      description="Flat tire stranding you on the side of the road? Our technicians come to you for on-site spare tire installation or tire repair — getting you moving again without the hassle of waiting for a tow. Available 24/7 across Edmonton and area."
      icon={Car}
      features={[
        {
          title: "Spare Tire Installation",
          description:
            "We'll swap your flat for your spare tire on-site, getting you back on the road quickly and safely.",
        },
        {
          title: "On-Site Tire Assessment",
          description:
            "Our technicians assess whether your flat can be repaired roadside or whether you need a tow to a shop.",
        },
        {
          title: "All Vehicle Types",
          description:
            "Sedans, SUVs, trucks, vans, and light commercial vehicles — we handle tire issues for any passenger vehicle.",
        },
        {
          title: "Safe Location Assistance",
          description:
            "If it's unsafe to change your tire at your current location, we help move you to a safer spot first.",
        },
        {
          title: "Proper Torqueing & Safety",
          description:
            "Lug nuts are tightened to proper torque spec and your spare is verified safe for the road before we leave.",
        },
        {
          title: "24/7 Availability",
          description:
            "Flat tires happen at the worst times. We're available any time of day or night to help you out.",
        },
      ]}
      benefits={[
        "Comes directly to your location",
        "Often avoids the need for a tow entirely",
        "Professional, safe tire change procedure",
        "Serving Edmonton, Sherwood Park, Leduc & surrounding areas",
        "Fast response — average 20–30 minutes",
        "Transparent pricing before any work begins",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Tire service pricing depends on the job required. We provide a clear, upfront quote when you call.",
      }}
    />
  );
}
