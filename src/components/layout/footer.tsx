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
  { name: "Light & Medium Duty Towing", href: "/services/light-medium-duty-towing" },
  { name: "Heavy Duty Towing & Recovery", href: "/services/heavy-duty-towing-recovery" },
  { name: "Deck & Transportation Hauling", href: "/services/deck-transportation-hauling" },
  { name: "Accident Towing", href: "/services/accident-towing" },
  { name: "Flatbed Towing", href: "/services/flatbed-towing" },
  { name: "Winching / Tow Dolly", href: "/services/winching-tow-dolly" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance" },
  { name: "Battery Boost & Jump Start", href: "/services/battery-boost-jump-start" },
  { name: "Tire Repair & Replacement", href: "/services/tire-repair-replacement" },
  { name: "Fuel Delivery", href: "/services/fuel-delivery" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

const serviceAreas = [
  { name: "Edmonton", href: "/locations/edmonton" },
  { name: "Sherwood Park", href: "/locations/sherwood-park" },
  { name: "Spruce Grove", href: "/locations/spruce-grove" },
  { name: "Beaumont", href: "/locations/beaumont" },
  { name: "Devon", href: "/locations/devon" },
  { name: "Morinville", href: "/locations/morinville" },
  { name: "Leduc", href: "/locations/leduc" },
  { name: "St. Albert", href: "/locations/st-albert" },
];

export function Footer() {
  return (
    <footer className="bg-[hsl(222,47%,7%)] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-secondary p-1.5 rounded-md">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">GUARDIUM</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/50 -mt-0.5">Towing</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Edmonton&apos;s trusted towing service provider. Fast, reliable, and professional
              towing and roadside assistance across Edmonton and surrounding areas.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-md hover:bg-secondary/20 hover:text-secondary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-md hover:bg-secondary/20 hover:text-secondary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-md hover:bg-secondary/20 hover:text-secondary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-md hover:bg-secondary/20 hover:text-secondary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/50 hover:text-secondary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">Quick Links</h3>
            <ul className="space-y-2.5 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-3">Service Areas</h3>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="text-xs bg-white/5 text-white/50 hover:text-secondary hover:bg-secondary/10 px-2 py-0.5 rounded transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-secondary mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-white/70">Emergency Hotline</p>
                  <a
                    href="tel:1-800-GUARDIUM"
                    className="text-white/50 hover:text-secondary transition-colors text-sm"
                  >
                    1-800-GUARDIUM
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-secondary mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-white/70">Email</p>
                  <a
                    href="mailto:info@guardiumtowing.ca"
                    className="text-white/50 hover:text-secondary transition-colors text-sm"
                  >
                    info@guardiumtowing.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-white/70">Based In</p>
                  <p className="text-white/50 text-sm">
                    Edmonton, AB
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-secondary mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-white/70">Hours</p>
                  <p className="text-white/50 text-sm">
                    24/7 Emergency Service
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/5" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Guardium Towing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-secondary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
