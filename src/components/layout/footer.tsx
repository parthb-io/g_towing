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
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Emergency Towing", href: "/services/emergency-towing" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance" },
  { name: "Heavy Duty Towing", href: "/services/heavy-duty-towing" },
  { name: "Long Distance Towing", href: "/services/long-distance-towing" },
  { name: "Motorcycle Towing", href: "/services/motorcycle-towing" },
  { name: "Accident Recovery", href: "/services/accident-recovery" },
];

const company = [
  { name: "About Us", href: "/contact" },
  { name: "Our Team", href: "/contact" },
  { name: "Careers", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const support = [
  { name: "Help Center", href: "/contact" },
  { name: "Get a Quote", href: "/contact" },
  { name: "Book Online", href: "/book" },
  { name: "Track My Driver", href: "/contact" },
  { name: "Insurance Claims", href: "/contact" },
];

const serviceAreas = [
  "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Halifax"
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Get roadside tips & exclusive offers
              </h3>
              <p className="text-muted-foreground">
                Join 50,000+ Canadians who receive our monthly newsletter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full sm:w-80"
              />
              <Button variant="secondary" className="rounded-full px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="bg-gradient-warm p-2.5 rounded-xl">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground tracking-tight">Guardium</span>
                <span className="block text-[10px] font-medium text-muted-foreground uppercase tracking-widest -mt-0.5">Towing</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Canada's trusted towing service since 2004. Fast, reliable, and professional roadside assistance 24/7.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.9</span>
              <span className="text-sm text-muted-foreground">· 50K+ reviews</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-secondary hover:text-white flex items-center justify-center text-muted-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:1-800-GUARDIUM"
                  className="flex items-center gap-3 text-sm group"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Phone className="h-4 w-4 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block font-medium text-foreground">1-800-GUARDIUM</span>
                    <span className="text-xs text-muted-foreground">24/7 Emergency Line</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:help@guardiumtowing.ca"
                  className="flex items-center gap-3 text-sm group"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Mail className="h-4 w-4 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-secondary transition-colors">
                    help@guardiumtowing.ca
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-muted-foreground">
                  123 Towing Drive<br />
                  Toronto, ON M5V 1A1
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-border">
          <h4 className="font-semibold text-foreground mb-4 text-center">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-white transition-colors cursor-pointer"
              >
                {area}
              </span>
            ))}
            <span className="px-3 py-1.5 bg-secondary/10 rounded-full text-xs font-medium text-secondary">
              + 100 more
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Guardium Towing. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-muted-foreground hover:text-foreground transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
