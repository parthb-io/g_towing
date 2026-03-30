"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Truck,
  Car,
  AlertTriangle,
  Wrench,
  Battery,
  CircleDot,
  Fuel,
  ChevronDown,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";

// Icon mapping for server component compatibility
const iconMap = {
  Truck,
  Car,
  AlertTriangle,
  Wrench,
  Battery,
  CircleDot,
  Fuel,
  Phone,
  Clock,
  Shield,
  CheckCircle,
  Star,
  MapPin,
} as const;

type IconName = keyof typeof iconMap;

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  iconName: IconName;
  features: ServiceFeature[];
  benefits: string[];
}

const faqs = [
  {
    question: "How quickly can you arrive?",
    answer: "Our average response time is 30 minutes or less in the Edmonton area. For emergencies, we prioritize rapid dispatch and will give you an accurate ETA when you call.",
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we work directly with all major insurance providers. We can provide documentation to support your claim, making it easier for you during a stressful time.",
  },
  {
    question: "What areas do you service?",
    answer: "We provide coverage throughout Edmonton, Sherwood Park, Spruce Grove, Beaumont, Devon, Morinville, Leduc, and surrounding areas across Alberta.",
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes, our dispatch center operates 24 hours a day, 7 days a week, 365 days a year. We're here whenever you need us, including holidays and severe weather.",
  },
];

const testimonials = [
  {
    name: "Michael R.",
    location: "Edmonton",
    text: "Called at 2 AM when my car broke down on the Henday. They were there in 25 minutes. Professional and quick service.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Sherwood Park",
    text: "Great experience from start to finish. Fair pricing, no surprises, and the driver was careful with my vehicle.",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Spruce Grove",
    text: "Used Guardium after an accident. They handled everything with my insurance and made a bad day much easier.",
    rating: 5,
  },
];

const relatedServices = [
  {
    icon: Car,
    title: "Light & Medium Duty Towing",
    description: "24/7 towing for cars, SUVs, pickups, and vans.",
    features: ["Cars & SUVs", "Pickups & vans", "30 min response"],
    href: "/services/light-medium-duty-towing",
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description: "Specialized equipment for trucks, buses, and RVs up to 50 tons.",
    features: ["Semi-trucks", "RVs & buses", "Fleet accounts"],
    href: "/services/heavy-duty-towing",
  },
  {
    icon: Truck,
    title: "Flatbed Towing",
    description: "Safe flatbed transport for luxury and AWD vehicles.",
    features: ["Luxury vehicles", "AWD/4WD safe", "Motorcycles"],
    href: "/services/flatbed-towing",
  },
  {
    icon: AlertTriangle,
    title: "Accident Towing",
    description: "Complete accident recovery with insurance coordination.",
    features: ["Scene cleanup", "Documentation", "Secure storage"],
    href: "/services/accident-towing",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description: "Jump starts, tire changes, fuel delivery, and lockouts.",
    features: ["Jump starts", "Tire changes", "Lockouts"],
    href: "/services/roadside-assistance",
  },
  {
    icon: Battery,
    title: "Battery Boost",
    description: "Fast battery boost service to get you started.",
    features: ["Quick response", "Battery testing", "All vehicles"],
    href: "/services/battery-boost-jump-start",
  },
];

export function ServicePageLayout({
  title,
  subtitle,
  description,
  iconName,
  features,
  benefits,
}: ServicePageLayoutProps) {
  const Icon = iconMap[iconName] || Truck;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <Link href="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900">{title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Icon className="h-4 w-4" />
                {subtitle}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
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
                    Get a Quote
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

            {/* Quick Contact Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                Get a Quote
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Call for Pricing
              </h3>
              <p className="text-gray-600 mb-6">
                Every situation is unique. Call us for an accurate quote based on your specific needs.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>No hidden fees - upfront pricing</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>Insurance documentation provided</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>Cash, credit, and debit accepted</span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800 h-14 text-base" asChild>
                <a href="tel:+17808097860">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Your Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Getting help is simple. Three steps and we&apos;re on our way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">
                Call our 24/7 dispatch line. Tell us your location and what you need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">We Dispatch</h3>
              <p className="text-gray-400">
                We send the nearest available truck. You get an ETA immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">We Arrive</h3>
              <p className="text-gray-400">
                Our professional operator handles everything. You&apos;re back on track.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-10 text-base" asChild>
              <a href="tel:+17808097860">
                <Phone className="mr-2 h-5 w-5" />
                Call 780-809-7860
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What&apos;s Included
            </h2>
            <p className="text-gray-600 text-lg">
              Professional service backed by experience and the right equipment for every situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Guardium
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We&apos;re not the only towing company in Edmonton, but we work hard to be the best choice.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">30</div>
                <div className="text-sm text-gray-600">Minute Avg Response</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Dispatch Available</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-gray-600">Fleet Vehicles</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                <div className="text-sm text-gray-600">Vehicles Helped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Real feedback from people we&apos;ve helped across Edmonton and area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-gray-500"> · {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about our services. Can&apos;t find your answer? Call us.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Areas</h2>
              <p className="text-gray-600">
                We provide {title.toLowerCase()} services throughout the Edmonton metro area.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Edmonton", "Sherwood Park", "Spruce Grove", "Beaumont", "Devon", "Leduc"].map((area) => (
                <Link
                  key={area}
                  href={`/locations/${area.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our full range of towing and roadside assistance services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:underline">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-gray-300" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
    </div>
  );
}
