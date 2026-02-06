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
  Star,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  benefits: string[];
  pricing?: {
    starting: string;
    note: string;
  };
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              <Icon className="h-3 w-3 mr-1" />
              {subtitle}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h1>
            <p className="text-lg text-white/70 mb-8">{description}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book">
                  Book This Service
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
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="accent" className="mb-4">
                Service Details
              </Badge>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">What We Offer</h2>
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-9 h-9 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Benefits Card */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Pricing Card */}
              {pricing && (
                <Card className="bg-primary text-white border-0">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">Pricing</h3>
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {pricing.starting}
                    </div>
                    <p className="text-white/60 text-sm mb-4">{pricing.note}</p>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/book">Get a Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-10 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">24/7 Available</div>
              <div className="text-xs text-muted-foreground">
                Round the clock service
              </div>
            </div>
            <div>
              <Shield className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">Fully Insured</div>
              <div className="text-xs text-muted-foreground">
                Complete protection
              </div>
            </div>
            <div>
              <Star className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">4.9/5 Rating</div>
              <div className="text-xs text-muted-foreground">
                Customer satisfaction
              </div>
            </div>
            <div>
              <CheckCircle className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">Licensed</div>
              <div className="text-xs text-muted-foreground">
                Certified professionals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Need {title}?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Don&apos;t wait. Our professional team is ready to help you right now.
            Book online or call us for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/book">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
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
    </>
  );
}
