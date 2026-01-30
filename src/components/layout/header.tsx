"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Menu,
  X,
  Truck,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Emergency Towing", href: "/services/emergency-towing" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance" },
  { name: "Heavy Duty Towing", href: "/services/heavy-duty-towing" },
  { name: "Long Distance Towing", href: "/services/long-distance-towing" },
  { name: "Motorcycle Towing", href: "/services/motorcycle-towing" },
  { name: "Accident Recovery", href: "/services/accident-recovery" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">24/7 Emergency Service Available</span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:1-800-GUARDIUM" className="font-semibold hover:text-secondary transition-colors">
                1-800-GUARDIUM
              </a>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Serving All of Canada</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-secondary p-2 rounded-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-primary">GUARDIUM</span>
              <span className="block text-xs text-muted-foreground -mt-1">TOWING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-card border rounded-lg shadow-xl py-2 animate-fade-in">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button variant="secondary" asChild className="animate-pulse-glow">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-card animate-slide-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="space-y-2">
              <span className="block text-sm font-semibold text-muted-foreground uppercase">Services</span>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 pl-4 text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button variant="secondary" asChild className="w-full">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
