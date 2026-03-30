"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  ChevronDown,
  Truck,
  Navigation,
} from "lucide-react";
import { useState } from "react";

interface ServiceItem {
  name: string;
  href: string;
  description: string;
}

interface LocationPageLayoutProps {
  city: string;
  description: string;
  landmarks: string[];
  neighboringAreas: string[];
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    name: "Light & Medium Duty Towing",
    href: "/services/light-medium-duty-towing",
    description: "Cars, SUVs, pickups, and vans"
  },
  {
    name: "Heavy Duty Towing",
    href: "/services/heavy-duty-towing",
    description: "Commercial trucks, buses, RVs"
  },
  {
    name: "Flatbed Towing",
    href: "/services/flatbed-towing",
    description: "Luxury and specialty vehicles"
  },
  {
    name: "Accident Towing",
    href: "/services/accident-towing",
    description: "Emergency accident response"
  },
  {
    name: "Roadside Assistance",
    href: "/services/roadside-assistance",
    description: "Jump starts, lockouts, fuel"
  },
  {
    name: "Battery Boost",
    href: "/services/battery-boost-jump-start",
    description: "Dead battery service"
  },
  {
    name: "Tire Service",
    href: "/services/tire-repair-replacement",
    description: "Flat tire change and repair"
  },
  {
    name: "Fuel Delivery",
    href: "/services/fuel-delivery",
    description: "Gas and diesel delivery"
  },
];

const testimonials = [
  {
    name: "David M.",
    text: "Fast service, fair price. Called them at 11 PM and they were there in 20 minutes.",
    rating: 5,
  },
  {
    name: "Lisa K.",
    text: "The driver was professional and took great care of my car. Would definitely use again.",
    rating: 5,
  },
  {
    name: "Robert P.",
    text: "Best towing experience I've had. Clear pricing, friendly service, quick response.",
    rating: 5,
  },
];

export function LocationPageLayout({
  city,
  description,
  landmarks,
  neighboringAreas,
  services = defaultServices,
}: LocationPageLayoutProps) {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices ? services : services.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Emergency Call Strip */}
      <div className="h-30">
        
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-gray-900 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-gray-900">{city}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="h-4 w-4" />
                {city}, Alberta
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Towing Services in {city}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
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

              {/* Quick Facts */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-gray-900">30 min</div>
                  <div className="text-sm text-gray-500">Avg. Response</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">Availability</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-500">Fleet Vehicles</div>
                </div>
              </div>
            </div>

            {/* Emergency Card */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 text-white rounded-2xl p-8 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Need a Tow?</div>
                    <div className="text-gray-400">We&apos;re here 24/7</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Fast dispatch in {city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>All vehicle types</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Upfront pricing</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-14 text-base mb-3" asChild>
                  <a href="tel:+17808097860">
                    Call 780-809-7860
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800 h-14 text-base" asChild>
                  <Link href="/book">Book Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services in {city}
            </h2>
            <p className="text-gray-600 text-lg">
              Full range of towing and roadside assistance available 24/7 throughout {city}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {displayedServices.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Truck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {service.name}
                  </div>
                  <div className="text-sm text-gray-500">{service.description}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>

          {services.length > 4 && (
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="flex items-center gap-2 text-primary font-semibold hover:underline mx-auto"
            >
              {showAllServices ? "Show Less" : `View All ${services.length} Services`}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAllServices ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Areas We Cover in {city}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our drivers know {city} well. We provide fast service to all neighborhoods and surrounding areas.
              </p>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Neighborhoods & Landmarks</h3>
                <div className="flex flex-wrap gap-2">
                  {landmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Nearby Cities</h3>
                <div className="flex flex-wrap gap-2">
                  {neighboringAreas.map((area) => (
                    <Link
                      key={area}
                      href={`/locations/${area.toLowerCase().replace(" ", "-")}`}
                      className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors"
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why {city} Chooses Guardium
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fast Local Response</div>
                    <div className="text-gray-600 text-sm">Average 30-minute arrival in {city}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Licensed & Insured</div>
                    <div className="text-gray-600 text-sm">Full coverage for your peace of mind</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Trusted Service</div>
                    <div className="text-gray-600 text-sm">Trusted by {city} customers</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Local Knowledge</div>
                    <div className="text-gray-600 text-sm">Our drivers know every street in {city}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What {city} Customers Say
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Real reviews from people we&apos;ve helped in and around {city}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-gray-500"> · {city}</span>
                </div>
              </div>
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
              Three simple steps to get the help you need in {city}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                Call 780-809-7860 and tell us where you are in {city}.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Dispatch</h3>
              <p className="text-gray-600">
                We send the nearest available truck with an accurate ETA.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solved</h3>
              <p className="text-gray-600">
                Our professional team handles everything. You&apos;re on your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
    </div>
  );
}
