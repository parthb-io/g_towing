import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Phone,
  Shield,
  Clock,
  Award,
  Users,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  ThumbsUp,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Guardium Towing",
  description:
    "Learn about Guardium Towing — Edmonton's trusted towing company with over 15 years of experience serving Edmonton, Sherwood Park, St. Albert, Leduc, and surrounding communities.",
};

const values = [
  {
    icon: Clock,
    title: "Always Available",
    description:
      "We operate 24 hours a day, 7 days a week, 365 days a year. Breakdowns don't keep office hours — and neither do we.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every tow is handled with the utmost care for your vehicle and the safety of our operators and other road users.",
  },
  {
    icon: ThumbsUp,
    title: "Honest Pricing",
    description:
      "We believe in transparent, upfront quotes with no hidden fees. You'll always know what you're paying before we start.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "All our drivers are fully licensed, certified, and background checked. We invest in training so you get expert service every time.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description:
      "We're a local Edmonton company proud to serve our neighbours across the greater Edmonton region.",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description:
      "With thousands of successful tows and a 4.9-star rating, our reputation is built on consistently excellent service.",
  },
];

const team = [
  {
    name: "Mike G.",
    role: "Founder & Owner",
    description:
      "Started Guardium Towing with a single truck and a commitment to honest, reliable service. Over 15 years later, that commitment hasn't changed.",
  },
  {
    name: "Sandra L.",
    role: "Operations Manager",
    description:
      "Coordinates our dispatch team to ensure every call is answered and every driver is where they need to be.",
  },
  {
    name: "Terry M.",
    role: "Lead Heavy Duty Operator",
    description:
      "Over 12 years of experience handling complex heavy-duty recoveries and commercial vehicle towing.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Edmonton&apos;s Trusted Towing Company
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Guardium Towing has been proudly serving Edmonton and the surrounding
              communities for over 15 years. We&apos;re a local, family-owned business
              built on a foundation of reliability, honesty, and genuine care for
              every customer we serve.
            </p>
            <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="text-2xl md:text-3xl font-bold">10,000+</div>
              <div className="text-xs text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <Truck className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-xs text-muted-foreground">Tow Trucks</div>
            </div>
            <div>
              <MapPin className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="text-2xl md:text-3xl font-bold">8</div>
              <div className="text-xs text-muted-foreground">Service Areas</div>
            </div>
            <div>
              <Clock className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="text-2xl md:text-3xl font-bold">15+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                From One Truck to Edmonton&apos;s Go-To Towing Service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Guardium Towing was founded in Edmonton over 15 years ago with one
                  truck, one driver, and a simple mission: to provide the kind of towing
                  service that treats every customer the way we&apos;d want to be treated
                  ourselves — fast, honest, and professional.
                </p>
                <p>
                  Over the years, we grew alongside Edmonton and its surrounding communities.
                  Today, our fleet covers all of Edmonton plus Sherwood Park, St. Albert,
                  Spruce Grove, Leduc, Beaumont, Devon, and Morinville — ready to respond
                  any time of the day or night.
                </p>
                <p>
                  We&apos;re proud to be a local company that genuinely cares about the
                  people we serve. Whether you need a quick jump start or a complex
                  heavy-duty recovery, you can count on Guardium Towing to show up
                  and get the job done right.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-8 space-y-5">
              <h3 className="text-xl font-bold">What Sets Us Apart</h3>
              {[
                "Local Edmonton company — not a national call centre",
                "Drivers who treat your vehicle like their own",
                "Transparent pricing before any work begins",
                "Available 24/7 including holidays",
                "Fully licensed, insured, and certified",
                "Insurance billing handled directly",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every dispatch, every tow, and every interaction
              with our customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <Card key={value.title} className="group hover:border-secondary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <value.icon className="h-5 w-5 text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              The People Behind Guardium
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced, dedicated, and passionate about helping drivers in their time of need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-xl mb-4">
                    {member.name[0]}
                  </div>
                  <h3 className="font-semibold text-sm">{member.name}</h3>
                  <p className="text-xs text-secondary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="accent" className="mb-4">Service Areas</Badge>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Proudly Serving These Communities
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { name: "Edmonton", href: "/locations/edmonton" },
              { name: "Sherwood Park", href: "/locations/sherwood-park" },
              { name: "St. Albert", href: "/locations/st-albert" },
              { name: "Spruce Grove", href: "/locations/spruce-grove" },
              { name: "Leduc", href: "/locations/leduc" },
              { name: "Beaumont", href: "/locations/beaumont" },
              { name: "Devon", href: "/locations/devon" },
              { name: "Morinville", href: "/locations/morinville" },
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-secondary hover:text-secondary transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                {area.name}
              </Link>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link href="/locations">View All Locations</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Need a Tow in Edmonton or Area?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            We&apos;re ready when you need us. Call for immediate assistance or
            contact us online for a free, no-obligation quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="xl" variant="secondary" asChild>
              <a href="tel:1-800-GUARDIUM">
                <Phone className="mr-2 h-5 w-5" />
                Call 1-800-GUARDIUM
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
