import Link from "next/link";
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
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const services = [
  { name: "Emergency Towing", href: "/services/emergency-towing" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance" },
  { name: "Heavy Duty Towing", href: "/services/heavy-duty-towing" },
  { name: "Long Distance Towing", href: "/services/long-distance-towing" },
  { name: "Motorcycle Towing", href: "/services/motorcycle-towing" },
  { name: "Accident Recovery", href: "/services/accident-recovery" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Book a Service", href: "/book" },
];

const serviceAreas = [
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Winnipeg",
  "Halifax",
];

export function Footer() {
  return (
    <footer className="bg-gradient-hero text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-secondary p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">GUARDIUM</span>
                <span className="block text-xs text-white/70 -mt-1">TOWING</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Canada&apos;s leading towing service provider with over 20 years of experience.
              We provide fast, reliable, and professional towing services across the nation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs bg-white/10 px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Emergency Hotline</p>
                  <a
                    href="tel:1-800-GUARDIUM"
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    1-800-GUARDIUM
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a
                    href="mailto:info@guardiumtowing.ca"
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    info@guardiumtowing.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Headquarters</p>
                  <p className="text-white/80 text-sm">
                    123 Towing Drive<br />
                    Toronto, ON M5V 1A1
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Hours</p>
                  <p className="text-white/80 text-sm">
                    24/7 Emergency Service
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Guardium Towing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
