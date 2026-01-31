"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Menu,
  X,
  Truck,
  ChevronDown,
  Clock,
  MapPin,
  AlertTriangle,
  Wrench,
  Route,
  Bike,
  Car,
  Star,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollAnimation";

const services = [
  {
    name: "Emergency Towing",
    href: "/services/emergency-towing",
    icon: AlertTriangle,
    description: "24/7 rapid response",
    price: "From $89",
    highlight: true,
  },
  {
    name: "Roadside Assistance",
    href: "/services/roadside-assistance",
    icon: Wrench,
    description: "Jump start, flat tire, lockout",
    price: "From $59",
  },
  {
    name: "Heavy Duty Towing",
    href: "/services/heavy-duty-towing",
    icon: Truck,
    description: "Commercial & large vehicles",
    price: "From $250",
  },
  {
    name: "Long Distance Towing",
    href: "/services/long-distance-towing",
    icon: Route,
    description: "Canada & USA transport",
    price: "From $1.50/km",
  },
  {
    name: "Motorcycle Towing",
    href: "/services/motorcycle-towing",
    icon: Bike,
    description: "Specialized handling",
    price: "From $79",
  },
  {
    name: "Accident Recovery",
    href: "/services/accident-recovery",
    icon: Car,
    description: "Insurance coordination",
    price: "Insurance Rates",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "shadow-lg bg-card/98 backdrop-blur-lg"
        : "bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
    )}>
      {/* Scroll Progress Indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top bar */}
      <div className={cn(
        "bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground transition-all duration-300 overflow-hidden",
        scrolled ? "h-0 opacity-0" : "h-auto opacity-100"
      )}>
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full animate-live-pulse" />
              <span>24/7 Emergency Service Available</span>
            </span>
            <a
              href="tel:1-800-GUARDIUM"
              className="flex items-center gap-2 font-semibold hover:text-secondary transition-colors group"
            >
              <Phone className="h-4 w-4 group-hover:animate-shake" />
              <span>1-800-GUARDIUM</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Serving All of Canada</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
              ))}
              <span className="ml-1 text-xs">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-18"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-secondary to-accent p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                GUARDIUM
              </span>
              <span className="block text-xs text-muted-foreground -mt-0.5 tracking-wider">
                TOWING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-lg hover:bg-muted"
            >
              Home
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-lg hover:bg-muted">
                Services
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )} />
              </button>

              {/* Mega Menu Dropdown */}
              <div className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-2 transition-all duration-200",
                servicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              )}>
                <div className="bg-card border-2 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Mega Menu Header */}
                  <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">Our Services</h3>
                        <p className="text-sm text-white/80">Professional towing solutions</p>
                      </div>
                      <Link
                        href="/services"
                        className="text-sm font-medium hover:text-secondary transition-colors flex items-center gap-1"
                      >
                        View All
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="p-4 grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-muted group",
                          service.highlight && "bg-secondary/5 ring-1 ring-secondary/20"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                          service.highlight
                            ? "bg-secondary text-white"
                            : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                        )}>
                          <service.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm group-hover:text-secondary transition-colors">
                              {service.name}
                            </span>
                            {service.highlight && (
                              <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">
                                POPULAR
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{service.description}</p>
                          <p className="text-xs font-semibold text-secondary mt-1">{service.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mega Menu Footer */}
                  <div className="bg-muted/50 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span>30 min response</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Shield className="h-4 w-4 text-secondary" />
                        <span>Fully insured</span>
                      </div>
                    </div>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/book">
                        <Zap className="h-4 w-4 mr-1" />
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-lg hover:bg-muted"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-lg hover:bg-muted"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="default" asChild className="group">
              <Link href="/contact">
                Get Quote
                <ArrowRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </Button>
            <Button variant="secondary" size="default" asChild className="animate-glow-pulse btn-shine">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-200",
                mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )} />
              <X className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-200",
                mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden border-t bg-card overflow-hidden transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          {/* Emergency CTA */}
          <div className="bg-destructive/10 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="font-bold text-sm">Emergency?</p>
                <p className="text-xs text-muted-foreground">Get help now</p>
              </div>
            </div>
            <Button size="sm" variant="destructive" asChild>
              <a href="tel:1-800-GUARDIUM">
                <Phone className="h-4 w-4 mr-1" />
                Call
              </a>
            </Button>
          </div>

          {/* Navigation Links */}
          <Link
            href="/"
            className="block py-3 text-foreground hover:text-secondary transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div className="space-y-2">
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Services
            </span>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <service.icon className="h-4 w-4 text-secondary" />
                  <span className="text-sm">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            className="block py-3 text-foreground hover:text-secondary transition-colors font-medium border-t"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-3 text-foreground hover:text-secondary transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="flex flex-col gap-2 pt-4 border-t">
            <Button variant="outline" asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Quote
              </Link>
            </Button>
            <Button variant="secondary" asChild className="w-full">
              <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                <Zap className="h-4 w-4 mr-1" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
