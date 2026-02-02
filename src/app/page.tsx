"use client";

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
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Wrench,
  Car,
  AlertTriangle,
  Bike,
  Route,
  Award,
  Users,
  ThumbsUp,
  Zap,
  HeartHandshake,
  BadgeCheck,
  ChevronRight,
  Play,
} from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Towing",
    description: "24/7 rapid response emergency towing service. Average 30-minute arrival time.",
    href: "/services/emergency-towing",
    price: "From $89",
    popular: true,
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description: "Jump starts, flat tires, fuel delivery, and lockout services.",
    href: "/services/roadside-assistance",
    price: "From $59",
    popular: false,
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description: "Commercial trucks, buses, RVs, and vehicles up to 50 tons.",
    href: "/services/heavy-duty-towing",
    price: "From $250",
    popular: false,
  },
  {
    icon: Route,
    title: "Long Distance",
    description: "Safe vehicle transport anywhere in Canada and the USA.",
    href: "/services/long-distance-towing",
    price: "From $1.50/km",
    popular: false,
  },
  {
    icon: Bike,
    title: "Motorcycle Towing",
    description: "Specialized trailers and gentle handling for all bike types.",
    href: "/services/motorcycle-towing",
    price: "From $79",
    popular: false,
  },
  {
    icon: Car,
    title: "Accident Recovery",
    description: "Complete scene cleanup and direct insurance coordination.",
    href: "/services/accident-recovery",
    price: "Custom quote",
    popular: false,
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers", icon: Users },
  { value: "30", label: "Min Avg Response", suffix: "min", icon: Clock },
  { value: "100+", label: "Cities Covered", icon: MapPin },
  { value: "4.9", label: "Customer Rating", suffix: "/5", icon: Star },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Toronto, ON",
    rating: 5,
    text: "My car broke down on the 401 at midnight. Guardium arrived in under 25 minutes. The driver was professional, friendly, and got me to safety quickly. Can't recommend them enough!",
    date: "2 weeks ago",
    verified: true,
  },
  {
    name: "Michael Rodriguez",
    location: "Vancouver, BC",
    rating: 5,
    text: "Best towing experience I've ever had. Transparent pricing, no hidden fees, and they handled my vintage car with absolute care. Will definitely use again.",
    date: "1 month ago",
    verified: true,
  },
  {
    name: "Jennifer Liu",
    location: "Calgary, AB",
    rating: 5,
    text: "Had to tow my motorcycle after an accident. They used proper soft straps and a specialized trailer. Professional service from start to finish.",
    date: "3 weeks ago",
    verified: true,
  },
  {
    name: "David Thompson",
    location: "Montreal, QC",
    rating: 5,
    text: "Needed heavy duty towing for my RV. They dispatched the right truck immediately and the driver knew exactly how to handle it. Excellent service!",
    date: "1 week ago",
    verified: true,
  },
];

const features = [
  {
    icon: Zap,
    title: "30-Minute Response",
    description: "Our GPS-tracked fleet ensures the nearest truck reaches you fast.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage for your vehicle while in our care.",
  },
  {
    icon: ThumbsUp,
    title: "Upfront Pricing",
    description: "No surprises. Get a quote before we dispatch.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Drivers",
    description: "All operators are licensed, trained, and background-checked.",
  },
  {
    icon: HeartHandshake,
    title: "Insurance Partners",
    description: "We work directly with all major insurers for seamless claims.",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Canada's trusted name in towing since 2004.",
  },
];

const serviceAreas = [
  "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Halifax",
  "Mississauga", "Brampton", "Hamilton", "Surrey", "Laval", "Quebec City", "London", "Markham"
];

const faqs = [
  {
    question: "How quickly can you respond to an emergency?",
    answer: "Our average response time is 30 minutes or less in urban areas. We have dispatch centers across Canada with GPS-tracked trucks ensuring rapid response 24/7, 365 days a year.",
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we work directly with all major insurance providers in Canada including Intact, Aviva, TD Insurance, and more. We handle the paperwork and billing directly with your insurer for a seamless experience.",
  },
  {
    question: "What types of vehicles can you tow?",
    answer: "We can tow all vehicle types: sedans, SUVs, trucks, motorcycles, RVs, buses, and commercial vehicles. Our heavy-duty trucks handle vehicles up to 50 tons.",
  },
  {
    question: "How much does towing cost?",
    answer: "Pricing depends on factors like distance, vehicle type, and service needed. Emergency towing starts at $89, roadside assistance from $59. We provide transparent upfront quotes with no hidden fees.",
  },
  {
    question: "Are your drivers certified?",
    answer: "Absolutely. All drivers are provincially licensed, undergo extensive training, and are background-checked. We also carry comprehensive insurance for complete peace of mind.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Airbnb Style */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-airbnb-sm mb-8 animate-fade-in">
              <div className="flex -space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-warm flex items-center justify-center text-white text-xs font-medium ring-2 ring-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50,000+</span> happy customers across Canada
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight animate-fade-in-up text-balance">
              Roadside help when you
              <span className="text-gradient"> need it most</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1 text-pretty">
              Professional towing and roadside assistance across Canada. Fast response, transparent pricing, and service you can trust 24/7.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up stagger-2">
              <Button
                size="xl"
                variant="secondary"
                className="rounded-full shadow-lg shadow-secondary/30 w-full sm:w-auto group"
                asChild
              >
                <Link href="/book">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="rounded-full w-full sm:w-auto"
                asChild
              >
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-5 w-5" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up stagger-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span>30-min response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Fully insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-secondary text-secondary" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-64 -top-64 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-3">
                  <stat.icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                  {stat.suffix && <span className="text-lg text-muted-foreground">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Everything you need, one call away
            </h2>
            <p className="text-muted-foreground text-lg">
              From emergency towing to specialized transport, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white border border-border rounded-2xl p-6 hover:shadow-airbnb-lg hover:border-secondary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-6 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground bg-muted px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-secondary group-hover:underline">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/services">
                View all services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Help is just 3 steps away
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Tell us where you are",
                description: "Share your location and describe what happened. Our dispatch team is ready 24/7.",
                icon: MapPin,
              },
              {
                step: "2",
                title: "Get matched instantly",
                description: "We dispatch the nearest available truck from our GPS-tracked fleet.",
                icon: Zap,
              },
              {
                step: "3",
                title: "Relax, help is coming",
                description: "Track your driver in real-time. Average arrival: 30 minutes or less.",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-white shadow-airbnb flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" className="rounded-full shadow-lg shadow-secondary/30" asChild>
              <Link href="/book">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                Why Guardium
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Canada's most trusted towing service
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                For over 20 years, we've been helping Canadians get back on the road. Here's why 50,000+ customers choose us.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* CTA Card */}
              <div className="bg-primary rounded-3xl p-8 text-white shadow-airbnb-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Need help now?</p>
                    <p className="text-xl font-bold">1-800-GUARDIUM</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Get help in minutes, not hours</h3>
                <p className="text-white/80 mb-6">
                  Our dispatch team is standing by 24/7. Tell us where you are and we'll send the nearest truck immediately.
                </p>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full rounded-full"
                    asChild
                  >
                    <Link href="/book">
                      Book Online
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <a href="tel:1-800-GUARDIUM">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    Free quotes
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    30-min response
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-secondary/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Trusted by thousands across Canada
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.9</span>
              <span className="text-muted-foreground">from 50,000+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-airbnb-sm hover:shadow-airbnb-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                      {testimonial.verified && (
                        <BadgeCheck className="h-4 w-4 text-secondary" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.location} · {testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Coverage Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Serving all of Canada
            </h2>
            <p className="text-muted-foreground text-lg">
              With dispatch centers in major cities, we're always nearby when you need us.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <span
                key={area}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-secondary hover:text-white transition-colors cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {area}
              </span>
            ))}
            <span className="px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary">
              + 100 more cities
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Common questions
              </h2>
              <p className="text-muted-foreground">
                Can't find what you're looking for?{" "}
                <Link href="/contact" className="text-secondary hover:underline font-medium">
                  Contact our team
                </Link>
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border-0 shadow-airbnb-sm px-6 data-[state=open]:shadow-airbnb"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to experience Canada's best towing service?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join 50,000+ Canadians who trust Guardium for fast, reliable roadside assistance. Book online or call us now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                variant="secondary"
                className="rounded-full shadow-lg w-full sm:w-auto group"
                asChild
              >
                <Link href="/book">
                  Book a Service
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto"
                asChild
              >
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-5 w-5" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>

            <p className="mt-8 text-white/60 text-sm">
              24/7 service · 30-minute response · No hidden fees
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
