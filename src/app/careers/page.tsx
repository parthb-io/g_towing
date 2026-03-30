import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Users,
  Truck,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Guardium Towing team in Edmonton. We're hiring tow truck drivers, dispatchers, and more. Competitive pay, benefits, and growth opportunities.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Above-average compensation with performance bonuses",
  },
  {
    icon: Shield,
    title: "Full Benefits",
    description: "Health, dental, and vision coverage for you and your family",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Various shift options to fit your lifestyle",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Supportive team culture where everyone matters",
  },
];

const positions = [
  {
    title: "Tow Truck Driver - Light Duty",
    type: "Full-Time",
    location: "Edmonton, AB",
    description:
      "Operate light-duty tow trucks for vehicle recovery and transport. Valid Class 5 license required, Class 3 preferred.",
  },
 
];

const requirements = [
  "Valid Alberta driver's license (Class varies by position)",
  "Clean driver's abstract",
  "Ability to pass background check",
  "Strong customer service skills",
  "Physical fitness for demanding work",
  "Willingness to work varied shifts including nights and weekends",
];

export default function CareersPage() {
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
            <span className="text-gray-900">Careers</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Briefcase className="h-4 w-4" />
                Join Our Team
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Build Your Career at Guardium
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We&apos;re always looking for dedicated professionals to join our growing
                team. If you&apos;re passionate about helping people and want a rewarding
                career in the towing industry, we want to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-base" asChild>
                  <a href="#positions">
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-gray-300" asChild>
                  <a href="mailto:dispatch@guardiumtowing.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Operations</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-gray-600">Service Areas</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-gray-600">Fleet Vehicles</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">$$$</div>
                <div className="text-sm text-gray-600">Competitive Pay</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-gray-600 text-lg">
              We invest in our team members because they&apos;re the key to our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our current openings and find the right fit for your skills and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {positions.map((position) => (
              <div key={position.title} className="bg-gray-50 rounded-xl border border-gray-100 p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 flex items-center gap-1">
                        <Clock className="h-3 w-3 text-gray-500" />
                        {position.type}
                      </span>
                      <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-gray-500" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{position.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href={`mailto:careers@guardiumtowing.com?subject=Application: ${position.title}`}>
                    Apply Now
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We&apos;re Looking For
              </h2>
              <p className="text-gray-600">
                General requirements for most positions at Guardium Towing.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
              <div className="space-y-4">
                {requirements.map((requirement) => (
                  <div key={requirement} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
}
