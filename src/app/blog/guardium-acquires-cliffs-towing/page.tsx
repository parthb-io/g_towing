import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Building2, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guardium Towing Acquires Cliffs Towing",
  description:
    "Guardium Towing announces the acquisition of Cliffs Towing to expand heavy-duty and specialized towing capacity across Western Canada.",
};

export default function GuardiumAcquiresCliffsTowingPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Company News</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Company News
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Guardium Towing Acquires Cliffs Towing
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-500">
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
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-10">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are excited to announce that Guardium Towing has officially acquired Cliffs Towing.
                This move expands our heavy-duty towing and specialized recovery capabilities while keeping
                the same service reliability our customers expect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Customers</h2>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Faster response times for high-demand routes and commercial corridors
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Expanded heavy-duty and rotator availability
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  More drivers, more equipment, and broader dispatch coverage
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Continued 24/7 emergency support with unified service standards
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Operational Integration</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Over the coming weeks, dispatch operations, fleet deployment, and customer support channels
                will be aligned under one operating framework. Existing Cliffs Towing customers will continue
                to receive uninterrupted service during this transition.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The acquisition supports our long-term mission: provide dependable towing and recovery services
                with safety, speed, and professionalism at every callout. We are proud to welcome the Cliffs
                Towing team and look forward to serving even more communities across Canada.
              </p>

              {/* CTA Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-gray-900 mb-2">Need immediate help?</h3>
                <p className="text-gray-600 mb-4">
                  Our emergency dispatch is live 24/7 and ready to assist.
                </p>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:+17808097860">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 780-809-7860
                  </a>
                </Button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="flex justify-between items-center mt-8">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Towing Now?</h2>
          <p className="text-gray-400 mb-6">Our expanded team is ready to help 24/7.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-10" asChild>
            <a href="tel:+17808097860">
              <Phone className="mr-2 h-5 w-5" />
              780-809-7860
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
