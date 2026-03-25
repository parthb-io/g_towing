import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Spruce Grove",
  description:
    "24/7 towing and roadside assistance in Spruce Grove, Stony Plain, and Parkland County. Fast response. Call Guardium Towing at +1 780-809-7860.",
};

export default function SpruceGrovePage() {
  return (
    <LocationPageLayout
      city="Spruce Grove"
      description="Guardium Towing provides dependable 24/7 towing and roadside assistance in Spruce Grove, Stony Plain, and throughout Parkland County. We're ready to help whenever you need us."
      landmarks={[
        "Century Road",
        "King Street",
        "Spruce Grove City Centre",
        "Stony Plain",
        "Highway 16A",
        "Grove Drive",
        "Heritage Grove",
        "Greenbury",
        "Parkland Village",
      ]}
      neighboringAreas={[
        "Edmonton",
        "Devon",
        "Morinville",
      ]}
    />
  );
}
