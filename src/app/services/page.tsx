import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Wrench,
  AlertTriangle,
  Route,
  Bike,
  Car,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive towing and roadside assistance services across Canada. Emergency towing, heavy-duty towing, motorcycle towing, accident recovery, and more.",
};

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Towing",
    description:
      "24/7 rapid response emergency towing service. Our average response time is 30 minutes or less in urban areas. We're there when you need us most.",
    href: "/services/emergency-towing",
    price: "From $89",
    features: [
      "24/7 availability",
      "GPS-tracked fleet",
      "All vehicle types",
      "Direct insurance billing",
    ],
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description:
      "Battery jump starts, flat tire changes, fuel delivery, lockout services, and minor repairs. Get back on the road without needing a tow.",
    href: "/services/roadside-assistance",
    price: "From $59",
    features: [
      "Battery jump start",
      "Flat tire change",
      "Fuel delivery",
      "Lockout service",
    ],
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description:
      "Specialized equipment for commercial trucks, buses, RVs, and vehicles up to 50 tons. Fleet services and accident recovery available.",
    href: "/services/heavy-duty-towing",
    price: "From $250",
    features: [
      "Up to 50 tons",
      "Commercial vehicles",
      "RVs & motorhomes",
      "Fleet accounts",
    ],
  },
  {
    icon: Route,
    title: "Long Distance Towing",
    description:
      "Safe vehicle transport anywhere in Canada and to the USA. Enclosed and open carrier options with real-time tracking.",
    href: "/services/long-distance-towing",
    price: "From $1.50/km",
    features: [
      "Nationwide coverage",
      "Enclosed transport",
      "Real-time tracking",
      "Door-to-door service",
    ],
  },
  {
    icon: Bike,
    title: "Motorcycle Towing",
    description:
      "Specialized motorcycle transport with proper equipment and experienced handlers. Soft tie-downs, wheel chocks, and enclosed options.",
    href: "/services/motorcycle-towing",
    price: "From $79",
    features: [
      "Specialized trailers",
      "Soft tie-downs",
      "Enclosed available",
      "All bike types",
    ],
  },
  {
    icon: Car,
    title: "Accident Recovery",
    description:
      "Complete accident recovery services including vehicle retrieval, uprighting, debris cleanup, and direct insurance coordination.",
    href: "/services/accident-recovery",
    price: "Insurance Rates",
    features: [
      "Scene cleanup",
      "Insurance coordination",
      "Photo documentation",
      "Secure storage",
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
            Comprehensive Towing Solutions
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mb-8">
            From emergency roadside assistance to heavy-duty commercial towing,
            Guardium Towing offers a complete range of services to meet all your
            needs, 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book">
                Book a Service
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-md flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <service.icon className="h-7 w-7 text-secondary group-hover:text-white" />
                    </div>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
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
            Our friendly dispatch team is available 24/7 to help you determine
            the best service for your situation. Call us or use our online
            booking form.
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
              <Link href="/book">Book Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
