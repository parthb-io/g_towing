import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Fuel Delivery Service",
  description:
    "24/7 emergency fuel delivery in Edmonton. Ran out of gas? We'll bring fuel to you. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Gasoline Delivery",
    description:
      "We deliver regular and premium gasoline directly to your location. Enough fuel to get you to the nearest gas station.",
  },
  {
    title: "Diesel Delivery",
    description:
      "Diesel fuel delivery for trucks, SUVs, and commercial vehicles. Don't let an empty tank stop your day.",
  },
  {
    title: "Fast Response",
    description:
      "We understand running out of fuel is stressful. Our average response time is under 30 minutes in Edmonton.",
  },
  {
    title: "Safe Handling",
    description:
      "All fuel is transported and dispensed safely using approved containers and equipment.",
  },
  {
    title: "Any Location",
    description:
      "Whether you're on the highway, in a parking lot, or at home, we'll come to you with the fuel you need.",
  },
  {
    title: "Commercial Service",
    description:
      "Fleet vehicles and commercial trucks welcome. Keep your business moving with our fuel delivery service.",
  },
];

const benefits = [
  "Available 24/7",
  "Regular, premium, and diesel",
  "Fast response time",
  "Any location in service area",
  "Competitive fuel prices",
  "No membership required",
];

export default function FuelDeliveryPage() {
  return (
    <ServicePageLayout
      title="Fuel Delivery"
      subtitle="Emergency Fuel Service"
      description="Ran out of gas? It happens to the best of us. Our emergency fuel delivery service brings gasoline or diesel directly to your location so you can get back on the road without the hassle of walking to a gas station."
      iconName="Fuel"
      features={features}
      benefits={benefits}
    />
  );
}
