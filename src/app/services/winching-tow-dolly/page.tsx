import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Winching & Tow Dolly Services",
  description:
    "Professional winching and tow dolly services in Edmonton. Vehicle recovery from ditches, snow, mud, and more. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Winch-Out Recovery",
    description:
      "Powerful winching equipment to extract vehicles stuck in ditches, snow banks, mud, or off-road situations.",
  },
  {
    title: "Ditch Recovery",
    description:
      "Safe recovery of vehicles that have gone into ditches. We assess the situation and use the right technique for safe extraction.",
  },
  {
    title: "Snow & Ice Recovery",
    description:
      "Alberta winters are tough. When you're stuck in snow or ice, we have the equipment to get you out safely.",
  },
  {
    title: "Mud & Off-Road Recovery",
    description:
      "Stuck off-road or in mud? Our winching capabilities can extract vehicles from challenging terrain.",
  },
  {
    title: "Tow Dolly Transport",
    description:
      "Front-wheel lift tow dolly service for vehicles that can be safely towed with rear wheels on the ground.",
  },
  {
    title: "Commercial Vehicle Winching",
    description:
      "Heavy-duty winching for larger vehicles, trucks, and equipment that need extra pulling power.",
  },
];

const benefits = [
  "Powerful winching equipment",
  "Experienced recovery operators",
  "Available 24/7",
  "All weather conditions",
  "Safe extraction techniques",
  "Insurance documentation provided",
];

export default function WinchingTowDollyPage() {
  return (
    <ServicePageLayout
      title="Winching & Tow Dolly"
      subtitle="Vehicle Recovery Services"
      description="Stuck in a ditch? Buried in snow? Our professional winching and recovery services can extract your vehicle safely from almost any situation. Our experienced operators assess each situation and use the appropriate technique to get you back on the road."
      iconName="Truck"
      features={features}
      benefits={benefits}
    />
  );
}
