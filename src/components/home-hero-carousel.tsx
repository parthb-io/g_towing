"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

interface HomeHeroCarouselProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

export function HomeHeroCarousel({ slides, intervalMs = 5500 }: HomeHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;
  const current = slides[activeIndex];

  return (
    <section className="relative h-screen min-h-[100svh] overflow-hidden text-white">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-700",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/70" />
     

      <div className="container  mx-auto px-4 relative z-10 h-full">
        <div className="flex h-full items-center justify-center  py-18 sm:py-20">
          <div className="max-w-5xl items-center justify-center text-center">
            <div
              key={current.image}
              className="animate-fade-in"
            >
              

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold mb-2 leading-tight tracking-tight text-white">
                {current.title} <span className="text-yellow-300 ">{current.highlight}</span>
              </h1>

              <p className="text-base sm:text-lg text-white mb-7 sm:mb-8 max-w-4xl leading-tight">
                {current.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:gap-4">
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto rounded-full">
                  <Link href="/book">
                    Book Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/25 bg-white text-[#ce0000] hover:bg-white/10 rounded-full"
                  asChild
                >
                  <a href="tel:1-800-GUARDIUM">
                    <Phone className="mr-2 h-5 w-5" />
                    1-800-GUARDIUM
                  </a>
                </Button>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full border border-white/60 transition-all",
                index === activeIndex ? "w-6 bg-secondary border-secondary" : "bg-white/30 hover:bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
