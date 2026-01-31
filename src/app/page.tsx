"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Timer,
  BadgeCheck,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  TrendingUp,
  Globe,
  Building2,
} from "lucide-react";
import {
  useScrollAnimation,
  useCountUp,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Towing",
    description:
      "24/7 rapid response emergency towing. We're there when you need us most, day or night.",
    href: "/services/emergency-towing",
    price: "From $89",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description:
      "Battery jump starts, flat tire changes, fuel delivery, and lockout services.",
    href: "/services/roadside-assistance",
    price: "From $59",
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description:
      "Specialized equipment for trucks, buses, RVs, and commercial vehicles up to 50 tons.",
    href: "/services/heavy-duty-towing",
    price: "From $250",
  },
  {
    icon: Route,
    title: "Long Distance Towing",
    description:
      "Safe and secure long-distance vehicle transport anywhere in Canada and the USA.",
    href: "/services/long-distance-towing",
    price: "From $1.50/km",
  },
  {
    icon: Bike,
    title: "Motorcycle Towing",
    description:
      "Gentle handling with specialized motorcycle trailers and experienced operators.",
    href: "/services/motorcycle-towing",
    price: "From $79",
  },
  {
    icon: Car,
    title: "Accident Recovery",
    description:
      "Professional accident scene cleanup and vehicle recovery with insurance coordination.",
    href: "/services/accident-recovery",
    price: "Insurance Rates",
  },
];

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Happy Customers" },
  { icon: Truck, value: 200, suffix: "+", label: "Tow Trucks" },
  { icon: MapPin, value: 100, suffix: "+", label: "Cities Covered" },
  { icon: Clock, value: 20, suffix: "+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Toronto, ON",
    rating: 5,
    text: "Guardium Towing saved my day when my car broke down on the 401 during rush hour. They arrived in under 25 minutes and were incredibly professional. The driver even helped me arrange a rental car!",
    avatar: "SM",
    service: "Emergency Towing",
  },
  {
    name: "Michael Rodriguez",
    location: "Vancouver, BC",
    rating: 5,
    text: "Best towing service I've ever used. Fair pricing, fast response, and the driver was super friendly. They handled my luxury car with extreme care. Will definitely use them again.",
    avatar: "MR",
    service: "Long Distance Towing",
  },
  {
    name: "Jennifer Lee",
    location: "Calgary, AB",
    rating: 5,
    text: "Had to tow my motorcycle after an accident. They used proper equipment and handled it with care. The insurance paperwork was seamless. Professional service from start to finish.",
    avatar: "JL",
    service: "Motorcycle Towing",
  },
  {
    name: "David Thompson",
    location: "Montreal, QC",
    rating: 5,
    text: "Called at 3 AM when my truck broke down on a highway. The dispatcher was calm and helpful, and the tow truck arrived in 20 minutes. Exceptional 24/7 service!",
    avatar: "DT",
    service: "Heavy Duty Towing",
  },
  {
    name: "Amanda Chen",
    location: "Ottawa, ON",
    rating: 5,
    text: "Locked my keys in the car during a snowstorm. Guardium sent someone within 15 minutes. The technician was quick and didn't damage my door at all. Lifesavers!",
    avatar: "AC",
    service: "Roadside Assistance",
  },
];

const faqs = [
  {
    question: "How quickly can you respond to an emergency?",
    answer:
      "Our average response time is 30 minutes or less in urban areas. We have dispatch centers across Canada ensuring rapid response 24/7, 365 days a year. For highway emergencies, we often arrive even faster.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes, we work directly with all major insurance providers in Canada including Intact, Aviva, TD Insurance, and more. We can handle the paperwork and billing directly with your insurer to make the process seamless for you.",
  },
  {
    question: "What types of vehicles can you tow?",
    answer:
      "We can tow all types of vehicles including sedans, SUVs, trucks, motorcycles, RVs, buses, and commercial vehicles. Our heavy-duty trucks can handle vehicles up to 50 tons.",
  },
  {
    question: "How much does towing cost?",
    answer:
      "Pricing depends on factors like distance, vehicle type, and time of service. Emergency towing starts at $89, roadside assistance from $59. We provide transparent upfront quotes with no hidden fees. Call us for a free estimate.",
  },
  {
    question: "Are your drivers certified and insured?",
    answer:
      "Absolutely. All our drivers are fully licensed, certified through the Canadian Towing Association, and undergo extensive training. We carry $5 million in comprehensive insurance coverage for complete peace of mind.",
  },
  {
    question: "Do you offer services outside business hours?",
    answer:
      "Yes! We operate 24 hours a day, 7 days a week, 365 days a year - including holidays. There's no extra charge for after-hours service, and our emergency line is always staffed.",
  },
];

const recentActivity = [
  { location: "Toronto, ON", service: "Emergency Towing", time: "2 min ago" },
  { location: "Vancouver, BC", service: "Roadside Assistance", time: "5 min ago" },
  { location: "Calgary, AB", service: "Long Distance Towing", time: "8 min ago" },
  { location: "Montreal, QC", service: "Heavy Duty Towing", time: "12 min ago" },
  { location: "Ottawa, ON", service: "Motorcycle Towing", time: "15 min ago" },
];

const trustedBy = [
  { name: "CAA", icon: Building2 },
  { name: "Insurance Partners", icon: Shield },
  { name: "Municipal Fleet", icon: Truck },
  { name: "Auto Dealers", icon: Car },
];

// Counter Component with animation
function AnimatedCounter({ value, suffix = "", label, icon: Icon }: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}) {
  const { count, ref, isVisible } = useCountUp(value, 2500);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative inline-block mb-4">
        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className={`text-4xl md:text-5xl font-bold text-primary transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1 font-medium">{label}</div>
    </div>
  );
}

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentIndex + 1) % testimonials.length);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="relative min-h-[300px] md:min-h-[250px]">
          <Card className="absolute inset-0 bg-card border-2 border-secondary/20 shadow-xl animate-fade-in-scale">
            <CardContent className="p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="h-10 w-10 text-secondary/30 flex-shrink-0" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="flex gap-0.5 justify-end mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-secondary w-8"
                  : "bg-muted hover:bg-secondary/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// Live Activity Ticker
function LiveActivityTicker() {
  return (
    <div className="bg-primary/5 border-y border-primary/10 py-3 overflow-hidden">
      <div className="flex items-center gap-3 animate-ticker whitespace-nowrap">
        {[...recentActivity, ...recentActivity].map((activity, i) => (
          <div key={i} className="flex items-center gap-3 px-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-success rounded-full animate-live-pulse" />
              <span className="text-sm font-medium text-primary">{activity.location}</span>
            </span>
            <span className="text-sm text-muted-foreground">{activity.service}</span>
            <span className="text-xs text-muted-foreground/70">{activity.time}</span>
            <span className="text-muted-foreground/30">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Quick Booking Widget
function QuickBookingWidget() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="glass-hero rounded-2xl p-6 md:p-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-secondary" />
        <span className="text-sm font-semibold text-white/90">Quick Booking</span>
      </div>
      <div className="space-y-4">
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12">
            <SelectValue placeholder="Select service type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="emergency">Emergency Towing - From $89</SelectItem>
            <SelectItem value="roadside">Roadside Assistance - From $59</SelectItem>
            <SelectItem value="heavy">Heavy Duty Towing - From $250</SelectItem>
            <SelectItem value="longdistance">Long Distance - From $1.50/km</SelectItem>
            <SelectItem value="motorcycle">Motorcycle Towing - From $79</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
          <Input
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pl-10 h-12"
          />
        </div>

        <Button
          size="lg"
          variant="secondary"
          className="w-full h-12 text-base font-bold btn-shine"
          asChild
        >
          <Link href={`/book${service ? `?service=${service}` : ""}${location ? `&location=${encodeURIComponent(location)}` : ""}`}>
            Get Instant Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      <p className="text-xs text-white/50 mt-3 text-center">
        No commitment required. Free quote in seconds.
      </p>
    </div>
  );
}

// Service Card with 3D effect
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className={`group h-full hover:border-secondary transition-all duration-300 card-shine overflow-hidden ${service.highlight ? "ring-2 ring-secondary/50 shadow-secondary-glow" : ""}`}>
        {service.highlight && (
          <div className="bg-gradient-to-r from-secondary to-accent text-white text-xs font-bold text-center py-1.5">
            MOST POPULAR
          </div>
        )}
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
              <service.icon className="h-7 w-7 text-secondary group-hover:text-white transition-colors" />
            </div>
            <Badge variant="outline" className="text-xs font-bold">
              {service.price}
            </Badge>
          </div>
          <CardTitle className="text-xl mt-4 group-hover:text-secondary transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.description}
          </p>
          <div className="flex items-center justify-between">
            <Link
              href={service.href}
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const servicesRef = useScrollAnimation<HTMLDivElement>();
  const whyChooseRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-mesh text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute -right-20 top-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -left-20 bottom-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute right-1/4 bottom-1/4 w-48 h-48 bg-primary/30 rounded-full blur-2xl animate-float-rotate" />

        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div ref={heroRef.ref}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in border border-white/20">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-success rounded-full animate-live-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </span>
                <span className="text-white/60">|</span>
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in-up">
                Canada&apos;s #1{" "}
                <span className="text-gradient-animated">Towing Service</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
                Fast, reliable, and professional towing services across Canada.
                From emergency roadside assistance to heavy-duty towing, we&apos;ve
                got you covered <span className="text-secondary font-semibold">24/7</span>.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Button size="xl" variant="secondary" className="animate-glow-pulse btn-shine group" asChild>
                  <Link href="/book">
                    Book Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
                  <a href="tel:1-800-GUARDIUM">
                    <Phone className="mr-2 h-5 w-5" />
                    1-800-GUARDIUM
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                  <span>Licensed & Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Star className="h-5 w-5 text-secondary fill-secondary" />
                  <span>4.9/5 Rating (2,500+ reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Content - Quick Booking */}
            <div className="lg:pl-8">
              <QuickBookingWidget />

              {/* Emergency CTA */}
              <div className="mt-6 flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center animate-emergency-pulse">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Need immediate help?</p>
                  <a href="tel:1-800-GUARDIUM" className="font-bold text-white hover:text-secondary transition-colors">
                    Call 1-800-GUARDIUM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-slide-up" />
          </div>
        </div>
      </section>

      {/* Live Activity Ticker */}
      <LiveActivityTicker />

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-card border-b relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trusted Across Canada
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Numbers That Speak</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef.ref} className="py-20 md:py-28 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="h-3 w-3 mr-1" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Towing <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From emergency roadside assistance to specialized heavy-duty towing,
              we offer a complete range of services to meet all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="btn-shine" asChild>
              <Link href="/book">
                Book a Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef.ref} className="py-20 md:py-28 bg-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <HeartHandshake className="h-3 w-3 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The Guardium <span className="text-gradient">Difference</span>
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                With over two decades of experience and a commitment to
                excellence, Guardium Towing has become Canada&apos;s most trusted
                name in towing services. Here&apos;s what sets us apart:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Timer,
                    title: "30-Min Response",
                    description: "Average arrival time in urban areas",
                    color: "from-secondary to-accent",
                  },
                  {
                    icon: Shield,
                    title: "Fully Insured",
                    description: "$5M comprehensive coverage",
                    color: "from-primary to-primary/70",
                  },
                  {
                    icon: ThumbsUp,
                    title: "Transparent Pricing",
                    description: "No hidden fees, upfront quotes",
                    color: "from-success to-success/70",
                  },
                  {
                    icon: Award,
                    title: "Certified Team",
                    description: "Trained & background checked",
                    color: "from-accent to-secondary",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="group flex gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">Available 24/7</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Help Now?</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Our dispatch team is standing by 24/7 to assist you. Call us
                    for immediate assistance or book online for scheduled services.
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full h-14 text-lg font-bold btn-shine"
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
                      className="w-full h-14 text-lg border-white/30 text-white hover:bg-white hover:text-primary"
                      asChild
                    >
                      <Link href="/book">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Book Online
                      </Link>
                    </Button>
                  </div>

                  <p className="text-xs text-white/50 mt-6 text-center">
                    Average response time: 30 minutes or less
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-xl p-4 animate-float hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-bold text-sm">4.9 Rating</p>
                  <p className="text-xs text-muted-foreground">2,500+ reviews</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-xl p-4 animate-float-slow hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-sm">100+ Cities</p>
                  <p className="text-xs text-muted-foreground">Across Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Customers</span> Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Join thousands of satisfied customers who trust Guardium Towing
              for their roadside emergencies across Canada.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>

          {/* Review platforms */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Rated excellent on</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["Google", "Yelp", "Facebook", "Trustpilot"].map((platform) => (
                <div key={platform} className="flex items-center gap-2 text-muted-foreground">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Got questions? We&apos;ve got answers. If you can&apos;t find what
                you&apos;re looking for, contact our team.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border shadow-sm px-6 data-[state=open]:shadow-lg data-[state=open]:border-secondary/30 transition-all"
                >
                  <AccordionTrigger className="text-left hover:text-secondary py-6 text-base md:text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-mesh text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative">
          <Badge variant="secondary" className="mb-6">
            <Truck className="h-3 w-3 mr-1" />
            Get Started Today
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Experience Canada&apos;s Best Towing Service?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Whether it&apos;s an emergency or a scheduled tow, Guardium Towing is
            here for you 24/7. Book online in seconds or call us now.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="secondary" className="btn-shine h-14 px-8" asChild>
              <Link href="/book">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-primary h-14 px-8"
              asChild
            >
              <a href="tel:1-800-GUARDIUM">
                <Phone className="mr-2 h-5 w-5" />
                1-800-GUARDIUM
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>30-min response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
