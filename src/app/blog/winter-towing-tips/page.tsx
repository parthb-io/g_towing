import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "10 Essential Winter Towing Tips Every Canadian Driver Should Know",
  description:
    "Winter driving in Canada presents unique challenges. Learn how to prepare your vehicle and what to do if you get stranded in cold weather.",
};

export default function WinterTowingTipsPage() {
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
            <span className="text-gray-900">Safety Tips</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Safety Tips
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              10 Essential Winter Towing Tips Every Canadian Driver Should Know
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-500">
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
                  Canadian winters are notoriously harsh, and being stranded on the
                  road in freezing temperatures can be dangerous. Whether you&apos;re
                  driving through a blizzard or dealing with black ice, knowing how
                  to handle winter emergencies is crucial.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Keep a Winter Emergency Kit in Your Vehicle</h2>
                <p className="text-gray-700 mb-4">
                  A well-stocked emergency kit can be a lifesaver when you&apos;re
                  stranded in winter conditions. Your kit should include:
                </p>
                <ul className="space-y-2 mb-8 text-gray-700 ml-4">
                  <li>• Warm blankets or sleeping bag</li>
                  <li>• Extra winter clothing (hat, gloves, boots)</li>
                  <li>• Non-perishable snacks and water</li>
                  <li>• Flashlight with extra batteries</li>
                  <li>• First aid kit</li>
                  <li>• Ice scraper and snow brush</li>
                  <li>• Small shovel</li>
                  <li>• Traction aids (sand, kitty litter)</li>
                  <li>• Jumper cables</li>
                  <li>• Phone charger (portable battery pack)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Check Your Battery Before Winter</h2>
                <p className="text-gray-700 mb-8">
                  Cold weather is hard on car batteries. Have your battery tested
                  before the temperature drops. Most auto parts stores offer free
                  battery testing. If your battery is more than 3-4 years old,
                  consider replacing it before winter arrives.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Maintain Proper Tire Pressure</h2>
                <p className="text-gray-700 mb-8">
                  Tire pressure drops as temperatures fall. Check your tire pressure
                  at least monthly during winter months. Properly inflated tires
                  provide better traction and fuel efficiency. Consider investing in
                  winter tires for improved safety.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Keep Your Fuel Tank at Least Half Full</h2>
                <p className="text-gray-700 mb-8">
                  A fuller fuel tank helps prevent fuel line freeze-up and ensures
                  you can keep the engine running for heat if you get stranded.
                  During extreme cold snaps, fill up more frequently.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Know What to Do If You Get Stuck</h2>
                <p className="text-gray-700 mb-4">If your vehicle gets stuck in snow:</p>
                <ul className="space-y-2 mb-8 text-gray-700 ml-4">
                  <li>• Don&apos;t spin your tires - this digs you in deeper</li>
                  <li>• Clear snow from around the tires</li>
                  <li>• Use traction aids under the drive wheels</li>
                  <li>• Try rocking the vehicle gently between forward and reverse</li>
                  <li>• If you can&apos;t get out, stay with your vehicle and call for help</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Stay in Your Vehicle If Stranded</h2>
                <p className="text-gray-700 mb-8">
                  If you become stranded and can&apos;t get help immediately, stay in
                  your vehicle. Your car provides shelter and makes you easier to
                  find. Only leave your vehicle if help is visible within walking
                  distance.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7-10. More Essential Tips</h2>
                <ul className="space-y-2 mb-8 text-gray-700 ml-4">
                  <li>• Use your hazard lights and be visible when stopped</li>
                  <li>• Run your engine sparingly for heat (10 min/hour)</li>
                  <li>• Program emergency numbers in your phone before winter</li>
                  <li>• Know when to call for professional help - don&apos;t wait too long</li>
                </ul>

                {/* CTA Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
                  <h3 className="font-bold text-gray-900 mb-2">Need Winter Towing Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Guardium Towing operates 24/7, even in the worst winter conditions.
                    Our drivers are trained in winter recovery techniques.
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
                <h3 className="font-bold mb-2">Need Help Now?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  24/7 emergency towing available in Edmonton area.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:+17808097860">
                    <Phone className="mr-2 h-4 w-4" />
                    780-809-7860
                  </a>
                </Button>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blog/what-to-do-after-accident"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      What to Do After a Car Accident
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

              {/* Quick Checklist */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Winter Kit Checklist</h3>
                <ul className="space-y-2 text-sm">
                  {["Blankets", "Extra clothes", "Flashlight", "First aid kit", "Jumper cables", "Phone charger"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stranded This Winter?</h2>
          <p className="text-gray-400 mb-6">We&apos;re available 24/7, even in the worst conditions.</p>
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
