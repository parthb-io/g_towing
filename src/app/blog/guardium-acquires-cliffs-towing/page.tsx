import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Guardium Towing Acquires Cliffs Towing",
  description:
    "Guardium Towing announces the acquisition of Cliffs Towing to expand heavy-duty and specialized towing capacity across Western Canada.",
};

export default function GuardiumAcquiresCliffsTowingPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <Badge variant="secondary" className="mb-4">
            Company News
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
            Guardium Towing Acquires Cliffs Towing
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Guardium Editorial Team
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              March 23, 2026
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl prose prose-lg max-w-none text-foreground">
            <p className="lead text-xl text-muted-foreground">
              We are excited to announce that Guardium Towing has officially acquired Cliffs Towing.
              This move expands our heavy-duty towing and specialized recovery capabilities while keeping
              the same service reliability our customers expect.
            </p>

            <h2>What This Means for Customers</h2>
            <ul>
              <li>Faster response times for high-demand routes and commercial corridors</li>
              <li>Expanded heavy-duty and rotator availability</li>
              <li>More drivers, more equipment, and broader dispatch coverage</li>
              <li>Continued 24/7 emergency support with unified service standards</li>
            </ul>

            <h2>Operational Integration</h2>
            <p>
              Over the coming weeks, dispatch operations, fleet deployment, and customer support channels
              will be aligned under one operating framework. Existing Cliffs Towing customers will continue
              to receive uninterrupted service during this transition.
            </p>

            <h2>Our Commitment</h2>
            <p>
              The acquisition supports our long-term mission: provide dependable towing and recovery services
              with safety, speed, and professionalism at every callout. We are proud to welcome the Cliffs
              Towing team and look forward to serving even more communities across Canada.
            </p>

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 my-8">
              <h3 className="text-secondary font-bold mb-2">Need immediate help?</h3>
              <p className="mb-4">
                Our emergency dispatch is live 24/7 and ready to assist.
              </p>
              <Button variant="secondary" asChild>
                <a href="tel:1-800-GUARDIUM">
                  <Phone className="mr-2 h-4 w-4" />
                  Call 1-800-GUARDIUM
                </a>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
