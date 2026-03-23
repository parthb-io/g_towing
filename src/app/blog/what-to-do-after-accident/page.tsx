import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Phone,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
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
    <>
      {/* Hero */}
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
            Guides
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
            What to Do After a Car Accident: A Step-by-Step Guide
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80">
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
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                A car accident can happen in an instant, but the steps you take
                afterward can have lasting consequences. This guide will help you
                navigate the immediate aftermath and the days that follow.
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 my-8 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-destructive">
                      If There Are Injuries
                    </h3>
                    <p className="text-sm mt-1">
                      Call 911 immediately. Don&apos;t move injured people unless
                      there&apos;s immediate danger (fire, traffic). Your safety and
                      the safety of others is the top priority.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Immediately After the Accident</h2>

              <h3>Step 1: Check for Injuries</h3>
              <p>
                First, check yourself for injuries. Then check on your passengers
                and, if possible, the occupants of other vehicles involved.
                Remember that adrenaline can mask pain - you might be injured even
                if you don&apos;t feel it immediately.
              </p>

              <h3>Step 2: Move to Safety</h3>
              <p>
                If the accident is minor and your vehicle is driveable, move it to
                the side of the road or a parking lot to prevent further accidents
                and traffic obstruction. Turn on your hazard lights.
              </p>

              <h3>Step 3: Call for Help</h3>
              <p>
                Call 911 if there are any injuries, significant vehicle damage, or
                if the accident is blocking traffic. Even for minor accidents, it&apos;s
                often wise to have a police report for insurance purposes.
              </p>

              <h3>Step 4: Exchange Information</h3>
              <p>Collect the following from all parties involved:</p>
              <ul>
                <li>Full name and contact information</li>
                <li>Driver&apos;s license number</li>
                <li>Insurance company and policy number</li>
                <li>License plate number</li>
                <li>Vehicle make, model, and color</li>
              </ul>
              <p>
                Also get contact information from any witnesses. Be polite but
                avoid admitting fault or making statements about who caused the
                accident.
              </p>

              <h3>Step 5: Document the Scene</h3>
              <p>Use your phone to take photos of:</p>
              <ul>
                <li>All vehicles involved (damage and positions)</li>
                <li>The accident scene from multiple angles</li>
                <li>Skid marks, debris, or road conditions</li>
                <li>Traffic signs and signals</li>
                <li>Weather conditions</li>
                <li>Any visible injuries</li>
              </ul>

              <h3>Step 6: File a Police Report</h3>
              <p>
                If police arrive at the scene, they&apos;ll create an accident report.
                Get the report number and the officer&apos;s badge number. If police
                don&apos;t come to the scene, you may need to file a report at the local
                police station, especially if there are injuries or significant
                damage.
              </p>

              <div className="bg-success/10 border border-success/20 rounded-lg p-6 my-8 not-prose">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-success">Pro Tip</h3>
                    <p className="text-sm mt-1">
                      Keep a printed checklist of these steps in your glove box.
                      In the stress of an accident, having a guide to follow can
                      help you remember important steps.
                    </p>
                  </div>
                </div>
              </div>

              <h2>After Leaving the Scene</h2>

              <h3>Step 7: Notify Your Insurance Company</h3>
              <p>
                Contact your insurance company as soon as possible, ideally the
                same day. Provide them with the details you collected and the
                police report number. Be honest and factual in your description of
                what happened.
              </p>

              <h3>Step 8: Seek Medical Attention</h3>
              <p>
                Even if you feel fine, see a doctor within 24-48 hours of the
                accident. Some injuries, like whiplash or internal injuries, may
                not be immediately apparent. Medical documentation is also
                important if you need to file an injury claim later.
              </p>

              <h3>Step 9: Arrange for Vehicle Towing/Repair</h3>
              <p>
                If your vehicle isn&apos;t driveable, you&apos;ll need to arrange towing to
                a repair shop or your home. Your insurance company may have
                preferred towing services, or you can choose your own trusted
                provider like Guardium Towing.
              </p>

              <h3>Step 10: Keep Detailed Records</h3>
              <p>Create a file for your accident and keep:</p>
              <ul>
                <li>Copies of all documents (police report, insurance claims)</li>
                <li>Medical records and receipts</li>
                <li>Repair estimates and invoices</li>
                <li>Records of any lost wages</li>
                <li>A journal of how the accident has affected your daily life</li>
              </ul>

              <h2>Important Things to Avoid</h2>
              <ul>
                <li>
                  <strong>Don&apos;t admit fault</strong> - Even saying &quot;I&apos;m sorry&quot;
                  can be used against you
                </li>
                <li>
                  <strong>Don&apos;t give a recorded statement</strong> to the other
                  party&apos;s insurance without consulting your own insurer first
                </li>
                <li>
                  <strong>Don&apos;t accept a quick settlement</strong> before you
                  know the full extent of damages and injuries
                </li>
                <li>
                  <strong>Don&apos;t post about the accident on social media</strong>
                </li>
                <li>
                  <strong>Don&apos;t neglect your vehicle</strong> - Even if it seems
                  minor, have it inspected for hidden damage
                </li>
              </ul>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 my-8 not-prose">
                <h3 className="text-secondary font-bold mb-2">
                  Need Accident Towing?
                </h3>
                <p className="mb-4">
                  Guardium Towing specializes in accident recovery. We work
                  directly with insurance companies and can transport your vehicle
                  to the repair shop of your choice.
                </p>
                <Button variant="secondary" asChild>
                  <a href="tel:1-800-GUARDIUM">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 1-800-GUARDIUM
                  </a>
                </Button>
              </div>

              <h2>Understanding Your Rights</h2>
              <p>
                In Canada, you have certain rights after an accident:
              </p>
              <ul>
                <li>
                  You have the right to choose your own repair shop, regardless of
                  what the insurance company suggests
                </li>
                <li>
                  You have the right to rental car coverage if it&apos;s part of your
                  policy
                </li>
                <li>
                  You have the right to dispute the insurance company&apos;s valuation
                  of your vehicle if it&apos;s totaled
                </li>
                <li>
                  You have the right to consult with a lawyer before settling,
                  especially for serious accidents
                </li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Being prepared and knowing what to do after an accident can make a
                stressful situation more manageable. Keep this guide bookmarked on
                your phone or printed in your car so you&apos;ll have it when you need
                it. And remember, Guardium Towing is available 24/7 to help with
                accident recovery and towing services.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Share */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Share This Article
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Checklist */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4">Quick Checklist</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Check for injuries
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Move to safety
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Call 911 if needed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Exchange information
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Document the scene
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      File police report
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Contact insurance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      See a doctor
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency Card */}
              <Card className="bg-primary text-primary-foreground border">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Need Accident Towing?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    24/7 accident recovery and towing services.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="tel:1-800-GUARDIUM">
                      <Phone className="mr-2 h-4 w-4" />
                      1-800-GUARDIUM
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/blog/winter-towing-tips"
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        10 Essential Winter Towing Tips
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        How to Choose a Reliable Towing Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        Building the Ultimate Roadside Emergency Kit
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
