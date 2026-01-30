import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Accident Recovery Services",
  description:
    "Professional accident recovery and vehicle retrieval services. We handle everything from vehicle removal to debris cleanup, working directly with insurance companies.",
};

const features = [
  {
    title: "24/7 Accident Response",
    description:
      "Accidents don't wait for business hours. Our accident recovery team is available around the clock for immediate response.",
  },
  {
    title: "Vehicle Uprighting",
    description:
      "Overturned vehicle? Our heavy-duty equipment can safely upright vehicles of all sizes while minimizing additional damage.",
  },
  {
    title: "Debris Cleanup",
    description:
      "We don't just remove your vehicle - we clean up debris, fluids, and hazardous materials from the accident scene.",
  },
  {
    title: "Insurance Coordination",
    description:
      "We work directly with your insurance company, handling documentation, photos, and billing to streamline your claim process.",
  },
  {
    title: "Police & Emergency Coordination",
    description:
      "We coordinate with police and emergency services to ensure proper scene management and timely vehicle removal.",
  },
  {
    title: "Secure Storage",
    description:
      "Your vehicle is transported to our secure, fenced storage facility until you or your insurance company arranges next steps.",
  },
];

const benefits = [
  "Rapid response to accident scenes",
  "Complete scene cleanup services",
  "Direct billing to insurance companies",
  "Detailed photo documentation",
  "Secure storage facilities",
  "Coordination with body shops and insurers",
];

export default function AccidentRecoveryPage() {
  return (
    <ServicePageLayout
      title="Accident Recovery"
      subtitle="Complete Recovery Services"
      description="After an accident, you need a professional team you can trust. Our accident recovery service handles everything from safe vehicle removal to debris cleanup, working seamlessly with insurance companies to minimize your stress."
      icon={Car}
      features={features}
      benefits={benefits}
      pricing={{
        starting: "Insurance Rates Apply",
        note: "Most accident recovery is covered by insurance. We bill your insurer directly in most cases.",
      }}
    />
  );
}
