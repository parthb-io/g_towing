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
  Bike,
  Route,
  Award,
  Users,
  ThumbsUp,
} from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Towing",
    description:
      "24/7 rapid response emergency towing. We're there when you need us most, day or night.",
    href: "/services/emergency-towing",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description:
      "Battery jump starts, flat tire changes, fuel delivery, and lockout services.",
    href: "/services/roadside-assistance",
  },
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description:
      "Specialized equipment for trucks, buses, RVs, and commercial vehicles up to 50 tons.",
    href: "/services/heavy-duty-towing",
  },
  {
    icon: Route,
    title: "Long Distance Towing",
    description:
      "Safe and secure long-distance vehicle transport anywhere in Canada and the USA.",
    href: "/services/long-distance-towing",
  },
  {
    icon: Bike,
    title: "Motorcycle Towing",
    description:
      "Gentle handling with specialized motorcycle trailers and experienced operators.",
    href: "/services/motorcycle-towing",
  },
  {
    icon: Car,
    title: "Accident Recovery",
    description:
      "Professional accident scene cleanup and vehicle recovery with insurance coordination.",
    href: "/services/accident-recovery",
  },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Customers" },
  { icon: Truck, value: "200+", label: "Tow Trucks" },
  { icon: MapPin, value: "100+", label: "Cities Covered" },
  { icon: Clock, value: "20+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    rating: 5,
    text: "Guardium Towing saved my day when my car broke down on the 401. They arrived in under 30 minutes and were incredibly professional. Highly recommend!",
  },
  {
    name: "Michael R.",
    location: "Vancouver, BC",
    rating: 5,
    text: "Best towing service I've ever used. Fair pricing, fast response, and the driver was super friendly. Will definitely use them again.",
  },
  {
    name: "Jennifer L.",
    location: "Calgary, AB",
    rating: 5,
    text: "Had to tow my motorcycle after an accident. They used proper equipment and handled it with care. Professional service from start to finish.",
  },
];

const faqs = [
  {
    question: "How quickly can you respond to an emergency?",
    answer:
      "Our average response time is 30 minutes or less in urban areas. We have dispatch centers across Canada ensuring rapid response 24/7, 365 days a year.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes, we work directly with all major insurance providers in Canada. We can handle the paperwork and billing directly with your insurer to make the process seamless for you.",
  },
  {
    question: "What types of vehicles can you tow?",
    answer:
      "We can tow all types of vehicles including sedans, SUVs, trucks, motorcycles, RVs, buses, and commercial vehicles. Our heavy-duty trucks can handle vehicles up to 50 tons.",
  },
  {
    question: "How much does towing cost?",
    answer:
      "Pricing depends on factors like distance, vehicle type, and time of service. We provide transparent upfront quotes with no hidden fees. Call us for a free estimate.",
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
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              <Clock className="h-3 w-3 mr-1" />
              24/7 Emergency Service
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Canada&apos;s Most Trusted{" "}
              <span className="text-gradient">Towing Service</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Fast, reliable, and professional towing services across Canada.
              From emergency roadside assistance to heavy-duty towing, we&apos;ve
              got you covered 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="xl" variant="secondary" asChild className="animate-pulse-glow">
                <Link href="/book">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-5 w-5" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm">Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-secondary" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Towing Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From emergency roadside assistance to specialized heavy-duty towing,
              we offer a complete range of services to meet all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:border-secondary transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6 text-secondary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/book">
                Book a Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Guardium Difference
              </h2>
              <p className="text-muted-foreground mb-8">
                With over two decades of experience and a commitment to
                excellence, Guardium Towing has become Canada&apos;s most trusted
                name in towing services.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Rapid Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Average arrival time of 30 minutes or less in urban areas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fully Insured & Licensed</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete peace of mind with comprehensive insurance coverage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      Upfront quotes with no hidden fees. Pay only what you&apos;re quoted.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Certified Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      All drivers are trained, certified, and background checked.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Need Help Now?</h3>
                <p className="text-white/80 mb-6">
                  Our dispatch team is standing by 24/7 to assist you. Call us
                  for immediate assistance or book online for scheduled services.
                </p>
                <div className="space-y-4">
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
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                    asChild
                  >
                    <Link href="/book">Book Online</Link>
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
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Guardium Towing
              for their roadside emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
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
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Best Towing Service in Canada?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Whether it&apos;s an emergency or a scheduled tow, Guardium Towing is
            here for you 24/7. Book online or call us now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/book">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
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
