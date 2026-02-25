import { Metadata } from "next";
import { LocationPageLayout } from "@/components/location-page-layout";

export const metadata: Metadata = {
  title: "Towing Services in Edmonton, AB | Guardium Towing",
  description:
    "Professional towing and roadside assistance throughout Edmonton, AB. 24/7 emergency towing, flatbed towing, battery boost, tire repair, and more. Call 1-800-GUARDIUM.",
};

export default function EdmontonPage() {
  return (
    <LocationPageLayout
      city="Edmonton"
      description="Guardium Towing is Edmonton's trusted towing company. We provide fast, professional towing and roadside assistance throughout Edmonton — from the Whitemud to the Yellowhead, and everywhere in between. Available 24/7."
      intro="Edmonton drivers count on Guardium Towing when they need help most. Whether you're stuck on the Anthony Henday, stranded in a parking lot, or need a scheduled vehicle transport, our team is dispatched quickly from locations across the city. We've been serving Edmonton and its communities for over 15 years with a reputation built on reliability, honesty, and professional service."
      highlights={[
        "Coverage across all Edmonton neighbourhoods and communities",
        "All major highways including Anthony Henday, Whitemud, Yellowhead, and QEII",
        "Average response time of 20–30 minutes",
        "All 10 towing and roadside services available",
        "Direct billing to all major Alberta insurance providers",
        "Licensed, certified, and background-checked operators",
      ]}
      testimonial={{
        text: "I broke down on Whitemud Drive at 11pm and Guardium was there in 25 minutes. Professional, friendly, and got my car to the shop safely. Will definitely use them again.",
        name: "Jason T.",
        location: "Edmonton, AB",
      }}
    />
  );
}
