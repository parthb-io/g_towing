"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MessageCircle,
  X,
  Truck,
  ChevronUp,
  Zap,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating actions after scrolling 300px
      setIsVisible(window.scrollY > 300);
      // Show back to top after scrolling 800px
      setShowBackToTop(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Buttons - Right Side */}
      <div className={cn(
        "fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}>
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className={cn(
            "w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-white shadow-lg flex items-center justify-center transition-all duration-300",
            showBackToTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          )}
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>

        {/* Expandable Actions */}
        <div className={cn(
          "flex flex-col gap-2 transition-all duration-300",
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}>
          {/* Chat/Message Button */}
          <a
            href="sms:1-800-GUARDIUM"
            className="w-12 h-12 rounded-full bg-success text-white shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
            aria-label="Send text message"
          >
            <MessageCircle className="h-5 w-5" />
          </a>

          {/* Book Online Button */}
          <Link
            href="/book"
            className="w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
            aria-label="Book online"
          >
            <Truck className="h-5 w-5" />
          </Link>
        </div>

        {/* Main Toggle / Call Button */}
        <div className="relative">
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300",
              isExpanded
                ? "bg-muted text-foreground rotate-45"
                : "bg-secondary text-white animate-glow-pulse"
            )}
            aria-label={isExpanded ? "Close menu" : "Open contact options"}
          >
            {isExpanded ? (
              <X className="h-6 w-6" />
            ) : (
              <Phone className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Floating CTA Bar - Bottom (Mobile Only) */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="bg-gradient-to-r from-primary via-primary to-primary/95 text-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/70 truncate">24/7 Available</p>
                <p className="text-sm font-bold truncate">Get Help Now</p>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary h-10 px-3"
                asChild
              >
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="h-10 btn-shine"
                asChild
              >
                <Link href="/book">
                  <Zap className="h-4 w-4 mr-1" />
                  Book
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}
