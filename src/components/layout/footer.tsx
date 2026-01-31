"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Send,
  Shield,
  Award,
  Star,
  CheckCircle,
  Heart,
} from "lucide-react";

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
  { name: "FAQs", href: "/#faq" },
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
  "Victoria",
  "Quebec City",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const certifications = [
  { icon: Shield, text: "Fully Insured" },
  { icon: Award, text: "CAA Approved" },
  { icon: CheckCircle, text: "Licensed" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-secondary via-secondary to-accent relative">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="container mx-auto px-4 py-12 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get Exclusive Updates & Tips
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for roadside safety tips, exclusive offers, and important updates.
            </p>
            {subscribed ? (
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 inline-flex items-center gap-3 animate-fade-in">
                <CheckCircle className="h-6 w-6 text-white" />
                <span className="text-white font-semibold">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-white border-0 text-foreground"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 bg-primary hover:bg-primary/90 text-white btn-shine">
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-mesh text-white relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-secondary to-accent p-3 rounded-xl shadow-lg">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">GUARDIUM</span>
                  <span className="block text-sm text-white/70 -mt-0.5">TOWING</span>
                </div>
              </Link>
              <p className="text-white/70 leading-relaxed max-w-sm">
                Canada&apos;s leading towing service provider with over 20 years of experience.
                We provide fast, reliable, and professional towing services across the nation, 24/7.
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert) => (
                  <div key={cert.text} className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5">
                    <cert.icon className="h-4 w-4 text-secondary" />
                    <span className="text-xs font-medium">{cert.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 rounded-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary rounded-full" />
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary rounded-full" />
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:1-800-GUARDIUM"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <Phone className="h-5 w-5 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Emergency Hotline</p>
                      <p className="font-semibold group-hover:text-secondary transition-colors">
                        1-800-GUARDIUM
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@guardiumtowing.ca"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <Mail className="h-5 w-5 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Email Us</p>
                      <p className="font-semibold text-sm group-hover:text-secondary transition-colors">
                        info@guardiumtowing.ca
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Available</p>
                    <p className="font-semibold">24/7 Every Day</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold">Service Areas:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs bg-white/5 hover:bg-secondary/20 px-3 py-1.5 rounded-full transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
                <span className="text-xs bg-secondary/20 text-secondary px-3 py-1.5 rounded-full font-semibold">
                  + 100 More Cities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span>&copy; {new Date().getFullYear()} Guardium Towing.</span>
                <span>Made with</span>
                <Heart className="h-4 w-4 text-destructive fill-destructive" />
                <span>in Canada</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
                <span className="ml-2 text-white/70">4.9/5 from 2,500+ reviews</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/50">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
