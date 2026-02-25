import { Metadata } from "next";
import { Truck } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Heavy Duty Towing & Recovery Edmonton | Guardium Towing",
  description:
    "Professional heavy duty towing and recovery in Edmonton. We handle semi-trucks, buses, RVs, and commercial vehicles up to 50 tons. Available 24/7.",
};

export default function HeavyDutyTowingRecoveryPage() {
  return (
    <ServicePageLayout
      title="Heavy Duty Towing & Recovery"
      subtitle="Heavy Duty Service"
      description="Specialized heavy-duty towing and recovery for semi-trucks, commercial vehicles, buses, RVs, and oversized loads throughout Edmonton and Alberta. Our heavy-duty fleet handles vehicles up to 50 tons."
      icon={Truck}
      features={[
        {
          title: "Semi-Trucks & Tractor-Trailers",
          description:
            "Full-service towing and recovery for 18-wheelers, tractor-trailers, and long-haul freight vehicles.",
        },
        {
          title: "Commercial Vehicles",
          description:
            "Box trucks, cube vans, flatbed trucks, tankers, and other commercial vehicles of all sizes.",
        },
        {
          title: "Buses & Coaches",
          description:
            "Transit buses, school buses, motor coaches, and charter vehicles handled with specialized equipment.",
        },
        {
          title: "RVs & Motorhomes",
          description:
            "Class A, B, and C motorhomes plus fifth-wheel trailers and travel trailers up to maximum weight limits.",
        },
        {
          title: "Accident & Rollover Recovery",
          description:
            "Complex recovery operations including vehicle uprighting, cargo management, and scene cleanup.",
        },
        {
          title: "Fleet Accounts Available",
          description:
            "Priority service and invoicing available for trucking companies and commercial fleet operators.",
        },
      ]}
      benefits={[
        "Capacity for vehicles up to 50 tons",
        "Experienced heavy-duty certified operators",
        "Serving Edmonton and all surrounding highway corridors",
        "Complex recovery and uprighting operations",
        "Insurance and fleet billing available",
        "24/7 availability including holidays",
      ]}
      pricing={{
        starting: "Call for Quote",
        note: "Heavy duty towing is priced based on vehicle type, weight, recovery complexity, and distance. Contact us for an accurate estimate.",
      }}
    />
  );
}
