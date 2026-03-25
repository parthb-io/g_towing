"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

interface Partner {
  name: string;
  logo?: string;
  href?: string;
}

interface PartnerLogoCarouselProps {
  partners: Partner[];
  title?: string;
  speed?: number;
}

function PartnerLogo({ partner }: { partner: Partner }) {
  const [imgError, setImgError] = useState(false);

  const content =
    !partner.logo || imgError ? (
      <div className="h-10 md:h-14 px-4 flex items-center justify-center">
        <span className="text-base md:text-lg font-semibold text-gray-700 whitespace-nowrap">
          {partner.name}
        </span>
      </div>
    ) : (
      <Image
        src={partner.logo}
        alt={partner.name}
        width={180}
        height={60}
        className="h-10 md:h-14 w-auto object-contain"
        onError={() => setImgError(true)}
      />
    );

  if (partner.href) {
    return (
      <Link
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function PartnerLogoCarousel({
  partners,
  title = "Our Sister Companies",
  speed = 30,
}: PartnerLogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const items = Array.from(track.children);

    // Clone items for seamless loop
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    // Get the width of the original content
    const contentWidth = track.scrollWidth / 2;

    // Create GSAP animation
    animationRef.current = gsap.to(track, {
      x: -contentWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    // Pause on hover
    const handleMouseEnter = () => animationRef.current?.pause();
    const handleMouseLeave = () => animationRef.current?.resume();

    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animationRef.current?.kill();
      containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [speed]);

  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {title && (
          <p className="text-center text-xs text-gray-500 mb-6 uppercase tracking-wider font-medium">
            {title}
          </p>
        )}
        <div ref={containerRef} className="relative overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex gap-12 py-2 w-max"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <PartnerLogo partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
