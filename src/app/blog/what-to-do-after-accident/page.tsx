import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Phone,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What to Do After a Car Accident: A Step-by-Step Guide",
  description:
    "Being in a car accident is stressful. This comprehensive guide walks you through exactly what to do in the moments and days following a collision.",
};

export default function WhatToDoAfterAccidentPage() {
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
            <span className="text-gray-900">Guides</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Guides
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What to Do After a Car Accident: A Step-by-Step Guide
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Sarah Chen
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 8, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-10">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A car accident can happen in an instant, but the steps you take
                  afterward can have lasting consequences. This guide will help you
                  navigate the immediate aftermath and the days that follow.
                </p>

                {/* Warning Box */}
                <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-red-800">If There Are Injuries</h3>
                      <p className="text-sm text-red-700 mt-1">
                        Call 911 immediately. Don&apos;t move injured people unless
                        there&apos;s immediate danger (fire, traffic). Your safety and
                        the safety of others is the top priority.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Immediately After the Accident</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Check for Injuries</h3>
                <p className="text-gray-700 mb-6">
                  First, check yourself for injuries. Then check on your passengers
                  and, if possible, the occupants of other vehicles involved.
                  Remember that adrenaline can mask pain.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Move to Safety</h3>
                <p className="text-gray-700 mb-6">
                  If the accident is minor and your vehicle is driveable, move it to
                  the side of the road. Turn on your hazard lights.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Call for Help</h3>
                <p className="text-gray-700 mb-6">
                  Call 911 if there are any injuries or significant vehicle damage.
                  Even for minor accidents, a police report helps with insurance.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Exchange Information</h3>
                <p className="text-gray-700 mb-4">Collect the following from all parties:</p>
                <ul className="space-y-2 mb-6 text-gray-700 ml-4">
                  <li>• Full name and contact information</li>
                  <li>• Driver&apos;s license number</li>
                  <li>• Insurance company and policy number</li>
                  <li>• License plate number</li>
                  <li>• Vehicle make, model, and color</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Document the Scene</h3>
                <p className="text-gray-700 mb-4">Use your phone to take photos of:</p>
                <ul className="space-y-2 mb-6 text-gray-700 ml-4">
                  <li>• All vehicles involved (damage and positions)</li>
                  <li>• The accident scene from multiple angles</li>
                  <li>• Skid marks, debris, or road conditions</li>
                  <li>• Traffic signs and signals</li>
                  <li>• Any visible injuries</li>
                </ul>

                {/* Pro Tip Box */}
                <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-green-800">Pro Tip</h3>
                      <p className="text-sm text-green-700 mt-1">
                        Keep a printed checklist of these steps in your glove box.
                        In the stress of an accident, having a guide helps.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">After Leaving the Scene</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 6: Notify Your Insurance</h3>
                <p className="text-gray-700 mb-6">
                  Contact your insurance company as soon as possible, ideally the same day.
                  Provide details and the police report number.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 7: Seek Medical Attention</h3>
                <p className="text-gray-700 mb-6">
                  Even if you feel fine, see a doctor within 24-48 hours. Some injuries
                  like whiplash may not be immediately apparent.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 8: Arrange Towing</h3>
                <p className="text-gray-700 mb-8">
                  If your vehicle isn&apos;t driveable, arrange towing to a repair shop.
                  Guardium Towing provides 24/7 accident recovery services.
                </p>

                {/* CTA Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Need Accident Towing?</h3>
                  <p className="text-gray-600 mb-4">
                    We specialize in accident recovery and provide complete documentation.
                    We can transport your vehicle to the repair shop of your choice.
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
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Emergency Card */}
              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Need Accident Towing?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  24/7 accident recovery and towing services.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:+17808097860">
                    <Phone className="mr-2 h-4 w-4" />
                    780-809-7860
                  </a>
                </Button>
              </div>

              {/* Quick Checklist */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Checklist</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Check for injuries",
                    "Move to safety",
                    "Call 911 if needed",
                    "Exchange information",
                    "Document the scene",
                    "File police report",
                    "Contact insurance",
                    "See a doctor",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blog/winter-towing-tips"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      10 Essential Winter Towing Tips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/guardium-acquires-cliffs-towing"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      Guardium Acquires Cliffs Towing
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Been in an Accident?</h2>
          <p className="text-gray-400 mb-6">We handle accident towing with professional care 24/7.</p>
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
