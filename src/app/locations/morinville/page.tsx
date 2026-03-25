import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Morinville",
  description:
    "24/7 towing and roadside assistance in Morinville, Legal, and Sturgeon County. Fast response. Call Guardium Towing at +1 780-809-7860.",
};

export default function MorinvillePage() {
  return (
    <LocationPageLayout
      city="Morinville"
      description="Guardium Towing provides reliable 24/7 towing and roadside assistance in Morinville, Legal, and throughout Sturgeon County. Professional service when you need it most."
      landmarks={[
        "100 Avenue",
        "100 Street",
        "Morinville Town Centre",
        "Notre Dame Park",
        "Legal",
        "Bon Accord",
        "Highway 2",
        "Highway 28",
      ]}
      neighboringAreas={[
        "Edmonton",
        "Spruce Grove",
      ]}
    />
  );
}
