import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Phone,
  MessageSquare,
  FileText,
  ArrowRight,
  Clock,
  CreditCard,
  Truck,
  Shield,
  MapPin,
} from "lucide-react";
import { FaqJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Help & FAQ",
  description:
    "Get answers to common questions about Guardium Towing services. FAQ, guides, and support resources for towing in Edmonton and area.",
};

const faqs = [
  {
    category: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "How quickly can you respond to my call?",
        answer:
          "Our average response time is 30 minutes or less in the Edmonton metro area. Response times may vary in outlying areas or during extreme weather conditions, but we always dispatch as quickly as possible.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve Edmonton and surrounding communities including Sherwood Park, Spruce Grove, Beaumont, Devon, Morinville, and Leduc. For service outside these areas, please call us to discuss your needs.",
      },
      {
        question: "Are you available 24/7?",
        answer:
          "Yes, our dispatch center operates 24 hours a day, 7 days a week, 365 days a year. Whether it's 2 AM on a holiday or rush hour on a Monday, we're here to help.",
      },
      {
        question: "Do I need to be present when you tow my vehicle?",
        answer:
          "Ideally, yes. Having you present helps us verify vehicle details and get your signature. However, we can arrange for pickup without you present if needed - just call to discuss the details.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    icon: CreditCard,
    questions: [
      {
        question: "How much does a tow cost?",
        answer:
          "Towing costs depend on factors like vehicle type, distance, and time of service. Call us for an accurate quote based on your specific situation. We provide upfront quotes before any work begins - no surprises.",
      },
      {
        question: "Do you provide receipts and documentation?",
        answer:
          "Yes, we provide detailed receipts and documentation for all services. This includes photos, service details, and itemized invoices that you can use for your records.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, all major credit cards (Visa, Mastercard, American Express), debit cards, and e-transfer. Payment is typically collected upon service completion.",
      },
      {
        question: "Do you offer fleet accounts?",
        answer:
          "Yes, we offer fleet account programs for businesses with multiple vehicles. This includes consolidated billing, volume discounts, and priority dispatch. Contact us to set up an account.",
      },
    ],
  },
  {
    category: "Services",
    icon: Truck,
    questions: [
      {
        question: "What types of vehicles can you tow?",
        answer:
          "We tow everything from motorcycles and compact cars to large commercial trucks and construction equipment. Our fleet includes light-duty trucks, flatbeds, and heavy-duty wreckers rated for vehicles up to 50 tons.",
      },
      {
        question: "Can you tow my all-wheel drive vehicle?",
        answer:
          "Yes, we can safely tow AWD and 4WD vehicles using our flatbed trucks, which keep all four wheels off the ground to prevent drivetrain damage.",
      },
      {
        question: "Do you offer roadside assistance without towing?",
        answer:
          "Absolutely! We provide battery boosts, tire changes, fuel delivery, and lockout services. Often, we can get you back on the road without needing a tow.",
      },
      {
        question: "Can you store my vehicle after towing?",
        answer:
          "Yes, we have secure storage facilities available. This is often needed for accident vehicles or situations where immediate repairs aren't possible.",
      },
    ],
  },
];

const guides = [
  {
    icon: Truck,
    title: "What to Do When Your Car Breaks Down",
    description: "Pull over safely, turn on hazards, and call for help.",
    href: "/blog",
  },
  {
    icon: Shield,
    title: "After an Accident Checklist",
    description: "Ensure safety, exchange info, document the scene.",
    href: "/blog/what-to-do-after-accident",
  },
  {
    icon: Clock,
    title: "How to Prepare for Winter Driving",
    description: "Tips for winter tires, emergency kits, and staying safe.",
    href: "/blog/winter-towing-tips",
  },
];

// Flatten FAQs for JSON-LD
const allFaqs = faqs.flatMap((category) =>
  category.questions.map((q) => ({
    question: q.question,
    answer: q.answer,
  }))
);

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      <FaqJsonLd faqs={allFaqs} />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Help</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How Can We Help You?
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Find answers to common questions, helpful guides, and ways to contact
              our support team. We&apos;re here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-base" asChild>
                <a href="tel:+17808097860">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 780-809-7860
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-gray-300" asChild>
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Form
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-6 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#faq" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-900">FAQ</span>
            </a>
            <Link href="/contact" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-900">Contact Us</span>
            </Link>
            <Link href="/locations" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-900">Service Areas</span>
            </Link>
            <Link href="/services" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-900">Our Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Quick answers to questions we hear most often.
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((category) => (
                <div key={category.category}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.category}
                  </h3>
                  <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.category}-${index}`}
                          className="border-gray-200"
                        >
                          <AccordionTrigger className="px-6 text-left hover:text-primary text-gray-900">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Guides & Tips
            </h2>
            <p className="text-gray-600 text-lg">
              Helpful information to keep you safe and prepared on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <guide.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                <span className="text-sm text-primary font-medium flex items-center gap-1">
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
            Our team is available 24/7 to answer your questions and help you with
            any towing or roadside assistance needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-10 text-base" asChild>
              <a href="tel:+17808097860">
                <Phone className="mr-2 h-5 w-5" />
                780-809-7860
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800 h-14 px-10 text-base" asChild>
              <Link href="/contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
