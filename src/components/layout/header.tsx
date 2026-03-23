"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Truck,
  ChevronDown,
  Megaphone,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
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
    <>
      {/* Fixed announcement bar */}
      <div
        className="fixed top-0 inset-x-0 z-[60] bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 text-primary border-b border-border/60"
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3 text-xs">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Megaphone className="h-3.5 w-3.5 text-yellow-400 shrink-0" />
            <span className="truncate text-[11px] sm:text-xs font-medium text-white">
              Announcing our acquisition of Cliffs Towing.
            </span>
            <Link
              href="/blog/guardium-acquires-cliffs-towing"
              className="hidden sm:inline-flex items-center gap-1 font-semibold text-yellow-300 hover:text-secondary/80 transition-colors"
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
              className="text-yellow-300 hover:text-secondary transition-colors"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on Instagram"
              className="text-yellow-300 hover:text-secondary transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Guardium Towing on LinkedIn"
              className="text-yellow-300 hover:text-secondary transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-9 z-50 w-full bg-white/30 backdrop-blur-md supports-[backdrop-filter]:bg-white border-b border-border/50">
     

      {/* Main navigation */}
      <div>
        
      </div>

      {/* Mobile menu */}
      
      </header>
    </>
  );
}
