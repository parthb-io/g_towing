import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Light & Medium Duty Towing",
  description:
    "24/7 light and medium duty towing services in Edmonton and area. We tow cars, SUVs, pickups, and vans safely and professionally. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Car & Sedan Towing",
    description:
      "Safe, reliable towing for all makes and models of cars. Our drivers are trained to handle your vehicle with care.",
  },
  {
    title: "SUV & Crossover Towing",
    description:
      "Equipped to tow SUVs and crossovers of all sizes, including luxury vehicles and all-wheel drive models.",
  },
  {
    title: "Pickup Truck Towing",
    description:
      "Full-size and mid-size pickup trucks are no problem. We have the equipment to handle any pickup safely.",
  },
  {
    title: "Van & Minivan Towing",
    description:
      "Cargo vans, passenger vans, and minivans. We can tow them all to your destination of choice.",
  },
  {
    title: "Lowered & Modified Vehicles",
    description:
      "Special handling for lowered vehicles, custom cars, and modified vehicles using flatbed or wheel lift as appropriate.",
  },
  {
    title: "Electric & Hybrid Vehicles",
    description:
      "Trained in proper handling of electric and hybrid vehicles, including Tesla, ensuring safe transport.",
  },
];

const benefits = [
  "Fast 30-minute average response time",
  "24/7 dispatch available",
  "Modern, well-maintained fleet",
  "GPS tracking for accurate ETAs",
  "Insurance documentation provided",
  "Serving Edmonton and surrounding areas",
];

export default function LightMediumDutyTowingPage() {
  return (
    <ServicePageLayout
      title="Light & Medium Duty Towing"
      subtitle="Cars, SUVs, Pickups & Vans"
      description="Whether you've broken down on the Henday, been in an accident, or need a vehicle moved, our light and medium duty towing service is ready 24/7. We serve Edmonton, Sherwood Park, Spruce Grove, and all surrounding communities with fast, professional service."
      iconName="Car"
      features={features}
      benefits={benefits}
    />
  );
}
