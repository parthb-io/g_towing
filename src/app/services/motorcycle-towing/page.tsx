import { Metadata } from "next";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Bike } from "lucide-react";

export const metadata: Metadata = {
  title: "Motorcycle Towing Services",
  description:
    "Specialized motorcycle towing with proper equipment and experienced handlers. Safe transport for all types of motorcycles, scooters, and ATVs across Canada.",
};

const features = [
  {
    title: "Specialized Motorcycle Trailers",
    description:
      "Our dedicated motorcycle trailers feature wheel chocks, soft tie-downs, and padding to secure your bike without scratches or damage.",
  },
  {
    title: "All Motorcycle Types",
    description:
      "Sport bikes, cruisers, touring bikes, dirt bikes, scooters, and ATVs. We have the right equipment for every type of two-wheeler.",
  },
  {
    title: "Experienced Handlers",
    description:
      "Our operators are motorcycle enthusiasts who understand the value of your bike. They handle every motorcycle with care and respect.",
  },
  {
    title: "Accident Recovery",
    description:
      "Motorcycle accident? We provide careful recovery and transport of damaged bikes, coordinating with insurance for documentation.",
  },
  {
    title: "Event Transport",
    description:
      "Transporting your bike to a rally, track day, or show? We offer scheduled transport services for motorcycle events.",
  },
  {
    title: "Storage Solutions",
    description:
      "Need temporary storage? We offer secure, climate-controlled storage facilities for motorcycles awaiting repair or pickup.",
  },
];

const benefits = [
  "Soft tie-downs to prevent scratches",
  "Enclosed transport available for high-value bikes",
  "Operators trained in motorcycle handling",
  "Insurance coverage for transport",
  "Same-day service available",
  "Transport for bikes of all sizes",
];

export default function MotorcycleTowingPage() {
  return (
    <ServicePageLayout
      title="Motorcycle Towing"
      subtitle="Gentle Care for Your Ride"
      description="Your motorcycle deserves special treatment. Our motorcycle towing service uses specialized equipment and trained operators who understand the unique requirements of transporting two-wheelers safely."
      icon={Bike}
      features={features}
      benefits={benefits}
      pricing={{
        starting: "Starting at $79",
        note: "Includes specialized equipment and careful handling. Long-distance rates available.",
      }}
    />
  );
}
