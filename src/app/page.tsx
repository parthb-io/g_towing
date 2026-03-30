"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HomeHeroCarousel } from "@/components/home-hero-carousel";
import { PartnerLogoCarousel } from "@/components/partner-logo-carousel";
import { ProcessBanner } from "@/components/process-banner";
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
import { motion } from "framer-motion";

const services = [
  {
    icon: Truck,
    title: "Light & Medium Duty Towing",
    description:
      "24/7 towing for cars, SUVs, pickups, and vans. Fast response across Edmonton and area.",
    href: "/services/light-medium-duty-towing",
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
    icon: Car,
    title: "Flatbed Towing",
    description:
      "Safe flatbed transport for luxury vehicles, lowered cars, and all-wheel drive vehicles.",
    href: "/services/flatbed-towing",
  },
  {
    icon: AlertTriangle,
    title: "Accident Towing",
    description:
      "Professional accident scene cleanup and vehicle recovery with insurance coordination.",
    href: "/services/accident-towing",
  },
  {
    icon: Route,
    title: "Fuel Delivery",
    description:
      "Ran out of gas? We'll deliver fuel to your location so you can get back on the road.",
    href: "/services/fuel-delivery",
  },
];

const partners = [
  { name: "Guardium Group", logo: "/images/partners/gc_logo.png", href: "https://guardiumgroup.com" },
  { name: "Guardium Towing", logo: "/images/Towing logo.png", href: "https://guardiumtowing.com" },
  { name: "Guardium Security", logo: "/images/partners/security_logo.png", href: "https://guardiumsecurity.com" },
  { name: "Guardium Logistics", logo: "/images/partners/logistics_logo.png", href: "https://guardiumlogistics.com" },
  { name: "Guardium Courier", logo: "/images/partners/courier_logo.png", href: "https://guardiumcourier.com" },
  { name: "Guardium Tech", logo: "/images/partners/tech_logo.png", href: "https://guardiumtech.com" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Edmonton, AB",
    rating: 5,
    text: "Guardium Towing saved my day when my car broke down on the Henday. They arrived in under 30 minutes and were incredibly professional. Highly recommend!",
  },
  {
    name: "Michael R.",
    location: "Sherwood Park, AB",
    rating: 5,
    text: "Best towing service I've ever used. Fair pricing, fast response, and the driver was super friendly. Will definitely use them again.",
  },
  {
    name: "Jennifer L.",
    location: "Spruce Grove, AB",
    rating: 5,
    text: "Needed a tow late at night and they came right away. Professional service from start to finish. Great experience.",
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
    title: "Edmonton's #1 ",
    highlight: "Trusted Towing Partner",
    description:
      "Fast, reliable, and professional towing services across Edmonton and surrounding areas. From emergency roadside assistance to heavy-duty towing, we've got you covered 24/7.",
  },
  {
    image: "/images/decktruckoldcar1024x693.jpg",
    badge: "Edmonton Area Coverage",
    title: "Rapid Response ",
    highlight: "Across Edmonton & Area",
    description:
      "Serving Edmonton, Sherwood Park, Spruce Grove, Beaumont, Devon, Morinville, and Leduc with fast, professional towing service.",
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HomeHeroCarousel slides={heroSlides} />

      {/* Process Steps Banner */}
      <ProcessBanner />

      {/* Partners Logo Carousel
      <PartnerLogoCarousel
        partners={partners}
        title="Part of the Guardium Group of Companies"
      /> */}

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
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
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button size="lg" variant="default" asChild>
              <Link href="/book">
                Book a Service Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Hero Section */}
      {/* <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-primary text-white border-none">
              Ongoing Website Maintenance
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">
              We&apos;re making things way better.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Our website is temporarily offline for scheduled improvements.
              Our towing services remain fully operational 24/7.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 text-left"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: "Emergency Dispatch", status: "Online", active: true },
                { label: "Roadside Assistance", status: "Online", active: true },
                { label: "Phone Support", status: "Online", active: true },
                { label: "Online Booking", status: "Upgrading", active: false },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3"
                >
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className={`text-sm font-semibold ${item.active ? "text-green-400" : "text-primary"}`}>
                    {item.status}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" variant="default" asChild>
                <a href="tel:+17808097860">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Assistance Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10" asChild>
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Badge variant="accent" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                The Guardium Difference
              </h2>
              <p className="text-gray-600 mb-8">
                With over two decades of experience and a commitment to
                excellence, Guardium Towing has become Canada&apos;s most trusted
                name in towing services.
              </p>

              <motion.div
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Clock, title: "Rapid Response Time", desc: "Average arrival time of 30 minutes or less in urban areas." },
                  { icon: Shield, title: "Fully Insured & Licensed", desc: "Complete peace of mind with comprehensive insurance coverage." },
                  { icon: ThumbsUp, title: "Transparent Pricing", desc: "Upfront quotes with no hidden fees. Pay only what you're quoted." },
                  { icon: Award, title: "Certified Professionals", desc: "All drivers are trained, certified, and background checked." },
                ].map((item) => (
                  <motion.div key={item.title} variants={fadeInUp} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <div className="bg-gray-900 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Help Now?</h3>
                <p className="text-white/60 mb-6 text-sm">
                  Our dispatch team is standing by 24/7 to assist you. Call us
                  for immediate assistance or book online for scheduled services.
                </p>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="default"
                    className="w-full"
                    asChild
                  >
                    <a href="tel:+17808097860">
                      <Phone className="mr-2 h-5 w-5" />
                      Call +1 780-809-7860
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
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Badge variant="accent" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Guardium Towing
              for their roadside emergencies.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-900">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Badge variant="accent" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Got questions? We&apos;ve got answers. If you can&apos;t find what
                you&apos;re looking for, contact our team.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                    <AccordionTrigger className="text-left text-gray-900 hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Badge variant="accent" className="mb-4">
              Service Areas
            </Badge>
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">
              Serving Edmonton & Surrounding Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fast, professional towing service throughout the greater Edmonton metropolitan area.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {["Edmonton", "Sherwood Park", "Spruce Grove", "Beaumont", "Devon", "Morinville", "Leduc"].map((area) => (
              <motion.div key={area} variants={fadeInUp}>
                <Link
                  href={`/locations/${area.toLowerCase().replace(" ", "-")}`}
                  className="inline-block px-5 py-2.5 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium text-gray-700 transition-colors"
                >
                  {area}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/locations">
                View All Locations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      {/* <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">24/7 Emergency</div>
                <div className="text-sm text-gray-600">Always available</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Fast Response</div>
                <div className="text-sm text-gray-600">30 min average</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Transparent Pricing</div>
                <div className="text-sm text-gray-600">No hidden fees</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Experience the Best Towing Service in Edmonton?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Whether it&apos;s an emergency or a scheduled tow, Guardium Towing is
              here for you 24/7. Book online or call us now.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="default" asChild>
                <Link href="/book">
                  Book a Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}
