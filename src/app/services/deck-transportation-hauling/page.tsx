import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Deck & Transportation Hauling",
  description:
    "Professional deck truck and transportation hauling services in Edmonton. Equipment transport, vehicle hauling, and more. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Equipment Transport",
    description:
      "Safe transport of construction equipment, machinery, and industrial equipment using our deck trucks and trailers.",
  },
  {
    title: "Vehicle Hauling",
    description:
      "Multi-vehicle transport services for dealerships, auctions, and private sales. Efficient and cost-effective.",
  },
  {
    title: "Container & Skid Transport",
    description:
      "Move shipping containers, skids, and palletized goods with our deck truck services.",
  },
  {
    title: "Oversized Load Hauling",
    description:
      "Equipped to handle oversized loads with proper permits and pilot car services when required.",
  },
  {
    title: "Agricultural Equipment",
    description:
      "Transport farm equipment, tractors, and implements safely to and from your location.",
  },
  {
    title: "Commercial Deliveries",
    description:
      "Reliable deck truck services for commercial and industrial delivery needs throughout Alberta.",
  },
];

const benefits = [
  "Modern deck truck fleet",
  "Experienced operators",
  "Flexible scheduling",
  "Competitive rates",
  "Fully insured transport",
  "Alberta-wide service",
];

export default function DeckTransportationHaulingPage() {
  return (
    <ServicePageLayout
      title="Deck & Transportation Hauling"
      subtitle="Equipment & Vehicle Transport"
      description="Our deck truck and transportation hauling services provide reliable solutions for moving equipment, vehicles, and materials throughout Edmonton and Alberta. Professional operators, proper equipment, and competitive pricing."
      iconName="Truck"
      features={features}
      benefits={benefits}
    />
  );
}
