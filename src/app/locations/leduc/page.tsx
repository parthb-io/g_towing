import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Leduc, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance in Leduc, AB and Leduc County. 24/7 emergency towing, flatbed towing, battery boost, tire repair, and more.",
};

export default function LeducPage() {
  return (
    <LocationPageLayout
      city="Leduc"
      description="Guardium Towing provides professional, 24/7 towing and roadside assistance in Leduc and Leduc County. Fast response times near the Edmonton International Airport corridor and all major highways."
      intro="Leduc sits at a major crossroads south of Edmonton, and Guardium Towing is well-positioned to serve drivers in the area. Whether you're near the Edmonton International Airport, on Highway 2 (QEII), or anywhere in Leduc County, our team responds quickly. We handle everything from simple battery boosts to complex heavy-duty recoveries for commercial vehicles traveling the busy airport corridor."
      highlights={[
        "Coverage in Leduc and throughout Leduc County",
        "Serving Highway 2 (QEII), Airport Road, and all local roads",
        "Near Edmonton International Airport — fast response for all travellers",
        "All 10 towing and roadside services available",
        "Heavy duty available for commercial vehicles on QEII corridor",
        "Available 24/7, 365 days a year",
      ]}
      testimonial={{
        text: "Had a blowout on QEII near Leduc heading to the airport. Guardium was there super fast, changed my tire, and I still made my flight. Amazing service.",
        name: "Brian K.",
        location: "Leduc, AB",
      }}
    />
  );
}
