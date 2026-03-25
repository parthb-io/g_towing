import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Wrench,
  AlertTriangle,
  Car,
  ArrowRight,
  Phone,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Battery,
  Fuel,
  CircleDot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional towing and roadside assistance services in Edmonton, Sherwood Park, Spruce Grove, and surrounding areas. 24/7 light, medium, and heavy-duty towing.",
};

const services = [
  {
    icon: Car,
    title: "Light & Medium Duty Towing",
    description:
      "24/7 towing for cars, SUVs, pickups, and vans. Fast response times across Edmonton and surrounding areas.",
    href: "/services/light-medium-duty-towing",
    features: ["Cars & SUVs", "Pickups & vans", "24/7 dispatch", "30 min response"],
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description:
      "Specialized equipment for commercial trucks, buses, RVs, and vehicles up to 50 tons.",
    href: "/services/heavy-duty-towing",
    features: ["Up to 50 tons", "Semi-trucks", "RVs & buses", "Fleet accounts"],
  },
  {
    icon: Truck,
    title: "Flatbed Towing",
    description:
      "Safe flatbed transport for luxury vehicles, lowered cars, AWD vehicles, and motorcycles.",
    href: "/services/flatbed-towing",
    features: ["Luxury vehicles", "AWD/4WD safe", "Lowered cars", "Motorcycles"],
  },
  {
    icon: AlertTriangle,
    title: "Accident Towing",
    description:
      "Complete accident recovery services including vehicle retrieval, scene cleanup, and insurance coordination.",
    href: "/services/accident-towing",
    features: ["Scene cleanup", "Insurance billing", "Documentation", "Secure storage"],
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description:
      "Battery jump starts, flat tire changes, fuel delivery, and lockout services.",
    href: "/services/roadside-assistance",
    features: ["Jump starts", "Tire changes", "Lockouts", "Minor repairs"],
  },
  {
    icon: Battery,
    title: "Battery Boost",
    description:
      "Dead battery? We'll get you started fast with professional battery boost service.",
    href: "/services/battery-boost-jump-start",
    features: ["Quick response", "Battery testing", "Replacement available", "All vehicles"],
  },
  {
    icon: CircleDot,
    title: "Tire Service",
    description:
      "Flat tire change, spare installation, and roadside tire repair when possible.",
    href: "/services/tire-repair-replacement",
    features: ["Flat tire change", "Spare install", "On-site repair", "No spare? We tow"],
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description:
      "Ran out of gas? We'll bring fuel directly to your location so you can get moving.",
    href: "/services/fuel-delivery",
    features: ["Gas & diesel", "Fast delivery", "Any location", "24/7 available"],
  },
  {
    icon: Truck,
    title: "Deck & Hauling",
    description:
      "Equipment transport, vehicle hauling, and commercial delivery services.",
    href: "/services/deck-transportation-hauling",
    features: ["Equipment transport", "Multi-vehicle", "Commercial", "Alberta-wide"],
  },
  {
    icon: Truck,
    title: "Winching & Recovery",
    description:
      "Vehicle recovery from ditches, snow, mud, and off-road situations.",
    href: "/services/winching-tow-dolly",
    features: ["Ditch recovery", "Snow & ice", "Mud extraction", "Heavy winching"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Services</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Truck className="h-4 w-4" />
                Our Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive Towing Solutions
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From emergency roadside assistance to heavy-duty commercial towing,
                Guardium Towing offers a complete range of services to meet all your
                needs, 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-base" asChild>
                  <a href="tel:+17808097860">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-gray-300" asChild>
                  <Link href="/book">
                    Book Online
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>24/7 Service</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>4.9 Rating</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">Not Sure What You Need?</h3>
              <p className="text-gray-400 mb-6">
                Call our dispatch team and we&apos;ll help you figure out the best service for your situation.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Upfront pricing</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>30 min average response</span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-14 text-base" asChild>
                <a href="tel:+17808097860">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 780-809-7860
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Services
            </h2>
            <p className="text-gray-600 text-lg">
              Select a service below to learn more about pricing and details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-primary text-sm font-medium">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Getting help is simple. Three steps and we&apos;re on our way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                Call our 24/7 dispatch line. Tell us your location and what you need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Dispatch</h3>
              <p className="text-gray-600">
                We send the nearest available truck. You get an ETA immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Arrive</h3>
              <p className="text-gray-600">
                Our professional operator handles everything. You&apos;re back on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
    </div>
  );
}
