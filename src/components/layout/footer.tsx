import Link from "next/link";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">GUARDIUM</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Canada&apos;s leading towing service. Fast, reliable, and professional.
              Available 24/7.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/60 hover:text-secondary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:1-800-GUARDIUM"
                  className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  1-800-GUARDIUM
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@guardiumtowing.ca"
                  className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  info@guardiumtowing.ca
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="h-4 w-4 text-tertiary mt-0.5" />
                <span>
                  123 Towing Drive
                  <br />
                  Toronto, ON M5V 1A1
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Guardium Towing</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
