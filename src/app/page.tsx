import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HomeHeroCarousel } from "@/components/home-hero-carousel";
import { PartnerLogoCarousel } from "@/components/partner-logo-carousel";
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
  Award,
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

const partners = [
  { name: "Guardium Towing", logo: "/images/Towing logo.png", href: "https://guardiumtowing.com" },
  { name: "Guardium Security", logo: "/images/Towing logo.png", href: "https://guardiumsecurity.com" },
  { name: "Guardium Logistics", logo: "/images/Towing logo.png", href: "https://guardiumlogistics.com" },
  { name: "Guardium Auto", logo: "/images/Towing logo.png", href: "https://guardiumauto.com" },
  { name: "Guardium Fleet", logo: "/images/Towing logo.png", href: "https://guardiumfleet.com" },
  { name: "Guardium Transport", logo: "/images/Towing logo.png", href: "https://guardiumtransport.com" },
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

const heroSlides = [
  {
    image: "/images/HeavyTowing1024x680.jpg",
    badge: "24/7 Emergency Service",
    title: "Alberta's #1 ",
    highlight: "Trusted Towing Partner",
    description:
      "Fast, reliable, and professional towing services across Canada. From emergency roadside assistance to heavy-duty towing, we've got you covered 24/7.",
  },
  {
    image: "/images/decktruckoldcar1024x693.jpg",
    badge: "Nationwide Dispatch Network",
    title: "Rapid Response ",
    highlight: "Across Major Cities",
    description:
      "Our dispatch network covers urban and regional routes coast to coast, with trained operators and professional equipment available day and night.",
  },
  {
    image: "/images/decktruckequipment31024x695.jpg",
    badge: "Local Tow Specialists",
    title: "Sedans to Trucks,",
    highlight: "We Tow Them All",
    description:
      "Certified drivers and modern tow units for light, medium, and heavy-duty recovery. Safe handling, transparent pricing, and trusted service every time.",
  },
  {
    image: "/images/cliffs500rotator.jpg",
    badge: "Advanced Recovery Fleet",
    title: "Complex/Heavy-Duty",
    highlight: "Recoveries",
    description:
      "For difficult recoveries and heavy lifts, our specialized rotator units and trained operators deliver safe, controlled results in demanding conditions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HomeHeroCarousel slides={heroSlides} />

      {/* Partners Logo Carousel */}
      <PartnerLogoCarousel
        partners={partners}
        title="Part of the Guardium Group of Companies"
      />


      {/* Services Section */}
      <section className="py-30 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
              Comprehensive Towing Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency roadside assistance to specialized heavy-duty towing,
              we offer a complete range of services to meet all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <service.icon className="h-5 w-5 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book">
                Book a Service Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Maintenance Hero Section */}
      <section className="py-16 md:py-30  bg-card/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Ongoing Website Maintenance
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">
              We&apos;re making things way better.
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Our website is temporarily offline for scheduled improvements.
              Our towing services remain fully operational 24/7.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 text-left">
              <div className="rounded-lg border border-border bg-card px-4 py-3">
                <p className="text-xs text-muted-foreground mb-1">Emergency Dispatch</p>
                <p className="text-sm font-semibold text-white">Online</p>
              </div>
              <div className="rounded-lg border border-border bg-card px-4 py-3">
                <p className="text-xs text-muted-foreground mb-1">Roadside Assistance</p>
                <p className="text-sm font-semibold text-white">Online</p>
              </div>
              <div className="rounded-lg border border-border bg-card px-4 py-3">
                <p className="text-xs text-muted-foreground mb-1">Phone Support</p>
                <p className="text-sm font-semibold text-white">Online</p>
              </div>
              <div className="rounded-lg border border-border bg-card px-4 py-3">
                <p className="text-xs text-muted-foreground mb-1">Online Booking</p>
                <p className="text-sm font-semibold text-secondary">Upgrading</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="xl" variant="secondary" asChild>
                <a href="tel:+17809378737">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Assistance Now
                </a>
              </Button>
              <Button size="xl" variant="outline" className="border-white/25 text-white hover:bg-white/10" asChild>
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
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
                The Guardium Difference
              </h2>
              <p className="text-muted-foreground mb-8">
                With over two decades of experience and a commitment to
                excellence, Guardium Towing has become Canada&apos;s most trusted
                name in towing services.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Rapid Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Average arrival time of 30 minutes or less in urban areas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Fully Insured & Licensed</h3>
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
                <h3 className="text-xl font-bold mb-4">Need Help Now?</h3>
                <p className="text-white/60 mb-6 text-sm">
                  Our dispatch team is standing by 24/7 to assist you. Call us
                  for immediate assistance or book online for scheduled services.
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
            <Badge variant="accent" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Guardium Towing
              for their roadside emergencies.
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
            Ready to Experience the Best Towing Service in Canada?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Whether it&apos;s an emergency or a scheduled tow, Guardium Towing is
            here for you 24/7. Book online or call us now.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/book">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
