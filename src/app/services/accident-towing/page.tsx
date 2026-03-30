import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Accident Towing & Recovery",
  description:
    "24/7 accident towing and recovery services in Edmonton. Professional scene cleanup, documentation, and secure storage. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Emergency Response",
    description:
      "Rapid dispatch to accident scenes across Edmonton and surrounding areas. Available 24/7, 365 days a year.",
  },
  {
    title: "Vehicle Recovery",
    description:
      "Professional recovery of vehicles from accident scenes, including uprighting overturned vehicles and extraction from difficult situations.",
  },
  {
    title: "Scene Cleanup",
    description:
      "Complete debris cleanup and fluid containment to restore the roadway and ensure safety for other motorists.",
  },
  {
    title: "Photo Documentation",
    description:
      "Detailed photographic documentation of the accident scene and vehicle condition for your records.",
  },
  {
    title: "Secure Storage",
    description:
      "Safe, secure storage facilities for your vehicle while repairs are arranged or you decide next steps.",
  },
];

const benefits = [
  "24/7 emergency dispatch",
  "Professional scene management",
  "Secure storage facilities",
  "Complete documentation",
  "Photo records provided",
  "Compassionate, professional service",
];

export default function AccidentTowingPage() {
  return (
    <ServicePageLayout
      title="Accident Towing & Recovery"
      subtitle="Emergency Accident Response"
      description="Being in an accident is stressful. Our professional team handles everything from vehicle recovery to scene cleanup, so you can focus on what matters. We respond quickly, provide documentation, and treat you with care during a difficult time."
      iconName="AlertTriangle"
      features={features}
      benefits={benefits}
    />
  );
}
