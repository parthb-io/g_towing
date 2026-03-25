import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Edmonton",
  description:
    "24/7 towing and roadside assistance in Edmonton, Alberta. Fast response, professional service, fair pricing. Call Guardium Towing at +1 780-809-7860.",
};

export default function EdmontonPage() {
  return (
    <LocationPageLayout
      city="Edmonton"
      description="Guardium Towing provides comprehensive 24/7 towing and roadside assistance throughout Edmonton. From downtown to the suburbs, we're your trusted local towing partner with fast response times and professional service."
      landmarks={[
        "Downtown Edmonton",
        "Whyte Avenue",
        "West Edmonton Mall",
        "NAIT",
        "University of Alberta",
        "Kingsway",
        "Bonnie Doon",
        "Millwoods",
        "Riverbend",
        "Windermere",
        "South Edmonton Common",
        "North Edmonton",
        "Castledowns",
        "Griesbach",
      ]}
      neighboringAreas={[
        "Sherwood Park",
        "Spruce Grove",
        "Leduc",
        "Beaumont",
        "Devon",
        "Morinville",
      ]}
    />
  );
}
