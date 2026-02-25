import { Metadata } from "next";
import { Car } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Flatbed Towing Edmonton | Guardium Towing",
  description:
    "Professional flatbed towing in Edmonton for AWD, 4x4, luxury, low-clearance, and inoperable vehicles. Safe, damage-free transport available 24/7.",
};

export default function FlatbedTowingPage() {
  return (
    <ServicePageLayout
      title="Flatbed Towing"
      subtitle="Flatbed Service"
      description="Our flatbed tow trucks provide the safest transport option for AWD/4x4 vehicles, luxury cars, low-clearance vehicles, and any vehicle that cannot be conventionally towed. All four wheels stay on the deck — no wear, no risk."
      icon={Car}
      features={[
        {
          title: "AWD & 4x4 Vehicles",
          description:
            "All-wheel drive and four-wheel drive vehicles must be flatbed towed to prevent drivetrain damage. We've got you covered.",
        },
        {
          title: "Luxury & Exotic Cars",
          description:
            "Protect your investment. Luxury, sports, and exotic vehicles are transported on our flatbeds with full protection.",
        },
        {
          title: "Low-Clearance Vehicles",
          description:
            "Sports cars and modified vehicles with low ground clearance are loaded and unloaded using specialized ramps.",
        },
        {
          title: "Inoperable Vehicles",
          description:
            "Vehicles that won't start, have seized brakes, or are too damaged to roll are safely winched onto the flatbed.",
        },
        {
          title: "Motorcycle & ATV Transport",
          description:
            "Flatbed transport for motorcycles, ATVs, and other recreational vehicles with proper securing equipment.",
        },
        {
          title: "Long Distance Transport",
          description:
            "Flatbed transport for moves, purchases, or long-distance vehicle relocation across Alberta.",
        },
      ]}
      benefits={[
        "Zero wheel contact with the ground during transport",
        "No drivetrain or transmission wear",
        "Ideal for valuable and exotic vehicles",
        "Trained operators who treat your vehicle with care",
        "Available 24/7 across Edmonton and area",
        "Fully insured transport",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Flatbed towing rates depend on vehicle type and distance. We provide transparent, upfront quotes with no surprises.",
      }}
    />
  );
}
