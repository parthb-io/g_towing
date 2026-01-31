"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Truck, ChevronDown } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">GUARDIUM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border rounded-lg shadow-xl py-2 mt-1 animate-scale-in">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-secondary hover:bg-secondary/5 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:1-800-GUARDIUM"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>1-800-GUARDIUM</span>
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 px-6" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
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
        <div className="lg:hidden border-t bg-white animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="space-y-2">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Services
              </span>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 pl-3 text-foreground/80 border-l-2 border-transparent hover:border-secondary hover:text-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 border-t space-y-3">
              <a
                href="tel:1-800-GUARDIUM"
                className="flex items-center gap-2 text-sm font-medium text-secondary"
              >
                <Phone className="h-4 w-4" />
                <span>1-800-GUARDIUM</span>
              </a>
              <Button
                className="w-full bg-secondary hover:bg-secondary/90"
                asChild
              >
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
