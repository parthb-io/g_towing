import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Morinville, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance in Morinville, AB and Sturgeon County. 24/7 emergency towing, battery boost, flatbed towing, tire repair, and more.",
};

export default function MorinvillePage() {
  return (
    <LocationPageLayout
      city="Morinville"
      description="Guardium Towing serves Morinville and Sturgeon County with professional, 24/7 towing and roadside assistance. Our team dispatches quickly from Edmonton to reach you fast."
      intro="Morinville and Sturgeon County drivers can rely on Guardium Towing for prompt, professional service. Whether you need a tow after a breakdown on Highway 2, assistance with a flat tire, a battery boost in cold weather, or emergency towing after an accident, our team is always available. We're proud to serve this growing community north of Edmonton."
      highlights={[
        "Coverage in Morinville and throughout Sturgeon County",
        "Serving Highway 2, Highway 642, and all local roads",
        "All 10 towing and roadside services available",
        "Available 24/7, 365 days a year",
        "Direct insurance billing available",
        "Professional, certified operators",
      ]}
      testimonial={{
        text: "My car broke down on Highway 2 near Morinville during a cold snap. Guardium showed up quickly and took great care of my vehicle. Very impressed.",
        name: "Linda P.",
        location: "Morinville, AB",
      }}
    />
  );
}
