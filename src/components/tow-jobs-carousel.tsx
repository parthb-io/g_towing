"use client";

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type TowJob = {
  title: string;
  location: string;
  eta: string;
  progress: number; // 0-100
  imageAlt: string;
  imageSvg: string;
};

function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function TowJobsCarouselCardImage({
  svg,
  alt,
}: {
  svg: string;
  alt: string;
}) {
  return (
    <img
      src={svgToDataUri(svg)}
      alt={alt}
      className="h-full w-full object-cover"
      draggable={false}
    />
  );
}

const towJobImage1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1220"/>
      <stop offset="0.55" stop-color="#1f2a44"/>
      <stop offset="1" stop-color="#7c2d12" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0f172a"/>
      <stop offset="1" stop-color="#020617"/>
    </linearGradient>
  </defs>

  <rect width="960" height="720" fill="url(#bg)"/>

  <path d="M120 690 L320 420 Q360 360 420 360 L720 360 Q760 360 790 400 L900 690 Z" fill="url(#road)" opacity="0.95"/>
  <path d="M460 610 Q530 520 620 520" stroke="#f59e0b" stroke-width="10" stroke-linecap="round" opacity="0.85"/>
  <path d="M500 650 Q570 560 660 560" stroke="#ef4444" stroke-width="6" stroke-linecap="round" opacity="0.65"/>

  <!-- Truck silhouette -->
  <g transform="translate(250,260)">
    <rect x="140" y="170" width="330" height="120" rx="18" fill="#0b1220" opacity="0.85"/>
    <rect x="180" y="130" width="240" height="95" rx="14" fill="#0f172a" opacity="0.9"/>
    <rect x="410" y="110" width="75" height="115" rx="12" fill="#1f2937" opacity="0.9"/>
    <rect x="130" y="210" width="360" height="85" rx="16" fill="#111827" opacity="0.95"/>
    <circle cx="230" cy="300" r="40" fill="#020617"/>
    <circle cx="430" cy="300" r="40" fill="#020617"/>
    <circle cx="230" cy="300" r="18" fill="#334155"/>
    <circle cx="430" cy="300" r="18" fill="#334155"/>

    <!-- Boom arm -->
    <path d="M310 130 L395 220" stroke="#f97316" stroke-width="18" stroke-linecap="round" opacity="0.9"/>
    <path d="M390 220 L475 300" stroke="#fb923c" stroke-width="12" stroke-linecap="round" opacity="0.7"/>
    <circle cx="310" cy="130" r="16" fill="#fb923c" opacity="0.9"/>
  </g>

  <!-- Soft vignette -->
  <rect width="960" height="720" fill="black" opacity="0.08"/>
</svg>
`;

const towJobImage2 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#071a2b"/>
      <stop offset="0.5" stop-color="#123a5a"/>
      <stop offset="1" stop-color="#7c2d12" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0b1220"/>
      <stop offset="1" stop-color="#030712"/>
    </linearGradient>
  </defs>

  <rect width="960" height="720" fill="url(#bg)"/>

  <path d="M40 700 L340 410 Q380 370 440 370 L690 370 Q770 370 920 540 L920 700 Z" fill="url(#road)" opacity="0.95"/>
  <path d="M160 650 L300 520" stroke="#60a5fa" stroke-width="12" stroke-linecap="round" opacity="0.8"/>
  <path d="M220 670 L360 540" stroke="#34d399" stroke-width="8" stroke-linecap="round" opacity="0.65"/>

  <!-- Truck silhouette -->
  <g transform="translate(220,240)">
    <rect x="160" y="185" width="310" height="125" rx="20" fill="#0b1220" opacity="0.86"/>
    <rect x="200" y="140" width="230" height="90" rx="16" fill="#0f172a" opacity="0.92"/>
    <rect x="420" y="120" width="80" height="140" rx="16" fill="#1f2937" opacity="0.9"/>
    <rect x="150" y="225" width="350" height="80" rx="18" fill="#111827" opacity="0.97"/>
    <circle cx="250" cy="320" r="42" fill="#020617"/>
    <circle cx="450" cy="320" r="42" fill="#020617"/>
    <circle cx="250" cy="320" r="19" fill="#334155"/>
    <circle cx="450" cy="320" r="19" fill="#334155"/>

    <!-- Tow line -->
    <path d="M390 150 C440 220 430 270 370 300" stroke="#fbbf24" stroke-width="10" fill="none" opacity="0.85"/>
    <circle cx="370" cy="300" r="14" fill="#fbbf24" opacity="0.85"/>

    <!-- Boom arm -->
    <path d="M250 150 L335 235" stroke="#f97316" stroke-width="16" stroke-linecap="round" opacity="0.9"/>
    <circle cx="250" cy="150" r="16" fill="#fb923c" opacity="0.9"/>
  </g>

  <rect width="960" height="720" fill="black" opacity="0.07"/>
</svg>
`;

const slides: TowJob[] = [
  {
    title: "Tow Job #1: Highway Recovery",
    location: "GTA • Eastbound",
    eta: "Arriving in 28 minutes",
    progress: 62,
    imageAlt: "Illustration for tow job in progress",
    imageSvg: towJobImage1,
  },
  {
    title: "Tow Job #2: Motorcycle Assist",
    location: "Calgary • NW Streets",
    eta: "Arriving in 18 minutes",
    progress: 41,
    imageAlt: "Illustration for tow job in progress",
    imageSvg: towJobImage2,
  },
];

export function TowJobsCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeSlide = slides[activeIndex] ?? slides[0];

  const goTo = React.useCallback((next: number) => {
    const clamped = ((next % slides.length) + slides.length) % slides.length;
    setActiveIndex(clamped);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="flex items-center justify-between gap-3 mb-3">
        <Badge variant="accent" className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" />
          Tow jobs in progress
        </Badge>

        <div className="hidden sm:flex items-center gap-2 text-white/70 text-xs">
          <MapPin className="h-3.5 w-3.5 text-secondary" />
          <span>{activeSlide.location}</span>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-secondary/5">
        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((job) => (
              <div key={job.title} className="min-w-full">
                <div className="relative h-[340px] md:h-[380px]">
                  <TowJobsCarouselCardImage svg={job.imageSvg} alt={job.imageAlt} />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm text-white/80">
                          <span className="inline-flex items-center gap-2">
                            <Wrench className="h-4 w-4 text-secondary" />
                            In progress
                          </span>
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-white truncate">
                          {job.title}
                        </h3>
                      </div>

                      <div className="hidden md:block shrink-0">
                        <Badge
                          variant="secondary"
                          className="bg-secondary/90 text-white"
                        >
                          {job.eta}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between gap-3 text-xs text-white/70">
                        <span className="truncate">{job.location}</span>
                        <span>{job.progress}% complete</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-secondary rounded-full"
                          style={{ width: `${job.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          aria-label="Previous tow job"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/45 border border-white/10 p-2 text-white/90 transition-colors"
          onClick={() => goTo(activeIndex - 1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next tow job"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/45 border border-white/10 p-2 text-white/90 transition-colors"
          onClick={() => goTo(activeIndex + 1)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 px-4">
          {slides.map((job, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={job.title}
                type="button"
                aria-label={`Go to ${job.title}`}
                onClick={() => goTo(idx)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  isActive
                    ? "bg-secondary"
                    : "bg-white/30 hover:bg-white/50",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile ETA shortcut (keeps the hero clean) */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="text-xs text-white/70">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-secondary" />
            {activeSlide.eta}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          {activeIndex > 0 ? (
            <Button
              variant="outline"
              className="border-white/20 text-white bg-transparent hover:bg-white/10"
              size="sm"
              onClick={() => goTo(activeIndex - 1)}
            >
              Prev
            </Button>
          ) : (
            <span className="text-xs text-white/30">Prev</span>
          )}

          <Button
            variant="secondary"
            className="bg-secondary/90 text-white hover:bg-secondary"
            size="sm"
            onClick={() => goTo(activeIndex + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

