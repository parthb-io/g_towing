import { Metadata } from "next";
import { Wrench } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Winching & Tow Dolly Service Edmonton | Guardium Towing",
  description:
    "Professional winching and tow dolly services in Edmonton. Vehicle recovery from ditches, mud, snow, and off-road situations. Available 24/7.",
};

export default function WinchingTowDollyPage() {
  return (
    <ServicePageLayout
      title="Winching / Tow Dolly"
      subtitle="Recovery Service"
      description="Stuck in a ditch, buried in snow, or off-road? Our professional winching and tow dolly services recover your vehicle safely without causing further damage. We operate throughout Edmonton and all surrounding communities."
      icon={Wrench}
      features={[
        {
          title: "Ditch Recovery",
          description:
            "Safe extraction from roadside ditches using professional rigging and winch equipment to minimize vehicle damage.",
        },
        {
          title: "Snow & Ice Recovery",
          description:
            "Getting stuck in Alberta winters is common. We extract vehicles from snowbanks and icy surfaces quickly.",
        },
        {
          title: "Mud & Soft Ground Recovery",
          description:
            "Off-road recovery for vehicles stuck in mud, loose gravel, sand, or other soft ground conditions.",
        },
        {
          title: "Tow Dolly Transport",
          description:
            "Tow dolly service for front-wheel-drive vehicles, providing an economical towing option for shorter distances.",
        },
        {
          title: "Professional Rigging",
          description:
            "Certified operators use proper anchor points and rigging to protect both your vehicle and our equipment.",
        },
        {
          title: "Off-Road Assist",
          description:
            "Recovery assistance for recreational vehicles, ATVs, and trucks in off-road and backcountry situations.",
        },
      ]}
      benefits={[
        "Experienced winch and recovery operators",
        "Proper rigging to avoid further vehicle damage",
        "Available in all weather conditions",
        "Serving Edmonton and surrounding rural areas",
        "Fast response times — especially important in cold weather",
        "Fully insured recovery operations",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Winching and recovery pricing depends on terrain difficulty, access, and time required. We quote upfront before any work begins.",
      }}
    />
  );
}
