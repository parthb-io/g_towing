"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  Tag,
  Newspaper,
  Twitter,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { feedItems, type FeedItemType } from "@/lib/feed-items";
import { motion, AnimatePresence } from "framer-motion";

const FEED_ROTATE_INTERVAL_MS = 5000;

function getFeedIcon(type: FeedItemType) {
  switch (type) {
    case "announcement":
      return Megaphone;
    case "blog":
      return Newspaper;
    case "deal":
      return Tag;
    default:
      return Megaphone;
  }
}

function AnnouncementFeed() {
  const [index, setIndex] = useState(0);
  const item = feedItems[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % feedItems.length);
    }, FEED_ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const Icon = getFeedIcon(item.type);
  const isExternal = item.href.startsWith("tel:") || item.href.startsWith("http");
  const ctaLabel =
    item.type === "announcement"
      ? "Read announcement"
      : item.type === "blog"
        ? "Read article"
        : "View offer";

  const linkClass =
    "hidden sm:inline-flex drop-shadow-md items-center gap-1 font-medium text-blue-100 hover:text-blue-300 transition-colors";

  return (
    <div className="flex min-w-0 items-center lg:gap-2 gap-3">
      <Icon className="h-3.5 w-3.5 text-blue-100 shrink-0" />
      <AnimatePresence mode="wait">
        <motion.span
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="truncate text-[12px] sm:text-sm  drop-shadow-md font-medium text-blue-100"
        >
          {item.label}
        </motion.span>
      </AnimatePresence>
      {isExternal ? (
        <a href={item.href} className={linkClass}>
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <Link href={item.href} className={linkClass}>
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}

const services = [
  { name: "Light & Medium Duty Towing", href: "/services/light-medium-duty-towing", description: "Cars, SUVs, pickups" },
  { name: "Heavy Duty Towing", href: "/services/heavy-duty-towing", description: "Commercial & industrial" },
  { name: "Flatbed Towing", href: "/services/flatbed-towing", description: "Safe flatbed transport" },
  { name: "Accident Towing", href: "/services/accident-towing", description: "Collision scene recovery" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance", description: "Jump starts, tire changes" },
  { name: "Fuel Delivery", href: "/services/fuel-delivery", description: "Emergency fuel service" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed announcement bar */}
      <div className="fixed top-0 inset-x-0 z-60 bg-linear-to-b from-blue-500 to-blue-600 backdrop-blur-2xl shadow-xs border-b border-blue-700 px-2 ">
        <div className="container mx-auto px-2 py-2 flex items-center justify-between gap-3 font-mono text-xs">
          <AnnouncementFeed />

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://www.facebook.com/guardiumtowing"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on Facebook"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Facebook className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
            <a
              href="https://www.instagram.com/guardiumtowing"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on Instagram"
              className="text-white  hover:text-blue-300 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
            <a
              href="https://x.com/guardiumtowing"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on LinkedIn"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Twitter className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
            <a
              href="youtube.com/@GuardiumGroup?si=CKynahCoTRVgfmef"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on LinkedIn"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Youtube className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
           
            
          </div>
        </div>
      </div>

      <motion.header
        className="fixed top-8 inset-x-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <motion.div
            className={cn(
              "flex items-center justify-between border bg-white/95 backdrop-blur-xl rounded-full py-1.5 px-4 transition-all duration-300",
              scrolled ? "border-gray-200 shadow-lg" : "border-gray-100 shadow-sm"
            )}
          >
            {/* Logo */}
            <Link href="/" className="z-50">
              <Image
                src="/images/Towing logo.png"
                alt="Guardium Towing"
                width={100}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Aceternity Navbar */}
            <div className="hidden lg:block bg-none">
              <Menu setActive={setActive}>
                <Link href="/about" className="text-gray-900 hover:text-primary font-medium transition-colors">
                  About-Us
                </Link>

                <MenuItem setActive={setActive} active={active} item="Services">
                  <div className="flex flex-col space-y-4 text-gray-900 font-mono text-sm">
                    {services.map((service) => (
                      <HoveredLink key={service.href} href={service.href}>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800 hover:text-[#ce0000]">{service.name}</span>
                          <span className="text-xs text-gray-500">{service.description}</span>
                        </div>
                      </HoveredLink>
                    ))}
                    <div className="border-t border-gray-200 pt-3 mt-2">
                      <HoveredLink href="/services">
                        <span className="font-semibold text-primary">View All Services →</span>
                      </HoveredLink>
                    </div>
                  </div>
                </MenuItem>

                

                <Link href="/locations" className="text-gray-900 hover:text-primary font-medium transition-colors">
                  Locations
                </Link>
                
                <Link href="/book" className="text-gray-900 hover:text-primary font-medium transition-colors">
                  Free-Quotes
                </Link>

                <Link href="/blog" className="text-gray-900 hover:text-primary font-medium transition-colors">
                  Blog
                </Link>

                <MenuItem setActive={setActive} active={active} item="Resources">
                  <div className="grid grid-cols-2 gap-12 text-sm text-gray-800 p-2">
                    <div className="flex flex-col space-y-2">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">About</p>
                      <HoveredLink href="https://cliffstowing.ca">
                        <div className="flex items-center text-gray-700 gap-2">
                          <span className="hover:text-primary transition-colors">Cliffs Towing</span>
                        </div>
                      </HoveredLink>
                      
                      <HoveredLink href="/careers">
                        <div className="flex items-center text-gray-700 gap-2">
                          <span>Careers</span>
                        </div>
                      </HoveredLink>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Service Areas</p>
                      <HoveredLink href="/locations">
                        <div className="flex items-center text-gray-700 gap-2">
                          <span>All Locations</span>
                        </div>
                      </HoveredLink>
                      <HoveredLink href="/locations/edmonton">
                        <div className="flex items-center text-gray-700 gap-2">
                          <span>Edmonton</span>
                        </div>
                      </HoveredLink>
                      <HoveredLink href="/locations/sherwood-park">
                        <div className="flex items-center text-gray-700 gap-2">
                          <span>Sherwood Park</span>
                        </div>
                      </HoveredLink>
                    </div>
                  </div>
                </MenuItem>


              </Menu>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+17808097860" className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                <Phone className="h-4 w-4" />
                +1 780-809-7860
              </a>
              <Button asChild size="sm" className="rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                <Link
                  href="/"
                  className="block py-2 text-gray-800 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="block py-2 text-gray-800 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="block py-2 text-gray-800 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a href="tel:+17808097860" className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Phone className="h-5 w-5" />
                    +1 780-809-7860
                  </a>
                  <Button asChild className="w-full rounded-full">
                    <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
