import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  Star,
  ArrowRight,
  Wrench,
  Car,
  AlertTriangle,
  Bike,
  Route,
  Zap,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Towing",
    description: "24/7 rapid response when you need us most.",
    href: "/services/emergency-towing",
    color: "bg-secondary",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description: "Jump starts, tire changes, and lockouts.",
    href: "/services/roadside-assistance",
    color: "bg-accent",
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description: "Trucks, buses, and commercial vehicles.",
    href: "/services/heavy-duty-towing",
    color: "bg-tertiary",
  },
  {
    icon: Route,
    title: "Long Distance",
    description: "Safe transport across Canada and USA.",
    href: "/services/long-distance-towing",
    color: "bg-secondary",
  },
  {
    icon: Bike,
    title: "Motorcycle Towing",
    description: "Specialized care for your bike.",
    href: "/services/motorcycle-towing",
    color: "bg-accent",
  },
  {
    icon: Car,
    title: "Accident Recovery",
    description: "Professional scene cleanup and recovery.",
    href: "/services/accident-recovery",
    color: "bg-tertiary",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers", color: "text-secondary" },
  { value: "200+", label: "Tow Trucks", color: "text-accent" },
  { value: "100+", label: "Cities", color: "text-tertiary" },
  { value: "20+", label: "Years", color: "text-secondary" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto",
    text: "Guardium saved my day on the 401. Under 30 minutes response!",
    color: "border-secondary",
  },
  {
    name: "Michael R.",
    location: "Vancouver",
    text: "Fair pricing, fast response. Will definitely use again.",
    color: "border-accent",
  },
  {
    name: "Jennifer L.",
    location: "Calgary",
    text: "Handled my motorcycle with care. Professional service.",
    color: "border-tertiary",
  },
];

const faqs = [
  {
    question: "How quickly can you respond?",
    answer:
      "Average response time is 30 minutes or less in urban areas. We operate 24/7, 365 days.",
  },
  {
    question: "Do you work with insurance?",
    answer:
      "Yes, we work directly with all major Canadian insurers to handle paperwork and billing.",
  },
  {
    question: "What vehicles can you tow?",
    answer:
      "All types: sedans, SUVs, trucks, motorcycles, RVs, buses, and commercial vehicles up to 50 tons.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on distance, vehicle type, and service. We provide upfront quotes with no hidden fees.",
  },
];

const features = [
  { icon: Clock, text: "30-min average response", color: "bg-secondary" },
  { icon: Shield, text: "Fully insured & licensed", color: "bg-accent" },
  { icon: Zap, text: "Transparent pricing", color: "bg-tertiary" },
  { icon: CheckCircle2, text: "Certified professionals", color: "bg-secondary" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Clean & Bold */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Decorative color blocks */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full opacity-5 blur-3xl" />

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-subtle" />
              <span className="text-white/90 text-sm font-medium">24/7 Emergency Service</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Canada&apos;s Most{" "}
              <span className="text-gradient-coral">Trusted</span>{" "}
              Towing
            </h1>

            <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Fast, reliable towing across Canada. From roadside assistance to heavy-duty towing, we&apos;ve got you covered.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 h-14 text-lg" asChild>
                <Link href="/book">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary px-8 h-14 text-lg" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-5 w-5" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom color accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-tertiary" />
      </section>

      {/* Stats Section - Minimal & Colorful */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Clean Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Complete towing and roadside solutions for every situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-8 bg-card border rounded-xl card-hover"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-secondary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Colorful Blocks */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                The Guardium Difference
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Two decades of experience, thousands of satisfied customers, and a commitment to getting you back on the road.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary rounded-2xl p-10 text-white">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-lg" />

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4">Need Help Now?</h3>
                  <p className="text-white/70 mb-8">
                    Our team is standing by 24/7. Call us for immediate assistance.
                  </p>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 h-14" asChild>
                      <a href="tel:1-800-GUARDIUM">
                        <Phone className="mr-2 h-5 w-5" />
                        Call 1-800-GUARDIUM
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-primary h-14" asChild>
                      <Link href="/book">Book Online</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-tertiary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">What Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 bg-card rounded-xl border-l-4 ${testimonial.color}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-tertiary text-tertiary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Minimal Accordion */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3">Questions?</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-secondary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA - Bold Color Block */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-tertiary" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go?
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-10 text-lg">
            Book online or call us now. We&apos;re here 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 px-10 h-14 text-lg" asChild>
              <Link href="/book">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary px-10 h-14 text-lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
