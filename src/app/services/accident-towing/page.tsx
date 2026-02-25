import { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Accident Towing Edmonton | Guardium Towing",
  description:
    "Professional accident towing in Edmonton and surrounding areas. We handle post-collision vehicle removal, insurance coordination, and secure storage. Available 24/7.",
};

export default function AccidentTowingPage() {
  return (
    <ServicePageLayout
      title="Accident Towing"
      subtitle="Accident Recovery"
      description="Professional accident towing and vehicle recovery in Edmonton and surrounding communities. We handle post-collision vehicle removal with care, coordinate directly with your insurer, and provide secure storage while you sort out your claim."
      icon={AlertTriangle}
      features={[
        {
          title: "Post-Collision Vehicle Removal",
          description:
            "Safe removal of damaged vehicles from accident scenes with minimal additional damage to your car.",
        },
        {
          title: "Insurance Coordination",
          description:
            "We work directly with all major Alberta insurance companies to streamline the claims process.",
        },
        {
          title: "Photo Documentation",
          description:
            "Thorough photo documentation of your vehicle at the scene to support your insurance claim.",
        },
        {
          title: "Secure Vehicle Storage",
          description:
            "Safe, monitored storage for your vehicle while you work through the insurance and repair process.",
        },
        {
          title: "Scene Assistance",
          description:
            "Our operators assist with securing the area and safely removing your vehicle from the collision site.",
        },
        {
          title: "24/7 Emergency Response",
          description:
            "Accidents happen at any hour. Our team responds quickly day or night, including weekends and holidays.",
        },
      ]}
      benefits={[
        "Experienced in accident and collision towing",
        "Direct billing to all major insurance providers",
        "Secure, monitored storage facilities",
        "Respectful, professional service when you need it most",
        "Serving Edmonton, Sherwood Park, Leduc & surrounding areas",
        "Available 24/7, 365 days a year",
      ]}
      pricing={{
        starting: "Insurance Rates",
        note: "Accident towing is typically covered by insurance. We handle billing directly with your provider. Call us and we'll walk you through the process.",
      }}
    />
  );
}
