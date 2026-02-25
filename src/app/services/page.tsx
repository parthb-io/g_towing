import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Wrench,
  AlertTriangle,
  Car,
  Zap,
  Fuel,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Towing Services Edmonton | Guardium Towing",
  description:
    "Complete towing and roadside assistance services in Edmonton and surrounding areas. Light & medium duty towing, heavy duty recovery, flatbed towing, roadside assistance, battery boost, tire repair, fuel delivery, and more.",
};

const services = [
  {
    icon: Truck,
    title: "Light & Medium Duty Towing",
    description:
      "Fast, reliable towing for cars, SUVs, pickup trucks, and vans throughout Edmonton and the greater area. Available 24/7.",
    href: "/services/light-medium-duty-towing",
    features: [
      "Cars, SUVs & pickup trucks",
      "24/7 availability",
      "GPS-tracked fleet",
      "Direct insurance billing",
    ],
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing & Recovery",
    description:
      "Specialized heavy-duty equipment for semi-trucks, commercial vehicles, buses, RVs, and oversized loads up to 50 tons.",
    href: "/services/heavy-duty-towing-recovery",
    features: [
      "Up to 50 tons capacity",
      "Semi-trucks & buses",
      "Commercial fleets",
      "Accident recovery",
    ],
  },
  {
    icon: Car,
    title: "Deck & Transportation Hauling",
    description:
      "Heavy deck and lowboy transport for equipment, machinery, agricultural implements, and oversized loads across Alberta.",
    href: "/services/deck-transportation-hauling",
    features: [
      "Lowboy & step-deck trailers",
      "Heavy machinery",
      "Agricultural equipment",
      "Provincial permits handled",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Accident Towing",
    description:
      "Professional accident scene towing with insurance coordination, vehicle documentation, and secure storage options.",
    href: "/services/accident-towing",
    features: [
      "Insurance coordination",
      "Photo documentation",
      "Secure storage",
      "24/7 availability",
    ],
  },
  {
    icon: Car,
    title: "Flatbed Towing",
    description:
      "Flatbed transport for all-wheel drive, low-clearance, luxury vehicles, and inoperable vehicles that cannot be wheeled.",
    href: "/services/flatbed-towing",
    features: [
      "AWD & 4x4 vehicles",
      "Luxury & exotic cars",
      "Low-clearance vehicles",
      "Inoperable vehicles",
    ],
  },
  {
    icon: Wrench,
    title: "Winching / Tow Dolly",
    description:
      "Vehicle recovery from ditches, mud, snow banks, and off-road situations using professional winch and tow dolly equipment.",
    href: "/services/winching-tow-dolly",
    features: [
      "Ditch & mud recovery",
      "Snow bank extraction",
      "Off-road recovery",
      "Tow dolly transport",
    ],
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description:
      "On-the-spot help for lockouts, minor mechanical breakdowns, and other roadside emergencies to get you back moving.",
    href: "/services/roadside-assistance",
    features: [
      "Vehicle lockouts",
      "Minor repairs",
      "Emergency response",
      "All vehicle types",
    ],
  },
  {
    icon: Zap,
    title: "Battery Boost & Jump Start",
    description:
      "Dead battery? We arrive fast to jump start your vehicle and get you back on the road — no tow required.",
    href: "/services/battery-boost-jump-start",
    features: [
      "Fast response times",
      "All vehicle types",
      "Battery diagnostics",
      "Available 24/7",
    ],
  },
  {
    icon: Car,
    title: "Tire Repair & Replacement",
    description:
      "Flat tire service on-site including repair, spare tire installation, or assistance arranging a replacement.",
    href: "/services/tire-repair-replacement",
    features: [
      "Spare tire installation",
      "On-site tire repair",
      "All vehicle types",
      "Available 24/7",
    ],
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description:
      "Run out of gas? We deliver fuel directly to your location so you can get moving again without a tow.",
    href: "/services/fuel-delivery",
    features: [
      "Gasoline & diesel",
      "Fast delivery",
      "Edmonton & area",
      "Available 24/7",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Badge variant="accent" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Towing &amp; Roadside Services in Edmonton
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mb-8">
            From emergency towing to roadside assistance, Guardium Towing offers
            a complete range of services across Edmonton and surrounding communities — 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:1-800-GUARDIUM">
                <Phone className="mr-2 h-5 w-5" />
                1-800-GUARDIUM
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 bg-secondary/10 rounded-md flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <service.icon className="h-6 w-6 text-secondary group-hover:text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Our friendly dispatch team is available 24/7 to help you figure out
            the right service for your situation. Call us or get a free quote online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="secondary" asChild>
              <a href="tel:1-800-GUARDIUM">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
