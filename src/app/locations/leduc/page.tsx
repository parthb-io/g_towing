import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Leduc",
  description:
    "24/7 towing and roadside assistance in Leduc, Nisku, and near Edmonton International Airport. Call Guardium Towing at +1 780-809-7860.",
};

export default function LeducPage() {
  return (
    <LocationPageLayout
      city="Leduc"
      description="Guardium Towing offers comprehensive 24/7 towing and roadside assistance in Leduc, the Nisku industrial area, and near Edmonton International Airport. Fast response for both personal and commercial vehicles."
      landmarks={[
        "50 Street",
        "50 Avenue",
        "Leduc Town Centre",
        "Nisku Industrial Park",
        "Edmonton International Airport",
        "Highway 2",
        "Leduc County",
        "Telford Lake",
        "Southfork",
      ]}
      neighboringAreas={[
        "Edmonton",
        "Beaumont",
        "Devon",
      ]}
    />
  );
}
