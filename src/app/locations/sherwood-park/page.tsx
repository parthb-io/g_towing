import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Sherwood Park, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance in Sherwood Park and Strathcona County. 24/7 emergency towing, flatbed, battery boost, tire repair, and more.",
};

export default function SherwoodParkPage() {
  return (
    <LocationPageLayout
      city="Sherwood Park"
      description="Guardium Towing provides fast, professional towing and roadside assistance throughout Sherwood Park and Strathcona County. Our team is available 24/7 and responds quickly from nearby Edmonton."
      intro="Sherwood Park drivers trust Guardium Towing for reliable, professional towing service. Whether you're dealing with a breakdown on Baseline Road, a flat tire in a parking lot, or need emergency towing after an accident, we're ready to help any time of day or night. Our proximity to Edmonton means fast response times throughout Sherwood Park and the surrounding Strathcona County area."
      highlights={[
        "Coverage throughout Sherwood Park and Strathcona County",
        "Serving all major roads including Baseline Road, Sherwood Drive, and Highway 16",
        "Fast response from nearby Edmonton dispatch",
        "All 10 towing and roadside services available",
        "Direct insurance billing for accident towing",
        "Available 24/7, 365 days a year",
      ]}
      testimonial={{
        text: "Called Guardium after getting a flat on Baseline Road. They were there within 30 minutes and had me sorted out quickly. Great service and very professional.",
        name: "Michelle R.",
        location: "Sherwood Park, AB",
      }}
    />
  );
}
