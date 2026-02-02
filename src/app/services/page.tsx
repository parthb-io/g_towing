import { Metadata } from "next";
import Link from "next/link";
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
  Star,
  Clock,
  Shield,
  ChevronRight,
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
    popular: true,
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
    popular: false,
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
    popular: false,
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
    popular: false,
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
    popular: false,
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
    popular: false,
  },
];

const stats = [
  { value: "30", suffix: "min", label: "Avg Response Time" },
  { value: "50K+", label: "Happy Customers" },
  { value: "4.9", suffix: "/5", label: "Customer Rating" },
  { value: "100+", label: "Cities Served" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Professional towing for every situation
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              From emergency roadside assistance to heavy-duty commercial towing, we offer comprehensive services to get you back on the road safely.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full" asChild>
                <Link href="/book">
                  Book a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-border bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                  {stat.suffix && <span className="text-muted-foreground text-lg">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white border border-border rounded-2xl p-6 hover:shadow-airbnb-lg hover:border-secondary/30 transition-all duration-300"
              >
                {service.popular && (
                  <span className="absolute -top-3 left-6 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <service.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground bg-muted px-3 py-1.5 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-medium text-secondary group-hover:underline">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                Why Guardium
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Trusted by 50,000+ Canadians
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: "Fast Response", desc: "30-min average arrival" },
                { icon: Shield, title: "Fully Insured", desc: "Complete protection" },
                { icon: Star, title: "Top Rated", desc: "4.9/5 customer rating" },
                { icon: CheckCircle, title: "Certified", desc: "Licensed professionals" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-airbnb-sm">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Not sure which service you need?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our friendly dispatch team is available 24/7 to help you find the right solution. Call us or book online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/book">Book Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
