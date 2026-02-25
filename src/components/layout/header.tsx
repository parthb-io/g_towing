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

const locations = [
  { name: "Edmonton", href: "/locations/edmonton" },
  { name: "Sherwood Park", href: "/locations/sherwood-park" },
  { name: "Spruce Grove", href: "/locations/spruce-grove" },
  { name: "Beaumont", href: "/locations/beaumont" },
  { name: "Devon", href: "/locations/devon" },
  { name: "Morinville", href: "/locations/morinville" },
  { name: "Leduc", href: "/locations/leduc" },
  { name: "St. Albert", href: "/locations/st-albert" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border/50">
      {/* Top bar */}
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
            <span>Serving Edmonton &amp; Surrounding Areas</span>
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

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
                Services
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-md shadow-lg py-1 animate-fade-in">
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

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <Link href="/locations" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
                Locations
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", locationsOpen && "rotate-180")} />
              </Link>

              {locationsOpen && (
                <div className="absolute top-full left-0 w-52 bg-card border border-border rounded-md shadow-lg py-1 animate-fade-in">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-muted transition-colors"
                    >
                      Towing Services in {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
              <a href="tel:1-800-GUARDIUM">
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                Call Now
              </a>
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
            <Link
              href="/about"
              className="block py-2 text-sm text-foreground hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div className="space-y-1">
              <Link
                href="/services"
                className="block text-xs font-medium text-muted-foreground uppercase tracking-wider py-1 hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
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

            <div className="space-y-1">
              <Link
                href="/locations"
                className="block text-xs font-medium text-muted-foreground uppercase tracking-wider py-1 hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </Link>
              {locations.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="block py-1.5 pl-3 text-sm text-foreground hover:text-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {location.name}
                </Link>
              ))}
            </div>

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
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
