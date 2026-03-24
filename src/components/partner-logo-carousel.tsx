"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Partner {
  name: string;
  logo?: string;
  href?: string;
}

interface PartnerLogoCarouselProps {
  partners: Partner[];
  title?: string;
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
}: PartnerLogoCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    const scrollerContent = Array.from(scrollerInnerRef.current.children);

    // Duplicate items for infinite scroll effect
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInnerRef.current?.appendChild(duplicatedItem);
    });

    scrollerRef.current.setAttribute("data-animated", "true");
  }, []);

  return (
    <section className="py-10 bg-white border-b overflow-hidden">
      <div className="container mx-auto px-4">
        {title && (
          <p className="text-center text-xs text-gray-500 mb-6 uppercase tracking-wider">
            {title}
          </p>
        )}
        <div
          ref={scrollerRef}
          className="scroller max-w-full"
          data-speed="slow"
        >
          <div
            ref={scrollerInnerRef}
            className="scroller-inner flex gap-12 py-2 w-max"
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
