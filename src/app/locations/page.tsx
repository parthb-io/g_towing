import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Towing Service Locations | Edmonton & Area | Guardium Towing",
  description:
    "Guardium Towing serves Edmonton, Sherwood Park, St. Albert, Spruce Grove, Leduc, Beaumont, Devon, and Morinville. Professional towing and roadside assistance available 24/7.",
};

const locations = [
  {
    name: "Edmonton",
    href: "/locations/edmonton",
    description:
      "Edmonton's trusted towing company. We serve all neighbourhoods and surrounding highways with 24/7 emergency towing and roadside assistance.",
    highlights: ["All Edmonton neighbourhoods", "All major highways", "Fast 20–30 min response"],
  },
  {
    name: "Sherwood Park",
    href: "/locations/sherwood-park",
    description:
      "Fast towing and roadside assistance throughout Sherwood Park and the Strathcona County area, available around the clock.",
    highlights: ["All Sherwood Park areas", "Strathcona County", "24/7 availability"],
  },
  {
    name: "Spruce Grove",
    href: "/locations/spruce-grove",
    description:
      "Reliable towing and emergency roadside services in Spruce Grove and the Parkland County area, 24 hours a day.",
    highlights: ["Spruce Grove coverage", "Parkland County", "Fast dispatch"],
  },
  {
    name: "Beaumont",
    href: "/locations/beaumont",
    description:
      "Professional towing and roadside assistance in Beaumont, AB. Quick response times from our nearby Edmonton fleet.",
    highlights: ["Beaumont & area", "Quick response", "All services available"],
  },
  {
    name: "Devon",
    href: "/locations/devon",
    description:
      "Dependable towing services in Devon, AB. We cover the town and surrounding rural areas with professional 24/7 service.",
    highlights: ["Devon town coverage", "Rural area service", "24/7 dispatch"],
  },
  {
    name: "Morinville",
    href: "/locations/morinville",
    description:
      "Trusted towing and roadside assistance in Morinville, AB. Our team reaches Morinville drivers quickly from the Edmonton area.",
    highlights: ["Morinville coverage", "Sturgeon County", "24/7 availability"],
  },
  {
    name: "Leduc",
    href: "/locations/leduc",
    description:
      "Complete towing and roadside services in Leduc, AB and the Leduc County area. Fast response near the Edmonton International Airport corridor.",
    highlights: ["Leduc city & county", "Airport corridor", "All services"],
  },
  {
    name: "St. Albert",
    href: "/locations/st-albert",
    description:
      "Professional towing and emergency roadside assistance throughout St. Albert. Serving all neighbourhoods with fast, reliable service.",
    highlights: ["All St. Albert neighbourhoods", "Fast response times", "24/7 service"],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Badge variant="accent" className="mb-4">
            Service Areas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Towing Services Across Edmonton &amp; Area
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mb-8">
            Guardium Towing serves Edmonton and 7 surrounding communities. Wherever
            you are in the greater Edmonton region, we&apos;re never far away.
          </p>
          <div className="flex flex-wrap gap-4">
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
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Our Locations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              8 Communities Served
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From Edmonton&apos;s core to surrounding towns and counties — our fleet
              is positioned to reach you fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Card
                key={location.name}
                className="group hover:border-secondary/30 transition-all duration-200"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-secondary/10 rounded-md flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <MapPin className="h-5 w-5 text-secondary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                      {location.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {location.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {location.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary">
                    <Link href={location.href}>
                      View {location.name} Page
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">24/7 Service</div>
              <div className="text-xs text-muted-foreground">Always available</div>
            </div>
            <div>
              <MapPin className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">8 Areas</div>
              <div className="text-xs text-muted-foreground">Greater Edmonton</div>
            </div>
            <div>
              <Phone className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">Fast Response</div>
              <div className="text-xs text-muted-foreground">20–30 min avg</div>
            </div>
            <div>
              <CheckCircle className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">Fully Insured</div>
              <div className="text-xs text-muted-foreground">Licensed operators</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Need Towing in the Edmonton Area?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Call us for immediate 24/7 service or get a free quote online. We cover
            all communities in the greater Edmonton region.
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
