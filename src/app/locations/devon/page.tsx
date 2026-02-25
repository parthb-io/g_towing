import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Devon, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance in Devon, AB. 24/7 emergency towing, battery boost, flatbed towing, tire repair, and fuel delivery.",
};

export default function DevonPage() {
  return (
    <LocationPageLayout
      city="Devon"
      description="Guardium Towing provides reliable towing and roadside assistance in Devon, AB and surrounding rural areas. Fast, professional service available 24 hours a day, 7 days a week."
      intro="Devon drivers can count on Guardium Towing for prompt, professional service. Situated just southwest of Edmonton on the North Saskatchewan River, Devon is well within our service range. Whether you're stranded on Highway 60, near the Devon Bypass, or on a rural road in Leduc County, our team will get to you fast and handle your situation with care."
      highlights={[
        "Coverage in Devon and surrounding Leduc County roads",
        "Serving Highway 60, Devon Bypass, and rural routes",
        "All 10 towing and roadside services available",
        "Fast dispatch from nearby Edmonton and Leduc",
        "Available 24/7 including weekends and holidays",
        "Fully insured and licensed operators",
      ]}
      testimonial={{
        text: "Ran out of gas outside Devon on a Sunday evening. Guardium had someone to me in about 25 minutes. Exactly what I needed — fast and professional.",
        name: "Tom H.",
        location: "Devon, AB",
      }}
    />
  );
}
