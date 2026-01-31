import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Clock,
  Shield,
  CheckCircle2,
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
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-10" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-tertiary" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Icon className="h-4 w-4 text-secondary" />
              <span className="text-white/90 text-sm font-medium">{subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 h-14 px-8" asChild>
                <Link href="/book">
                  Book This Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary h-14 px-8"
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Service Details</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">What We Offer</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`w-12 h-12 ${index % 3 === 0 ? 'bg-secondary' : index % 3 === 1 ? 'bg-accent' : 'bg-tertiary'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Benefits Card */}
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-6">Why Choose Us</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
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
                    <h3 className="text-lg font-semibold mb-2">Pricing</h3>
                    <div className="text-4xl font-bold text-secondary mb-2">
                      {pricing.starting}
                    </div>
                    <p className="text-white/60 text-sm mb-6">{pricing.note}</p>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <div className="font-semibold">24/7 Available</div>
              <div className="text-sm text-muted-foreground">Round the clock</div>
            </div>
            <div>
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div className="font-semibold">Fully Insured</div>
              <div className="text-sm text-muted-foreground">Complete protection</div>
            </div>
            <div>
              <div className="w-14 h-14 bg-tertiary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-7 w-7 text-white" />
              </div>
              <div className="font-semibold">4.9/5 Rating</div>
              <div className="text-sm text-muted-foreground">Customer satisfaction</div>
            </div>
            <div>
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-7 w-7 text-white" />
              </div>
              <div className="font-semibold">Licensed</div>
              <div className="text-sm text-muted-foreground">Certified pros</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-tertiary" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need {title}?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
            Our professional team is ready to help you. Book online or call for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 h-14 px-10" asChild>
              <Link href="/book">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-primary h-14 px-10"
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
