import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Guardium Towing's privacy policy explains how we collect, use, and protect your personal information when you use our towing and roadside assistance services.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-gray-900">Privacy Policy</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Legal
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Privacy Policy
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Last updated: March 24, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-10">

              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-6">
                  Guardium Towing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you use our towing and roadside assistance services or visit our website at guardiumtowing.com.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  When you request our services or contact us, we may collect:
                </p>
                <ul className="space-y-2 mb-6 text-gray-700 ml-4">
                  <li>• Name and contact information (phone number, email address)</li>
                  <li>• Vehicle information (make, model, year, license plate)</li>
                  <li>• Location information (pickup and drop-off addresses)</li>
                  <li>• Payment information (credit card details, billing address)</li>
                  <li>• Service-related notes and special instructions</li>
                  <li>• Communications with our dispatch team</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-6">
                  When you visit our website, we may automatically collect certain information including
                  your IP address, browser type, device information, and pages visited. We use cookies
                  and similar technologies to enhance your experience.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="space-y-2 mb-6 text-gray-700 ml-4">
                  <li>• Provide towing and roadside assistance services</li>
                  <li>• Process payments and billing</li>
                  <li>• Communicate with you about your service requests</li>
                  <li>• Provide documentation and receipts for your records</li>
                  <li>• Improve our services and customer experience</li>
                  <li>• Send service updates and promotional communications (with your consent)</li>
                  <li>• Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">We may share your information with:</p>
                <ul className="space-y-2 mb-6 text-gray-700 ml-4">
                  <li>• Third parties you authorize us to share information with</li>
                  <li>• Repair shops (when you request vehicle delivery)</li>
                  <li>• Payment processors (to process transactions)</li>
                  <li>• Law enforcement (when required by law)</li>
                  <li>• Service providers who assist our operations</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  We do not sell your personal information to third parties.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However,
                  no method of transmission over the Internet is 100% secure, and we cannot guarantee
                  absolute security.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 mb-6">
                  We retain your personal information for as long as necessary to provide our services,
                  comply with legal obligations, resolve disputes, and enforce our agreements. Service
                  records are typically retained for seven years in accordance with Canadian business
                  record requirements.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  Under Canadian privacy law (PIPEDA), you have the right to:
                </p>
                <ul className="space-y-2 mb-6 text-gray-700 ml-4">
                  <li>• Access your personal information we hold</li>
                  <li>• Request correction of inaccurate information</li>
                  <li>• Withdraw consent for certain uses of your information</li>
                  <li>• Request deletion of your information (subject to legal requirements)</li>
                  <li>• File a complaint with the Privacy Commissioner of Canada</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-6">
                  Our website uses cookies to improve your browsing experience. You can control cookie
                  settings through your browser. Disabling cookies may affect some website functionality.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <p className="text-gray-700 mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the
                  privacy practices of these external sites. We encourage you to review their privacy
                  policies.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                <p className="text-gray-700 mb-6">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly
                  collect personal information from children.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes
                  by posting the new policy on this page and updating the &quot;Last updated&quot; date. We
                  encourage you to review this policy periodically.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights,
                  please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Guardium Towing</p>
                  <p className="text-gray-700">Unit 206, 4918 Roper Rd NW</p>
                  <p className="text-gray-700">Edmonton, AB T6B3T7</p>
                  <p className="text-gray-700 mt-2">
                    Email: <a href="mailto:dispatch@guardiumtowing.com" className="text-primary hover:underline">dispatch@guardiumtowing.com</a>
                  </p>
                  <p className="text-gray-700">
                    Phone: <a href="tel:+17808097860" className="text-primary hover:underline">780-809-7860</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                ← Back to Home
              </Link>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Questions About Your Privacy?</h3>
              <p className="text-gray-400">Contact us and we&apos;ll be happy to help.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800" asChild>
                <a href="mailto:dispatch@guardiumtowing.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="tel:+17808097860">
                  <Phone className="mr-2 h-4 w-4" />
                  780-809-7860
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
