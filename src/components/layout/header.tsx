"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu as MenuIcon,
  X,
  Megaphone,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { Separator } from "@radix-ui/react-select";

const services = [
  { name: "Emergency Towing", href: "/services/emergency-towing", description: "24/7 fast response" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance", description: "Jump starts, tire changes" },
  { name: "Heavy Duty Towing", href: "/services/heavy-duty-towing", description: "Commercial & industrial" },
  { name: "Long Distance Towing", href: "/services/long-distance-towing", description: "Cross-country transport" },
  { name: "Motorcycle Towing", href: "/services/motorcycle-towing", description: "Specialized bike transport" },
  { name: "Accident Recovery", href: "/services/accident-recovery", description: "Collision scene cleanup" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {/* Fixed announcement bar */}
      <div className="fixed top-0 inset-x-0 z-60 bg-card/70 backdrop-blur supports-backdrop-filter:bg-lime-600/40  text-primary border-b border-lime-500">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3 font-mono text-xs">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Megaphone className="h-3.5 w-3.5 text-lime-400 shrink-0" />
            <span className="truncate text-[11px] sm:text-sm font-medium  text-white">
              Announcing our acquisition of Cliffs Towing.
            </span>
            <Link
              href="/blog/guardium-acquires-cliffs-towing"
              className="hidden sm:inline-flex items-center gap-1 font-medium text-lime-400 hover:text-secondary/80 transition-colors"
            >
              Read announcement
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on Facebook"
              className="text-white hover:text-lime-400   transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on Instagram"
              className="text-white hover:text-lime-400   transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on LinkedIn"
              className="text-white hover:text-lime-400  transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <header className="fixed top-8 inset-x-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between bg-white/95 backdrop-blur-2xl  rounded-[30px] py-1.5 px-4">
            {/* Logo */}
            <Link href="/" className="z-50">
              <Image
                src="/images/Towing logo.png"
                alt="Guardium Towing"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Aceternity Navbar */}
            <div className="hidden lg:block bg-none">
              <Menu setActive={setActive}>
                <Link href="/" className="text-gray-800 hover:text-primary font-medium">
                  Home
                </Link>

                <MenuItem setActive={setActive} active={active} item="Services">
                  <div className="flex flex-col space-y-4 text-gray-800 font-mono  text-sm">
                    {services.map((service) => (
                      <HoveredLink key={service.href} href={service.href}>
                        <div className="flex flex-col">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-xs text-muted-foreground">{service.description}</span>
                        </div>
                      </HoveredLink>
                    ))}
                    <div className="border-t border-border pt-3 mt-2">
                      <HoveredLink href="/services">
                        <span className="font-semibold text-primary">View All Services →</span>
                      </HoveredLink>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Company">
                  <div className="grid grid-cols-2 gap-12 text-sm text-gray-800 p-2">
                    <div className="flex flex-col space-y-2">
                      <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">About</p>
                      <HoveredLink href="/contact">
                        <div className="flex items-center text-gray-900 gap-2">
                          {/* <MapPin className="h-4 w-4 text-yellow-600" /> */}
                          <span className="text-gray-900  hover:text-yellow-800">Contact Us</span>
                        </div>
                      </HoveredLink>
                      <HoveredLink href="/blog">
                        <div className="flex items-center text-gray-800 gap-2">
                            {/* <Megaphone className="h-4 w-4 text-yellow-600" /> */}
                          <span>Blog & News</span>
                        </div>
                      </HoveredLink>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">Why Us</p>
                      <div className="flex items-center gap-2 text-gray-800">
                        {/* <Clock className="h-4 w-4 text-yellow-600" /> */}
                        <span>24/7 Availability</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-800">
                        {/* <Shield className="h-4 w-4 text-yellow-600" /> */}
                        <span>Licensed & Insured</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-800">
                        {/* <Car className="h-4 w-4 text-yellow-600" /> */}
                        <span>All Vehicle Types</span>
                      </div>
                    </div>
                  </div>
                </MenuItem>

                <Link href="/blog" className="text-gray-800 hover:text-gray-700 font-medium text-md">
                  Blog
                </Link>
                <Link href="/book" className="text-gray-800 hover:text-gray-700 font-medium text-md">
                 Free-Quotes
                </Link>

                <Link href="/" className="text-gray-800 hover:text-primary font-medium ">
                  Careers
                </Link>
              </Menu>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:1-800-GUARDIUM" className="flex items-center gap-2 text-sm font-semibold text-lime-700">
                <Phone className="h-4 w-4" />
                1-800-GUARDIUM
              </a>
              <Button asChild size="sm" className="rounded-full bg-blue-600 text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md bg-white/1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <MenuIcon className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card/75 backdrop-blur-md border-t border-border/40 shadow-lg">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-foreground hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2 pl-4 text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="block py-2 text-foreground hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block py-2 text-foreground hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-border space-y-3">
                <a href="tel:1-800-GUARDIUM" className="flex items-center gap-2 text-primary font-semibold">
                  <Phone className="h-5 w-5" />
                  1-800-GUARDIUM
                </a>
                <Button asChild className="w-full rounded-full">
                  <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
