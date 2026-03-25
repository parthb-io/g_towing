import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
  Package,
  Cpu,
  Building2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Light & Medium Duty Towing",
    href: "/services/light-medium-duty-towing",
  },
  { name: "Heavy Duty Towing", href: "/services/heavy-duty-towing" },
  { name: "Flatbed Towing", href: "/services/flatbed-towing" },
  { name: "Accident Towing", href: "/services/accident-towing" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance" },
  { name: "Battery Boost", href: "/services/battery-boost-jump-start" },
  { name: "Tire Service", href: "/services/tire-repair-replacement" },
  { name: "Fuel Delivery", href: "/services/fuel-delivery" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Service Areas", href: "/locations" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const support = [
  { name: "Help & FAQ", href: "/help" },
  { name: "Book a Service", href: "/book" },
  { name: "Get a Quote", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const serviceAreas = [
  { name: "Edmonton", href: "/locations/edmonton" },
  { name: "Sherwood Park", href: "/locations/sherwood-park" },
  { name: "Spruce Grove", href: "/locations/spruce-grove" },
  { name: "Beaumont", href: "/locations/beaumont" },
  { name: "Devon", href: "/locations/devon" },
  { name: "Morinville", href: "/locations/morinville" },
  { name: "Leduc", href: "/locations/leduc" },
];

const guardiumCompanies = [
  {
    name: "Guardium Group of Companies",
    description: "Parent Company",
    href: "https://guardiumgroup.com",
    icon: Building2,
  },
  {
    name: "Guardium Security",
    description: "Security Services",
    href: "https://guardiumsecurity.com",
    icon: Shield,
  },
  {
    name: "Guardium Logistics",
    description: "Freight & Logistics",
    href: "https://guardiumlogistics.com",
    icon: Package,
  },
  {
    name: "Guardium Courier",
    description: "Delivery Services",
    href: "https://guardiumcourier.com",
    icon: Truck,
  },
  {
    name: "Guardium Technologies",
    description: "Technology Solutions",
    href: "https://guardiumtech.com",
    icon: Cpu,
  },
  {
    name: "Guardium Property Services",
    description: "Technology Solutions",
    href: "https://guardiumgc.com",
    icon: Cpu,
  },
  {
    name: "Guardium Staffing Solutions",
    description: "Technology Solutions",
    href: "https://guardiumstaffing.com",
    icon: Cpu,
  },
  {
    name: "Guardium Consulting Services",
    description: "Technology Solutions",
    href: "https://guardiumconsulting.com",
    icon: Cpu,
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      {/* Pre-Footer CTA */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Need emergency towing?</p>
                <p className="text-xl font-bold text-white">
                  Call 780-809-7860
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white rounded-full border-2 border-gray-200 text-primary hover:bg-gray-100"
                asChild
              >
                <a href="tel:+17808097860">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary/80 border-2 border-white/30 text-white hover:bg-primary/60 rounded-full"
                asChild
              >
                <Link href="/book">
                  Book Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info - Spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-gray-900">
                  GUARDIUM
                </span>
                <span className="block text-xs uppercase tracking-widest text-gray-500">
                  Towing
                </span>
              </div>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed">
              Part of the Guardium Group of Companies. Edmonton&apos;s trusted
              24/7 towing and roadside assistance provider serving the greater
              Edmonton metropolitan area.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+17808097860"
                className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+1 780-809-7860</span>
              </a>
              <a
                href="mailto:dispatch@guardiumtowing.com"
                className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">dispatch@guardiumtowing.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">
                  Unit 206, 4918 Roper Rd NW
                  <br />
                  Edmonton, AB T6B3T7
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/guardiumtowing"
                 target="_blank"
              rel="noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors text-gray-600"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/guardiumtowing"
                 target="_blank"
              rel="noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors text-gray-600"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/guardiumtowing"
                 target="_blank"
              rel="noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors text-gray-600"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/guardium-group-of-companies/"
                 target="_blank"
              rel="noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors text-gray-600"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="youtube.com/@GuardiumGroup?si=CKynahCoTRVgfmefhttps"
                 target="_blank"
              rel="noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors text-gray-600"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mt-8 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    Towing in {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1 text-primary text-sm mt-4 hover:underline"
            >
              View all locations
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Guardium Group */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-5">
              Guardium Group
            </h3>
            <p className="text-gray-500 text-xs mb-4">
              Our family of companies
            </p>
            <ul className="space-y-3">
              {guardiumCompanies.map((company) => (
                <li key={company.name}>
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
                  >
                    
                    <div>
                      <span className="text-sm block">{company.name}</span>
                      
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} Guardium Towing. All rights
                reserved.
              </p>
              <span className="hidden sm:block">•</span>
              <p>A Guardium Group Company</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/help"
                className="hover:text-primary transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/careers"
                className="hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
