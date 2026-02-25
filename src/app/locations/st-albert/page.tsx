import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in St. Albert, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance in St. Albert, AB. 24/7 emergency towing, flatbed towing, battery boost, tire repair, fuel delivery, and more.",
};

export default function StAlbertPage() {
  return (
    <LocationPageLayout
      city="St. Albert"
      description="Guardium Towing provides fast, reliable towing and roadside assistance throughout St. Albert, AB. Our team is available 24/7 and reaches St. Albert drivers quickly from our nearby Edmonton dispatch."
      intro="St. Albert is one of Edmonton's largest neighbouring cities, and Guardium Towing proudly serves its residents with professional, responsive towing service. Whether you're on St. Albert Trail, Ray Gibbon Drive, or in any of St. Albert's established neighbourhoods, we'll be there fast. Our team handles everything from simple flat tire changes to emergency accident towing with the same level of care and professionalism."
      highlights={[
        "Coverage throughout all St. Albert neighbourhoods",
        "Serving St. Albert Trail, Ray Gibbon Drive, and all major roads",
        "Fast response from our nearby Edmonton dispatch",
        "All 10 towing and roadside services available",
        "Direct billing to all major Alberta insurance providers",
        "Available 24/7, including weekends and holidays",
      ]}
      testimonial={{
        text: "My battery died in a St. Albert parking lot in January. Guardium was there in under 25 minutes and got me boosted and on my way. Great service!",
        name: "David K.",
        location: "St. Albert, AB",
      }}
    />
  );
}
