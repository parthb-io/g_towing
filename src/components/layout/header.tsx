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
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border/50">
      {/* Top bar - Redis-style slim utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline opacity-80">24/7 Emergency Service Available</span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              <a href="tel:1-800-GUARDIUM" className="font-medium hover:text-secondary transition-colors">
                1-800-GUARDIUM
              </a>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 opacity-80">
            <span>Serving All of Canada</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="bg-secondary p-1.5 rounded-md">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-foreground">GUARDIUM</span>
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground -mt-0.5">Towing</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
                Services
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-md shadow-lg py-1 animate-fade-in">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-muted transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-card animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-sm text-foreground hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="space-y-1">
              <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">Services</span>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-1.5 pl-3 text-sm text-foreground hover:text-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="block py-2 text-sm text-foreground hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm text-foreground hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-2 pt-3 border-t">
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
