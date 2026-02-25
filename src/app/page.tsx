import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Truck,
  Phone,
  Clock,
  Shield,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Wrench,
  Car,
  AlertTriangle,
  Zap,
  Award,
  Users,
  ThumbsUp,
  Fuel,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Light & Medium Duty Towing",
    description:
      "Fast and reliable towing for cars, SUVs, vans, and light trucks throughout Edmonton and the surrounding area.",
    href: "/services/light-medium-duty-towing",
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing & Recovery",
    description:
      "Specialized heavy-duty equipment for semi-trucks, buses, RVs, and commercial vehicles up to 50 tons.",
    href: "/services/heavy-duty-towing-recovery",
  },
  {
    icon: Car,
    title: "Flatbed Towing",
    description:
      "Flatbed transport for all-wheel drive, low-clearance, luxury, and inoperable vehicles for safe, damage-free towing.",
    href: "/services/flatbed-towing",
  },
  {
    icon: AlertTriangle,
    title: "Accident Towing",
    description:
      "Professional accident scene towing with insurance coordination and secure vehicle storage after collisions.",
    href: "/services/accident-towing",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description:
      "On-the-spot help with lockouts, minor mechanical issues, winching, and more to get you moving again fast.",
    href: "/services/roadside-assistance",
  },
  {
    icon: Zap,
    title: "Battery Boost & Jump Start",
    description:
      "Dead battery? Our team arrives fast to boost your vehicle and get you back on the road in minutes.",
    href: "/services/battery-boost-jump-start",
  },
  {
    icon: Car,
    title: "Tire Repair & Replacement",
    description:
      "Flat tire service including on-site repair or spare tire installation so you don't have to wait for a tow.",
    href: "/services/tire-repair-replacement",
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description:
      "Run out of gas? We'll deliver fuel directly to your location so you can get moving without a tow.",
    href: "/services/fuel-delivery",
  },
  {
    icon: Truck,
    title: "Deck & Transportation Hauling",
    description:
      "Heavy deck and lowboy transport for equipment, machinery, and oversized loads across Alberta.",
    href: "/services/deck-transportation-hauling",
  },
  {
    icon: Wrench,
    title: "Winching / Tow Dolly",
    description:
      "Vehicle recovery from ditches, mud, snow, and off-road situations using professional winch equipment.",
    href: "/services/winching-tow-dolly",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Truck, value: "50+", label: "Tow Trucks" },
  { icon: MapPin, value: "8", label: "Service Areas" },
  { icon: Clock, value: "15+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Jason T.",
    location: "Edmonton, AB",
    rating: 5,
    text: "Guardium Towing was at my location in under 20 minutes after I called. My car broke down on Whitemud and they made the whole experience stress-free. Highly recommend!",
  },
  {
    name: "Michelle R.",
    location: "Sherwood Park, AB",
    rating: 5,
    text: "Best towing service in the Edmonton area. Fair pricing, super fast, and the driver was friendly and professional. Will definitely call them again.",
  },
  {
    name: "David K.",
    location: "St. Albert, AB",
    rating: 5,
    text: "Needed a battery boost late at night in -30 weather. Guardium showed up quickly and got me going in no time. Lifesavers!",
  },
];

const faqs = [
  {
    question: "How quickly can you respond to an emergency in Edmonton?",
    answer:
      "Our average response time is 20–30 minutes across Edmonton and the surrounding areas including Sherwood Park, St. Albert, Leduc, and more. We operate 24/7, 365 days a year.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes, we work directly with all major insurance providers in Alberta. We can handle the paperwork and billing directly with your insurer to make the process seamless for you.",
  },
  {
    question: "What types of vehicles can you tow?",
    answer:
      "We tow all vehicle types including sedans, SUVs, trucks, vans, motorcycles, RVs, buses, and commercial vehicles. Our heavy-duty fleet can handle vehicles up to 50 tons.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Edmonton and the entire surrounding region including Sherwood Park, St. Albert, Spruce Grove, Leduc, Beaumont, Devon, and Morinville.",
  },
  {
    question: "Are your drivers certified and insured?",
    answer:
      "Absolutely. All our drivers are fully licensed, certified, and undergo extensive training. We carry comprehensive insurance coverage for complete peace of mind.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,56,44,0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              <Clock className="h-3 w-3 mr-1" />
              24/7 Emergency Service
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Edmonton&apos;s Most Trusted{" "}
              <span className="text-gradient">Towing Service</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
              Fast, reliable, and professional towing services across Edmonton
              and surrounding areas. From emergency roadside assistance to
              heavy-duty towing, we&apos;ve got you covered 24/7.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-5 w-5" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-white/60">
                <Shield className="h-4 w-4 text-secondary" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm">Licensed &amp; Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Star className="h-4 w-4 text-secondary" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Serving Edmonton &amp; Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Complete Towing &amp; Roadside Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From emergency roadside assistance to specialized heavy-duty towing,
              we offer a full range of services to meet every need across Edmonton and area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:border-secondary/30 transition-all duration-200"
              >
                <CardHeader>
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center mb-3 group-hover:bg-secondary transition-colors">
                    <service.icon className="h-5 w-5 text-secondary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="accent" className="mb-4">
              Service Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Serving Edmonton &amp; Surrounding Communities
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We provide towing and roadside assistance throughout the greater Edmonton area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
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
                className="flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-secondary hover:text-secondary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/locations">View All Locations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Edmonton&apos;s Reliable Towing Partner
              </h2>
              <p className="text-muted-foreground mb-8">
                With over 15 years serving Edmonton and surrounding communities,
                Guardium Towing is the name drivers trust when they need help most.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Rapid Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Average arrival time of 20–30 minutes across Edmonton and area.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Fully Insured &amp; Licensed</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete peace of mind with comprehensive insurance coverage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      Upfront quotes with no hidden fees. Pay only what you&apos;re quoted.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Certified Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      All drivers are trained, certified, and background checked.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-primary rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Help Right Now?</h3>
                <p className="text-white/60 mb-6 text-sm">
                  Our dispatch team is standing by 24/7 to assist you. Call us
                  for immediate assistance or send us a message for a free quote.
                </p>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <a href="tel:1-800-GUARDIUM">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 1-800-GUARDIUM
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers across Edmonton and surrounding
              communities who trust Guardium Towing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-semibold text-sm">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Got questions? We&apos;ve got answers. If you can&apos;t find what
                you&apos;re looking for, contact our team.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Edmonton&apos;s #1 Towing Service — Available 24/7
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Whether it&apos;s an emergency or a scheduled tow, Guardium Towing is
            here for you around the clock. Call now or get a free quote online.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
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
    </>
  );
}
