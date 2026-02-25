import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Spruce Grove, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance in Spruce Grove and Parkland County. 24/7 emergency towing, battery boost, flatbed towing, tire repair, and more.",
};

export default function SpruceGrovePage() {
  return (
    <LocationPageLayout
      city="Spruce Grove"
      description="Guardium Towing serves Spruce Grove and Parkland County with professional, 24/7 towing and roadside assistance. Fast, reliable service when you need it most."
      intro="Spruce Grove and Parkland County drivers can count on Guardium Towing for fast, professional service. Whether you're on the Yellowhead Bypass, Highway 16A, or anywhere in the city, our team dispatches quickly from Edmonton to reach you. From battery boosts in cold weather to flatbed towing for your AWD vehicle, we handle it all."
      highlights={[
        "Coverage throughout Spruce Grove and Parkland County",
        "Serving Highway 16A, Yellowhead Bypass, and all local roads",
        "All 10 towing and roadside services available",
        "Fast dispatch from our Edmonton base",
        "Available 24/7 including holidays",
        "Transparent pricing with no hidden fees",
      ]}
      testimonial={{
        text: "My truck wouldn't start in -30 weather. Guardium showed up fast and got me boosted and on my way. Friendly driver and great service.",
        name: "Ryan M.",
        location: "Spruce Grove, AB",
      }}
    />
  );
}
