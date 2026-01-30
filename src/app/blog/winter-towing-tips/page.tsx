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
} from "lucide-react";

export const metadata: Metadata = {
  title: "10 Essential Winter Towing Tips Every Canadian Driver Should Know",
  description:
    "Winter driving in Canada presents unique challenges. Learn how to prepare your vehicle and what to do if you get stranded in cold weather.",
};

export default function WinterTowingTipsPage() {
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
            Safety Tips
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
            10 Essential Winter Towing Tips Every Canadian Driver Should Know
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Mike Johnson
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              January 15, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              8 min read
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
                Canadian winters are notoriously harsh, and being stranded on the
                road in freezing temperatures can be dangerous. Whether you&apos;re
                driving through a blizzard or dealing with black ice, knowing how
                to handle winter emergencies is crucial.
              </p>

              <h2>1. Keep a Winter Emergency Kit in Your Vehicle</h2>
              <p>
                A well-stocked emergency kit can be a lifesaver when you&apos;re
                stranded in winter conditions. Your kit should include:
              </p>
              <ul>
                <li>Warm blankets or sleeping bag</li>
                <li>Extra winter clothing (hat, gloves, boots)</li>
                <li>Non-perishable snacks and water</li>
                <li>Flashlight with extra batteries</li>
                <li>First aid kit</li>
                <li>Ice scraper and snow brush</li>
                <li>Small shovel</li>
                <li>Traction aids (sand, kitty litter, or traction mats)</li>
                <li>Jumper cables</li>
                <li>Phone charger (portable battery pack)</li>
              </ul>

              <h2>2. Check Your Battery Before Winter</h2>
              <p>
                Cold weather is hard on car batteries. Have your battery tested
                before the temperature drops. Most auto parts stores offer free
                battery testing. If your battery is more than 3-4 years old,
                consider replacing it before winter arrives.
              </p>

              <h2>3. Maintain Proper Tire Pressure</h2>
              <p>
                Tire pressure drops as temperatures fall. Check your tire pressure
                at least monthly during winter months. Properly inflated tires
                provide better traction and fuel efficiency. Consider investing in
                winter tires for improved safety in snow and ice.
              </p>

              <h2>4. Keep Your Fuel Tank at Least Half Full</h2>
              <p>
                A fuller fuel tank helps prevent fuel line freeze-up and ensures
                you can keep the engine running for heat if you get stranded.
                During extreme cold snaps, fill up more frequently.
              </p>

              <h2>5. Know What to Do If You Get Stuck</h2>
              <p>If your vehicle gets stuck in snow:</p>
              <ul>
                <li>Don&apos;t spin your tires - this digs you in deeper</li>
                <li>Clear snow from around the tires</li>
                <li>
                  Use traction aids under the drive wheels (sand, kitty litter, or
                  floor mats)
                </li>
                <li>Try rocking the vehicle gently between forward and reverse</li>
                <li>
                  If you can&apos;t get out, stay with your vehicle and call for help
                </li>
              </ul>

              <h2>6. Stay in Your Vehicle If Stranded</h2>
              <p>
                If you become stranded and can&apos;t get help immediately, stay in
                your vehicle. Your car provides shelter and makes you easier to
                find. Only leave your vehicle if help is visible within walking
                distance and you&apos;re certain you can make it safely.
              </p>

              <h2>7. Use Your Hazard Lights and Be Visible</h2>
              <p>
                If you&apos;re stopped on the side of the road, turn on your hazard
                lights. If you have them, set up reflective triangles or flares
                behind your vehicle to warn other drivers.
              </p>

              <h2>8. Run Your Engine Sparingly for Heat</h2>
              <p>
                If you need to run your engine for heat, do so for about 10 minutes
                every hour. Make sure your exhaust pipe is clear of snow to prevent
                carbon monoxide buildup. Crack a window slightly for fresh air.
              </p>

              <h2>9. Program Emergency Numbers in Your Phone</h2>
              <p>
                Before winter arrives, save these numbers in your phone:
              </p>
              <ul>
                <li>Your preferred towing company (like Guardium: 1-800-GUARDIUM)</li>
                <li>Your insurance company&apos;s roadside assistance number</li>
                <li>Local police non-emergency line</li>
                <li>AAA or CAA if you&apos;re a member</li>
              </ul>

              <h2>10. Know When to Call for Professional Help</h2>
              <p>
                Don&apos;t wait too long to call for professional towing assistance.
                If you&apos;re stuck in a dangerous location, conditions are
                worsening, or you don&apos;t have the tools to get unstuck safely,
                call for help immediately. Professional tow truck operators have
                the equipment and expertise to handle winter recoveries safely.
              </p>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 my-8">
                <h3 className="text-secondary font-bold mb-2">
                  Need Winter Towing Help?
                </h3>
                <p className="mb-4">
                  Guardium Towing operates 24/7, even in the worst winter
                  conditions. Our drivers are trained in winter recovery techniques
                  and equipped with the right tools for Canadian winters.
                </p>
                <Button variant="secondary" asChild>
                  <a href="tel:1-800-GUARDIUM">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 1-800-GUARDIUM
                  </a>
                </Button>
              </div>

              <h2>Conclusion</h2>
              <p>
                Winter driving in Canada requires extra preparation and caution.
                By following these tips and keeping emergency supplies in your
                vehicle, you&apos;ll be better prepared to handle whatever winter
                throws your way. Remember, if you ever find yourself in a winter
                emergency, Guardium Towing is available 24/7 to help get you home
                safely.
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

              {/* Emergency Card */}
              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Need Help Now?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    24/7 emergency towing available across Canada.
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
                        href="/blog/what-to-do-after-accident"
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        What to Do After a Car Accident
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
                    <li>
                      <Link
                        href="/blog"
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        Car Battery Maintenance Tips
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
