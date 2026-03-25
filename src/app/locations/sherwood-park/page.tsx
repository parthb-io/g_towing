import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Sherwood Park",
  description:
    "24/7 towing and roadside assistance in Sherwood Park and Strathcona County. Fast response, professional service. Call Guardium Towing at +1 780-809-7860.",
};

export default function SherwoodParkPage() {
  return (
    <LocationPageLayout
      city="Sherwood Park"
      description="Guardium Towing serves all of Sherwood Park and Strathcona County with reliable 24/7 towing and roadside assistance. Our team knows the area well and provides fast, professional service when you need it most."
      landmarks={[
        "Broadmoor",
        "Lakeland Ridge",
        "Summerwood",
        "Clover Bar",
        "Baseline Road",
        "Sherwood Drive",
        "Festival Place",
        "Millennium Place",
        "Brentwood",
        "Nottingham",
        "Salisbury",
      ]}
      neighboringAreas={[
        "Edmonton",
        "Beaumont",
        "Leduc",
      ]}
    />
  );
}
