import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Truck,
  CheckCircle,
  Shield,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Guardium Towing serves Edmonton, Sherwood Park, Spruce Grove, Beaumont, Devon, Morinville, and Leduc with 24/7 towing and roadside assistance.",
};

const locations = [
  {
    city: "Edmonton",
    href: "/locations/edmonton",
    description:
      "Our primary service area covering all of Edmonton including downtown, south side, west end, and north Edmonton.",
    areas: ["Downtown", "Whyte Ave", "West Edmonton", "Millwoods", "Riverbend"],
    featured: true,
  },
  {
    city: "Sherwood Park",
    href: "/locations/sherwood-park",
    description:
      "Serving all of Sherwood Park and Strathcona County with fast response times.",
    areas: ["Broadmoor", "Lakeland Ridge", "Summerwood", "Clover Bar"],
  },
  {
    city: "Spruce Grove",
    href: "/locations/spruce-grove",
    description:
      "Full towing coverage for Spruce Grove and the Stony Plain area.",
    areas: ["Spruce Grove", "Stony Plain", "Parkland County"],
  },
  {
    city: "Beaumont",
    href: "/locations/beaumont",
    description:
      "Reliable towing services for Beaumont and surrounding areas.",
    areas: ["Beaumont", "Nisku", "Leduc County"],
  },
  {
    city: "Devon",
    href: "/locations/devon",
    description:
      "Covering Devon and communities along Highway 60.",
    areas: ["Devon", "Calmar", "Thorsby"],
  },
  {
    city: "Morinville",
    href: "/locations/morinville",
    description:
      "Serving Morinville, Legal, and north of Edmonton.",
    areas: ["Morinville", "Legal", "Sturgeon County"],
  },
  {
    city: "Leduc",
    href: "/locations/leduc",
    description:
      "Complete towing services for Leduc and the industrial area.",
    areas: ["Leduc", "Nisku", "Edmonton International Airport"],
  },
];

export default function LocationsPage() {
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
            <span className="text-gray-900">Locations</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="h-4 w-4" />
                Service Areas
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Towing Services Across Edmonton & Area
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Guardium Towing provides 24/7 professional towing and roadside
                assistance throughout the greater Edmonton area. No matter where you
                are, we&apos;re ready to help.
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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-gray-600">Service Areas</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">30</div>
                <div className="text-sm text-gray-600">Min Avg Response</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Dispatch</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-gray-600">Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-gray-600 text-lg">
              Select a location below to see services and coverage details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className={`group bg-white rounded-xl border p-6 hover:border-primary/30 hover:shadow-md transition-all ${
                  location.featured ? "border-primary/20 ring-1 ring-primary/10" : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {location.city}
                    </h3>
                    <p className="text-sm text-gray-500">Alberta</p>
                  </div>
                  {location.featured && (
                    <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      Main Hub
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {location.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {location.areas.slice(0, 4).map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {area}
                    </span>
                  ))}
                  {location.areas.length > 4 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{location.areas.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center text-primary text-sm font-medium">
                  View {location.city} Services
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Available */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Full Services in Every Location
              </h2>
              <p className="text-gray-600 mb-8">
                No matter which service area you&apos;re in, you have access to our complete
                range of towing and roadside assistance services.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Light & Medium Duty Towing",
                  "Heavy Duty Towing",
                  "Flatbed Towing",
                  "Accident Towing",
                  "Roadside Assistance",
                  "Battery Boost",
                  "Tire Service",
                  "Fuel Delivery",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" variant="outline" className="border-gray-300" asChild>
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-xl">Need a Tow?</div>
                  <div className="text-gray-400">We cover all listed areas 24/7</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Fast dispatch to your location</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Professional, licensed operators</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Upfront pricing, no surprises</span>
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

      {/* Final CTA */}
      
    </div>
  );
}
