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
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              <Icon className="h-3 w-3 mr-1" />
              {subtitle}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-white/80 mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book">
                  Book This Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
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
              <Badge variant="outline" className="mb-4">
                Service Details
              </Badge>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Benefits Card */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Pricing Card */}
              {pricing && (
                <Card className="bg-primary text-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Pricing</h3>
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {pricing.starting}
                    </div>
                    <p className="text-white/80 text-sm mb-4">{pricing.note}</p>
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
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="font-semibold">24/7 Available</div>
              <div className="text-sm text-muted-foreground">
                Round the clock service
              </div>
            </div>
            <div>
              <Shield className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="font-semibold">Fully Insured</div>
              <div className="text-sm text-muted-foreground">
                Complete protection
              </div>
            </div>
            <div>
              <Star className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="font-semibold">4.9/5 Rating</div>
              <div className="text-sm text-muted-foreground">
                Customer satisfaction
              </div>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="font-semibold">Licensed</div>
              <div className="text-sm text-muted-foreground">
                Certified professionals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need {title}?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Don&apos;t wait. Our professional team is ready to help you right now.
            Book online or call us for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/book">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
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
