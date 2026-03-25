import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Tire Repair & Replacement",
  description:
    "24/7 roadside tire repair and replacement in Edmonton. Flat tire? We'll fix it or replace it. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Flat Tire Change",
    description:
      "We'll change your flat tire with your spare, getting you back on the road quickly and safely.",
  },
  {
    title: "Spare Tire Installation",
    description:
      "Professional installation of your spare tire with proper torque specifications to ensure safety.",
  },
  {
    title: "Tire Repair",
    description:
      "Minor punctures can often be repaired on-site with professional tire plugs, saving you the cost of a new tire.",
  },
  {
    title: "No Spare? No Problem",
    description:
      "If you don't have a spare, we can tow you to a tire shop or source a replacement tire for on-site installation.",
  },
  {
    title: "Run-Flat Service",
    description:
      "Specialized service for vehicles with run-flat tires that require different handling procedures.",
  },
  {
    title: "Commercial Tire Service",
    description:
      "Tire service for commercial vehicles, trucks, and fleet vehicles to minimize downtime.",
  },
];

const benefits = [
  "24/7 availability",
  "Fast response time",
  "Professional equipment",
  "On-site repair when possible",
  "New tire sourcing available",
  "Commercial vehicles welcome",
];

export default function TireRepairReplacementPage() {
  return (
    <ServicePageLayout
      title="Tire Repair & Replacement"
      subtitle="Roadside Tire Service"
      description="A flat tire doesn't have to stop you. Our roadside tire service includes flat tire changes, spare installation, and tire repair. If you don't have a spare, we can tow you to a tire shop or source a replacement. Fast, professional service 24/7."
      iconName="CircleDot"
      features={features}
      benefits={benefits}
    />
  );
}
