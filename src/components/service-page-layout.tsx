import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Users,
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
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-airbnb-sm mb-6">
              <Icon className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">{subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="rounded-full" asChild>
                <Link href="/book">
                  Book This Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                30-min response
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary" />
                Fully insured
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                4.9/5 rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Features */}
            <div className="lg:col-span-3">
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                What's Included
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                Service details
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Pricing Card */}
              {pricing && (
                <div className="bg-white border border-border rounded-2xl p-6 shadow-airbnb sticky top-24">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {pricing.starting}
                    </div>
                    <p className="text-sm text-muted-foreground">{pricing.note}</p>
                  </div>

                  <Button size="lg" variant="secondary" className="w-full rounded-full mb-4" asChild>
                    <Link href="/book">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" className="w-full rounded-full" asChild>
                    <a href="tel:1-800-GUARDIUM">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Quote
                    </a>
                  </Button>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Why choose us</h4>
                    <ul className="space-y-3">
                      {benefits.slice(0, 4).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <Star className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Emergency Card */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Need help now?</p>
                    <p className="font-bold text-foreground">1-800-GUARDIUM</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our dispatch team is available 24/7 for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, title: "24/7 Available", desc: "Round the clock service" },
              { icon: Shield, title: "Fully Insured", desc: "Complete protection" },
              { icon: Star, title: "4.9/5 Rating", desc: "Customer satisfaction" },
              { icon: CheckCircle, title: "Licensed", desc: "Certified professionals" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 shadow-airbnb-sm">
                <item.icon className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <div className="font-semibold text-foreground text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Need {title.toLowerCase()}?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Don't wait. Our professional team is ready to help you right now.
              Book online or call us for immediate assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full" asChild>
                <Link href="/book">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  1-800-GUARDIUM
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
