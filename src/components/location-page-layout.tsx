import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";

const allServices = [
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

interface LocationPageLayoutProps {
  city: string;
  province?: string;
  description: string;
  intro: string;
  highlights: string[];
  testimonial?: {
    text: string;
    name: string;
    location: string;
  };
}

export function LocationPageLayout({
  city,
  province = "AB",
  description,
  intro,
  highlights,
  testimonial,
}: LocationPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              <MapPin className="h-3 w-3 mr-1" />
              {city}, {province}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Towing Services in {city}
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
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
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Clock className="h-5 w-5 mx-auto mb-1.5 text-secondary" />
              <div className="font-semibold text-sm">24/7 Service</div>
              <div className="text-xs text-muted-foreground">Always available</div>
            </div>
            <div>
              <MapPin className="h-5 w-5 mx-auto mb-1.5 text-secondary" />
              <div className="font-semibold text-sm">Local Coverage</div>
              <div className="text-xs text-muted-foreground">{city} &amp; area</div>
            </div>
            <div>
              <Shield className="h-5 w-5 mx-auto mb-1.5 text-secondary" />
              <div className="font-semibold text-sm">Fully Insured</div>
              <div className="text-xs text-muted-foreground">Licensed operators</div>
            </div>
            <div>
              <Star className="h-5 w-5 mx-auto mb-1.5 text-secondary" />
              <div className="font-semibold text-sm">4.9/5 Rating</div>
              <div className="text-xs text-muted-foreground">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="accent" className="mb-4">About Our {city} Service</Badge>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">
                {city}&apos;s Trusted Towing Team
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{intro}</p>
              <div className="space-y-3">
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* CTA card */}
              <div className="bg-gradient-primary rounded-xl p-7 text-white">
                <h3 className="text-lg font-bold mb-3">Need a Tow in {city}?</h3>
                <p className="text-white/60 text-sm mb-5">
                  Our team is standing by 24/7. Call for immediate assistance
                  or get a free quote online.
                </p>
                <div className="space-y-2.5">
                  <Button size="lg" variant="secondary" className="w-full" asChild>
                    <a href="tel:1-800-GUARDIUM">
                      <Phone className="mr-2 h-4 w-4" />
                      Call 1-800-GUARDIUM
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>

              {/* Testimonial */}
              {testimonial && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-semibold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="accent" className="mb-4">Services in {city}</Badge>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              All Services Available in {city}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our full range of towing and roadside assistance services are
              available throughout {city} and surrounding areas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {allServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 p-3.5 bg-background border border-border rounded-lg text-sm font-medium hover:border-secondary hover:text-secondary transition-colors"
              >
                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                {service.name}
                <ArrowRight className="h-3.5 w-3.5 ml-auto text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-4">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              { name: "Edmonton", href: "/locations/edmonton" },
              { name: "Sherwood Park", href: "/locations/sherwood-park" },
              { name: "St. Albert", href: "/locations/st-albert" },
              { name: "Spruce Grove", href: "/locations/spruce-grove" },
              { name: "Leduc", href: "/locations/leduc" },
              { name: "Beaumont", href: "/locations/beaumont" },
              { name: "Devon", href: "/locations/devon" },
              { name: "Morinville", href: "/locations/morinville" },
            ]
              .filter((l) => l.name !== city)
              .map((loc) => (
                <Link
                  key={loc.name}
                  href={loc.href}
                  className="px-4 py-1.5 bg-muted border border-border rounded-full text-sm hover:border-secondary hover:text-secondary transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Trusted Towing in {city} — Available 24/7
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Call now for immediate assistance or get a free quote. We&apos;re
            never far away from {city} drivers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="xl" variant="secondary" asChild>
              <a href="tel:1-800-GUARDIUM">
                <Phone className="mr-2 h-5 w-5" />
                Call 1-800-GUARDIUM
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
