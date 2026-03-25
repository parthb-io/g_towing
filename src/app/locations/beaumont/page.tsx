import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Beaumont",
  description:
    "24/7 towing and roadside assistance in Beaumont, Alberta. Fast response, professional service. Call Guardium Towing at +1 780-809-7860.",
};

export default function BeaumontPage() {
  return (
    <LocationPageLayout
      city="Beaumont"
      description="Guardium Towing offers reliable 24/7 towing and roadside assistance services in Beaumont and the surrounding Leduc County area. Count on us for fast response and professional service."
      landmarks={[
        "50 Avenue",
        "50 Street",
        "Beaumont Town Centre",
        "Four Seasons Park",
        "Coloniale Estates",
        "Ruisseau",
        "Dansereau Meadows",
        "Highway 625",
      ]}
      neighboringAreas={[
        "Edmonton",
        "Leduc",
        "Sherwood Park",
      ]}
    />
  );
}
