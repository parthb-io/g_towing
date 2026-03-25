import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Devon",
  description:
    "24/7 towing and roadside assistance in Devon and along Highway 60. Fast response. Call Guardium Towing at +1 780-809-7860.",
};

export default function DevonPage() {
  return (
    <LocationPageLayout
      city="Devon"
      description="Guardium Towing serves Devon and communities along Highway 60 with professional 24/7 towing and roadside assistance. We're here to help you get back on the road safely."
      landmarks={[
        "Devon Town Centre",
        "Highway 60",
        "Athabasca Avenue",
        "Lions Park",
        "Devon Golf Course",
        "Calmar",
        "Thorsby",
      ]}
      neighboringAreas={[
        "Edmonton",
        "Leduc",
        "Spruce Grove",
      ]}
    />
  );
}
