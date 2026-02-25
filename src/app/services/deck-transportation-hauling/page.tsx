import { Metadata } from "next";
import { Truck } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Deck & Transportation Hauling Edmonton | Guardium Towing",
  description:
    "Professional deck and transportation hauling in Edmonton and Alberta. We transport heavy equipment, machinery, and oversized loads using lowboy and step-deck trailers.",
};

export default function DeckTransportationHaulingPage() {
  return (
    <ServicePageLayout
      title="Deck & Transportation Hauling"
      subtitle="Hauling Service"
      description="Specialized deck and lowboy transportation for heavy equipment, machinery, agricultural implements, and oversized loads throughout Edmonton and across Alberta. We handle permits and route planning."
      icon={Truck}
      features={[
        {
          title: "Lowboy Transport",
          description:
            "Lowboy trailers for heavy construction equipment including excavators, bulldozers, cranes, and graders.",
        },
        {
          title: "Step-Deck Hauling",
          description:
            "Step-deck (drop-deck) trailers for tall equipment and oversized loads that exceed standard height limits.",
        },
        {
          title: "Agricultural Equipment",
          description:
            "Safe transport of combines, tractors, seeders, and other large agricultural machinery across Alberta.",
        },
        {
          title: "Industrial Machinery",
          description:
            "Moving heavy manufacturing equipment, generators, transformers, and industrial components.",
        },
        {
          title: "Permit Management",
          description:
            "We handle all required oversize and overweight provincial transport permits for your load.",
        },
        {
          title: "Route Planning",
          description:
            "Careful route assessment to ensure safe passage of oversized loads including bridge weight checks.",
        },
      ]}
      benefits={[
        "Experienced in oversize and overweight loads",
        "Alberta provincial permits handled",
        "Route surveys and planning included",
        "Licensed and insured for heavy hauling",
        "Serving Edmonton and all of Alberta",
        "Flexible scheduling for project timelines",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Hauling rates depend on load dimensions, weight, distance, and permit requirements. Contact us for a detailed quote.",
      }}
    />
  );
}
