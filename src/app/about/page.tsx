import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Shield,
  Clock,
  Users,
  Award,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Guardium Towing - Edmonton's trusted 24/7 towing service provider. Licensed, insured, and committed to fast, reliable service across Edmonton and surrounding areas.",
};

const values = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "We're always ready to help. Our dispatch team operates around the clock, ensuring you're never stranded.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your peace of mind. We meet all provincial requirements and safety standards.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Our drivers are trained, certified, and background-checked. We treat every vehicle like our own.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description:
      "We're committed to excellence in every tow. Transparent pricing, fast response, and courteous service.",
  },
];

const serviceAreas = [
  "Edmonton",
  "Sherwood Park",
  "Spruce Grove",
  "Beaumont",
  "Devon",
  "Morinville",
  "Leduc",
];

export default function AboutPage() {
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
            <span className="text-gray-900">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Building2 className="h-4 w-4" />
                About Guardium Towing
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Edmonton&apos;s Trusted Towing Partner
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Guardium Towing provides professional, reliable towing and roadside
                assistance services across Edmonton and surrounding communities. We&apos;re
                here when you need us, 24 hours a day, 7 days a week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-base" asChild>
                  <a href="tel:+17808097860">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-gray-300" asChild>
                  <Link href="/contact">
                    Contact Us
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
                  <span>Trusted Service</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">30</div>
                <div className="text-sm text-gray-600">Min Avg Response</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-gray-600">Fleet Vehicles</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-gray-600">Service Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built on Trust, Driven by Service
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Guardium Towing is part of the Guardium Group of Companies, a
                family of businesses dedicated to providing essential services
                to Albertans. Our towing division was established to fill a need
                for reliable, professional towing services in the Edmonton area.
              </p>
              <p>
                We understand that needing a tow is often stressful. That&apos;s why
                we focus on making the experience as smooth as possible. From our
                friendly dispatchers to our professional drivers, every member of
                our team is committed to getting you back on the road safely.
              </p>
              <p>
                Our fleet includes modern equipment for light, medium, and
                heavy-duty towing, ensuring we can handle any job. Whether you
                need emergency roadside assistance or scheduled vehicle transport,
                we have the capability and expertise to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg">
              Our commitment to these core values guides everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Customers Choose Us
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Fast Response Times</div>
                    <div className="text-sm text-gray-600">Average 30 minutes in urban areas</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Transparent Pricing</div>
                    <div className="text-sm text-gray-600">Upfront quotes with no hidden fees</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Professional Drivers</div>
                    <div className="text-sm text-gray-600">Trained, certified, and courteous team</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Modern Fleet</div>
                    <div className="text-sm text-gray-600">Well-maintained equipment for all vehicle types</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Our Service Areas
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {serviceAreas.map((area) => (
                  <Link
                    key={area}
                    href={`/locations/${area.toLowerCase().replace(" ", "-")}`}
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
              <p className="text-gray-400 text-sm mb-6">
                We provide 24/7 coverage throughout the greater Edmonton metropolitan area.
              </p>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-12" asChild>
                <Link href="/locations">View All Locations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
