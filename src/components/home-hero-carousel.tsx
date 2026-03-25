"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative lg:h-[775px] h-[650px] md:min-h-[600px] lg:min-h-[500px] overflow-hidden text-white">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <div className=" absolute z-0  inset-0 bg-[#ce0000]/90" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full ">
        <div className="flex h-full items-center justify-center py-20 sm:py-20">
          <div className="max-w-7xl text-start items-start lg:items-center lg:justify-center lg:text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl sm:text-4xl  shadow-xs md:text-5xl lg:text-6xl font-bold mb-2 leading-tight tracking-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {current.title}{" "}
                  <span className="text-white">{current.highlight}</span>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-lg font-mono lg:text-center text-start w-full text-white mb-6 sm:mb-7 max-w-5xl tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {current.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Button size="lg" variant="outline" asChild className="w-full text-primary hover:bg-blue-700 hover:text-white font-mono sm:w-auto rounded-full">
                    <Link href="/book">
                      Book Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full font-mono sm:w-auto border-blue-500/30 hover:border-white bg-white text-[#ce0000] hover:bg-blue-800 hover:text-white rounded-full"
                    asChild
                  >
                    <a href="tel:+17808097860">
                      <Phone className="mr-2 h-5 w-5" /> 
                      +1 780-809-7860
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1 rounded-full border border-white/can 80 transition-all duration-300",
                index === activeIndex
                  ? "w-10 bg-white border-white/50"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
