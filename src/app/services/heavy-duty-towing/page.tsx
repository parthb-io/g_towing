import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Heavy Duty Towing Services",
  description:
    "Professional heavy-duty towing in Edmonton for trucks, buses, RVs, and commercial vehicles up to 50 tons. 24/7 service. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Commercial Truck Towing",
    description:
      "Semi-trucks, delivery trucks, box trucks, and commercial vehicles. Our heavy-duty wreckers can handle it all safely and efficiently.",
  },
  {
    title: "Bus & Coach Towing",
    description:
      "School buses, charter coaches, and transit buses. We have the specialized equipment to tow large passenger vehicles safely.",
  },
  {
    title: "RV & Motorhome Towing",
    description:
      "Class A, B, and C motorhomes, travel trailers, and fifth wheels. Gentle handling to protect your home away from home.",
  },
  {
    title: "Construction Equipment",
    description:
      "Excavators, loaders, and other construction equipment. Our lowboy trailers can transport heavy machinery to and from job sites.",
  },
  {
    title: "Fleet Services",
    description:
      "Dedicated support for fleet operators with priority response, volume discounts, and detailed reporting for your records.",
  },
  {
    title: "Accident Recovery",
    description:
      "Heavy-duty accident recovery including uprighting overturned vehicles, cargo recovery, and site cleanup services.",
  },
];

const benefits = [
  "Equipment rated for vehicles up to 50 tons",
  "Experienced heavy-duty certified operators",
  "Specialized trailers for various vehicle types",
  "24/7 dispatch for commercial emergencies",
  "Fleet account programs available",
  "Serving Edmonton and all of Alberta",
];

export default function HeavyDutyTowingPage() {
  return (
    <ServicePageLayout
      title="Heavy Duty Towing"
      subtitle="Commercial & Industrial"
      description="When standard tow trucks aren't enough, our heavy-duty fleet steps in. With specialized equipment and trained operators, we handle everything from semi-trucks to construction equipment with precision and care."
      iconName="Truck"
      features={features}
      benefits={benefits}
    />
  );
}
