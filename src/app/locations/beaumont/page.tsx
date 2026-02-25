import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Beaumont, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance in Beaumont, AB. 24/7 emergency towing, battery boost, flatbed towing, tire repair, and fuel delivery.",
};

export default function BeaumontPage() {
  return (
    <LocationPageLayout
      city="Beaumont"
      description="Guardium Towing provides professional towing and roadside assistance in Beaumont, AB. Our team reaches Beaumont drivers quickly from our nearby Edmonton fleet, 24 hours a day."
      intro="Beaumont is a growing community south of Edmonton, and Guardium Towing is proud to serve its drivers whenever they need help. Whether you're on 50th Street, Township Road 510, or Highway 625, our team will reach you quickly. We offer the full range of towing and roadside services, from simple battery boosts to flatbed transport and heavy recovery."
      highlights={[
        "Full coverage throughout Beaumont and surrounding areas",
        "Quick response from our nearby Edmonton fleet",
        "All 10 towing and roadside services available",
        "Available 24/7, 365 days a year",
        "Direct billing to all major insurance providers",
        "Experienced, licensed operators",
      ]}
      testimonial={{
        text: "Needed a tow from Beaumont to Edmonton late at night. Guardium was fast, professional, and priced fairly. Would absolutely recommend.",
        name: "Carla S.",
        location: "Beaumont, AB",
      }}
    />
  );
}
