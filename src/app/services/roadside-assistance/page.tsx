import { Metadata } from "next";
import { Wrench } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Roadside Assistance Edmonton | Guardium Towing",
  description:
    "24/7 roadside assistance in Edmonton and surrounding areas. Vehicle lockouts, minor mechanical help, and emergency roadside support. Fast response times.",
};

export default function RoadsideAssistancePage() {
  return (
    <ServicePageLayout
      title="Roadside Assistance"
      subtitle="Roadside Service"
      description="Stuck on the side of the road? Our roadside assistance team is on call 24/7 across Edmonton and surrounding communities to help with lockouts, minor breakdowns, and other roadside emergencies — often without needing a tow."
      icon={Wrench}
      features={[
        {
          title: "Vehicle Lockouts",
          description:
            "Locked your keys inside? Our technicians can safely unlock most vehicles without damage to your car.",
        },
        {
          title: "Minor Mechanical Help",
          description:
            "On-scene assistance for minor mechanical issues that are preventing you from driving safely.",
        },
        {
          title: "Emergency Winch Out",
          description:
            "Light winching service to free vehicles stuck in snow, ice, or mild off-road situations.",
        },
        {
          title: "Safety & Scene Management",
          description:
            "We help keep you safe at the roadside — setting up warning triangles and coordinating with authorities if needed.",
        },
        {
          title: "All Vehicle Types",
          description:
            "Cars, trucks, SUVs, vans, motorcycles, and commercial vehicles all supported by our roadside team.",
        },
        {
          title: "24/7 Availability",
          description:
            "Our roadside assistance team is available day and night, 365 days a year — including holidays.",
        },
      ]}
      benefits={[
        "Fast response times across Edmonton and area",
        "Often resolves your issue without a tow",
        "Friendly, professional roadside technicians",
        "Serving Sherwood Park, St. Albert, Leduc & surrounding areas",
        "All major insurance providers accepted",
        "Transparent pricing before any service begins",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Roadside assistance pricing varies by service type and location. We provide clear pricing before work begins.",
      }}
    />
  );
}
