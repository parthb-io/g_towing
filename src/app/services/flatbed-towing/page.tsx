import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Flatbed Towing Services",
  description:
    "Professional flatbed towing in Edmonton. Safe for luxury cars, lowered vehicles, AWD/4WD, and motorcycles. Call +1 780-809-7860 for service.",
};

const features = [
  {
    title: "Luxury Vehicle Transport",
    description:
      "Safe flatbed transport for high-end vehicles including BMW, Mercedes, Audi, Porsche, and more. Your vehicle never touches the road.",
  },
  {
    title: "AWD & 4WD Vehicles",
    description:
      "Flatbed is the safest method for all-wheel drive and four-wheel drive vehicles. Prevents drivetrain damage during transport.",
  },
  {
    title: "Lowered Vehicles",
    description:
      "Zero-degree loading capability for extremely lowered vehicles, ensuring safe loading without scraping.",
  },
  {
    title: "Classic & Collector Cars",
    description:
      "Gentle handling for classic cars, collector vehicles, and show cars. We understand the value of your investment.",
  },
  {
    title: "Motorcycle Transport",
    description:
      "Secure motorcycle transport on our flatbed with proper tie-downs and wheel chocks for safe delivery.",
  },
  {
    title: "Damaged Vehicle Transport",
    description:
      "Safely transport vehicles with wheel damage, steering issues, or other problems that prevent traditional towing.",
  },
];

const benefits = [
  "Zero-degree loading available",
  "No drivetrain stress or damage",
  "Ideal for luxury & sports cars",
  "Safe for AWD/4WD vehicles",
  "Motorcycle capable",
  "Professional, careful operators",
];

export default function FlatbedTowingPage() {
  return (
    <ServicePageLayout
      title="Flatbed Towing"
      subtitle="Premium Vehicle Transport"
      description="Our flatbed towing service is the safest way to transport your vehicle. With the entire vehicle secured on the flatbed, there's no drivetrain stress and no risk of road debris damage. Ideal for luxury vehicles, lowered cars, AWD/4WD, and any situation where you want maximum protection."
      iconName="Truck"
      features={features}
      benefits={benefits}
    />
  );
}
