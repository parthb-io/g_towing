import { Metadata } from "next";
import { Fuel } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Fuel Delivery Edmonton | Guardium Towing",
  description:
    "Emergency fuel delivery in Edmonton and surrounding areas. Run out of gas? We deliver gasoline or diesel directly to your location. Available 24/7.",
};

export default function FuelDeliveryPage() {
  return (
    <ServicePageLayout
      title="Fuel Delivery"
      subtitle="Fuel Service"
      description="Run out of gas and stranded? Our fuel delivery service brings gasoline or diesel directly to your location across Edmonton and surrounding communities — no tow required. We're available 24 hours a day, 7 days a week."
      icon={Fuel}
      features={[
        {
          title: "Gasoline & Diesel Delivery",
          description:
            "We deliver both gasoline and diesel fuel to your location, covering the majority of passenger and commercial vehicles.",
        },
        {
          title: "Fast Response",
          description:
            "Our team responds quickly to stranded motorists — typically arriving within 20–30 minutes across Edmonton and area.",
        },
        {
          title: "Anywhere You're Stranded",
          description:
            "Whether you're on a highway, in a parking lot, or a side street, we'll bring fuel directly to you.",
        },
        {
          title: "Safe Fuel Handling",
          description:
            "Our technicians follow safe fuel handling procedures to protect you, your vehicle, and other road users.",
        },
        {
          title: "No Tow Required",
          description:
            "In most cases, a fuel delivery means you can continue driving without the expense or inconvenience of a tow.",
        },
        {
          title: "24/7 Availability",
          description:
            "Running out of fuel can happen any time. We're available day and night, including weekends and holidays.",
        },
      ]}
      benefits={[
        "Avoid the cost and hassle of a tow",
        "Fast delivery across Edmonton and surrounding area",
        "Serving Sherwood Park, St. Albert, Spruce Grove, Leduc & more",
        "Gasoline and diesel both available",
        "Transparent pricing — you know the cost upfront",
        "Friendly, professional technicians",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Fuel delivery includes a service fee plus the cost of fuel. We provide clear pricing when you call.",
      }}
    />
  );
}
