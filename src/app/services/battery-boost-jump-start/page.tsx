import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Battery Boost & Jump Start",
  description:
    "24/7 battery boost and jump start services in Edmonton. Dead battery? We'll get you started fast. Call +1 780-809-7860.",
};

const features = [
  {
    title: "Battery Boost Service",
    description:
      "Quick battery boost to get your vehicle started when your battery is drained. Works for most vehicles.",
  },
  {
    title: "Jump Start Service",
    description:
      "Professional jump starting using proper equipment and techniques to safely start your vehicle.",
  },
  {
    title: "Battery Testing",
    description:
      "We can test your battery to determine if it needs replacement or if the issue is elsewhere in the electrical system.",
  },
  {
    title: "Battery Replacement",
    description:
      "If your battery is dead, we can often source and install a new battery on-site so you don't need a tow.",
  },
  {
    title: "Alternator Diagnosis",
    description:
      "If your battery keeps dying, we can check if your alternator is charging properly to identify the root cause.",
  },
  {
    title: "Cold Weather Starts",
    description:
      "Alberta winters are hard on batteries. We're equipped for cold-weather battery service when you need it most.",
  },
];

const benefits = [
  "Fast response - usually under 30 minutes",
  "Available 24/7, even in extreme cold",
  "Professional equipment",
  "On-site battery replacement available",
  "Diagnostic capabilities",
  "Affordable flat-rate pricing",
];

export default function BatteryBoostJumpStartPage() {
  return (
    <ServicePageLayout
      title="Battery Boost & Jump Start"
      subtitle="Get Started Fast"
      description="Dead battery? Don't let it ruin your day. Our battery boost and jump start service gets you back on the road quickly. We respond fast, use professional equipment, and can even replace your battery on-site if needed."
      iconName="Battery"
      features={features}
      benefits={benefits}
    />
  );
}
