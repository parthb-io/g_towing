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
  MapPin,
  Clock,
  Search,
  Shield,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Emergency Towing",
    href: "/services/emergency-towing",
    description: "24/7 rapid response",
    icon: "🚨"
  },
  {
    name: "Roadside Assistance",
    href: "/services/roadside-assistance",
    description: "Jump starts, tire changes & more",
    icon: "🔧"
  },
  {
    name: "Heavy Duty Towing",
    href: "/services/heavy-duty-towing",
    description: "Commercial vehicles up to 50 tons",
    icon: "🚛"
  },
  {
    name: "Long Distance Towing",
    href: "/services/long-distance-towing",
    description: "Canada & USA coverage",
    icon: "🛣️"
  },
  {
    name: "Motorcycle Towing",
    href: "/services/motorcycle-towing",
    description: "Specialized bike transport",
    icon: "🏍️"
  },
  {
    name: "Accident Recovery",
    href: "/services/accident-recovery",
    description: "Scene cleanup & insurance help",
    icon: "🚗"
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-airbnb-sm"
        : "bg-white"
    )}>
      {/* Top bar - Emergency info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="hidden sm:flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              24/7 Emergency Service
            </span>
            <a
              href="tel:1-800-GUARDIUM"
              className="flex items-center gap-2 font-semibold hover:text-secondary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              1-800-GUARDIUM
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-primary-foreground/80">
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
              4.9/5 Rating
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Fully Insured
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="bg-gradient-warm p-2.5 rounded-xl">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-primary tracking-tight">Guardium</span>
                <span className="block text-[10px] font-medium text-muted-foreground uppercase tracking-widest -mt-0.5">Towing</span>
              </div>
            </Link>

            {/* Center Search Bar - Airbnb Style */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="search-bar flex items-center w-full divide-x divide-border">
                <div className="flex items-center gap-2 px-4 py-2.5 flex-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your location"
                    className="bg-transparent text-sm focus:outline-none w-full placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5">
                  <select className="bg-transparent text-sm focus:outline-none text-muted-foreground cursor-pointer">
                    <option>Service type</option>
                    <option>Emergency Towing</option>
                    <option>Roadside Assistance</option>
                    <option>Heavy Duty Towing</option>
                    <option>Long Distance</option>
                    <option>Motorcycle</option>
                  </select>
                </div>
                <button className="bg-secondary hover:bg-secondary/90 text-white p-2.5 m-1 rounded-full transition-colors">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-full transition-all"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-full transition-all">
                  Services
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white border border-border/50 rounded-2xl shadow-airbnb-lg p-4 mt-2 animate-scale-in">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                        >
                          <span className="text-xl">{service.icon}</span>
                          <div>
                            <span className="block text-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                              {service.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {service.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                      >
                        View all services
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-full transition-all"
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-full transition-all"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" className="rounded-full" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button variant="secondary" className="rounded-full shadow-lg shadow-secondary/25" asChild>
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[104px] bg-white z-50 animate-fade-in overflow-auto">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Search */}
            <div className="search-bar flex items-center mb-6">
              <div className="flex items-center gap-3 px-4 py-3 flex-1">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search services or locations..."
                  className="bg-transparent text-base focus:outline-none w-full"
                />
              </div>
            </div>

            <nav className="space-y-1">
              <Link
                href="/"
                className="block py-3 px-4 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="py-2">
                <span className="block px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Services
                </span>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 py-3 px-4 text-foreground hover:bg-muted rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-lg">{service.icon}</span>
                      <div>
                        <span className="block font-medium">{service.name}</span>
                        <span className="block text-sm text-muted-foreground">{service.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="block py-3 px-4 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <Button variant="outline" className="w-full rounded-full h-12 text-base" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
              <Button variant="secondary" className="w-full rounded-full h-12 text-base" asChild>
                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
              <a
                href="tel:1-800-GUARDIUM"
                className="flex items-center justify-center gap-2 py-3 text-secondary font-semibold"
              >
                <Phone className="h-5 w-5" />
                1-800-GUARDIUM
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
