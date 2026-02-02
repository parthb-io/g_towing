"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Building2,
  Users,
  Headphones,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react";

const contactReasons = [
  "General Inquiry",
  "Request a Quote",
  "Service Feedback",
  "Business Partnership",
  "Fleet Services",
  "Careers",
  "Other",
];

const offices = [
  {
    city: "Toronto",
    region: "Ontario",
    address: "123 Towing Drive",
    postal: "M5V 1A1",
    phone: "(416) 555-0123",
  },
  {
    city: "Vancouver",
    region: "British Columbia",
    address: "456 Rescue Road",
    postal: "V6B 2P3",
    phone: "(604) 555-0456",
  },
  {
    city: "Calgary",
    region: "Alberta",
    address: "789 Highway Help Ave",
    postal: "T2P 3C4",
    phone: "(403) 555-0789",
  },
  {
    city: "Montreal",
    region: "Quebec",
    address: "321 Rue du Remorquage",
    postal: "H2Y 1C6",
    phone: "(514) 555-0321",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-airbnb-sm mb-6">
              <MessageSquare className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              We're here to help
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Need a quote? Want to partner with us? Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-8 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Phone,
                title: "Emergency Line",
                value: "1-800-GUARDIUM",
                href: "tel:1-800-GUARDIUM",
                note: "24/7 Emergency Service",
              },
              {
                icon: Headphones,
                title: "Customer Service",
                value: "1-888-555-0100",
                href: "tel:1-888-555-0100",
                note: "Mon-Fri: 8am-8pm",
              },
              {
                icon: Mail,
                title: "Email",
                value: "help@guardiumtowing.ca",
                href: "mailto:help@guardiumtowing.ca",
                note: "Reply within 24 hours",
              },
              {
                icon: Building2,
                title: "Headquarters",
                value: "Toronto, ON",
                href: "#offices",
                note: "123 Towing Drive",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors flex-shrink-0">
                  <item.icon className="h-5 w-5 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.title}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                Send a Message
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                How can we help?
              </h2>

              {isSubmitted ? (
                <div className="bg-muted rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        reason: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-airbnb-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-foreground font-medium">Full name</Label>
                        <Input
                          className="rounded-xl h-12"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-foreground font-medium">Email</Label>
                        <Input
                          type="email"
                          className="rounded-xl h-12"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground text-sm">Phone (optional)</Label>
                        <Input
                          type="tel"
                          className="rounded-xl h-12"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-foreground font-medium">Reason</Label>
                        <Select
                          value={formData.reason}
                          onValueChange={(value) => setFormData({ ...formData, reason: value })}
                          required
                        >
                          <SelectTrigger className="rounded-xl h-12">
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactReasons.map((reason) => (
                              <SelectItem key={reason} value={reason}>
                                {reason}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">Message</Label>
                      <Textarea
                        className="rounded-xl min-h-[150px]"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" variant="secondary" className="w-full rounded-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Card */}
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">About Guardium Towing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  For over 20 years, Guardium Towing has been Canada's trusted name in towing and roadside assistance. Founded in Toronto in 2004, we've grown to serve communities across the nation.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our mission is simple: to be there when you need us most. Whether it's a roadside emergency at 3 AM or a scheduled vehicle transport, our certified professionals are ready.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Why choose us?</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Clock, text: "30-min average response" },
                    { icon: Star, text: "4.9/5 from 50,000+ reviews" },
                    { icon: Shield, text: "Fully licensed & insured" },
                    { icon: Users, text: "200+ certified operators" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <item.icon className="h-4 w-4 text-secondary" />
                      <span className="text-white/90">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Button variant="secondary" className="w-full rounded-full" asChild>
                    <Link href="/book">
                      Book a Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-airbnb-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-secondary" />
                  <h3 className="font-bold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Emergency Towing", value: "24/7", highlight: true },
                    { label: "Customer Service", value: "Mon-Fri: 8am-8pm" },
                    { label: "Office Hours", value: "Mon-Fri: 9am-6pm" },
                    { label: "Weekend Support", value: "Sat-Sun: 10am-4pm" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-1">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className={item.highlight ? "font-semibold text-success" : "text-foreground"}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section id="offices" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Regional offices across Canada
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With dispatch centers in major cities, we're always nearby when you need us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white rounded-2xl p-6 shadow-airbnb-sm hover:shadow-airbnb-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <h3 className="font-bold text-foreground">{office.city}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                <p className="text-sm text-muted-foreground mb-3">{office.city}, {office.region} {office.postal}</p>
                <a
                  href={`tel:${office.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Visit our headquarters</h2>
              <p className="text-muted-foreground">Located in downtown Toronto</p>
            </div>

            <div className="bg-muted rounded-2xl overflow-hidden shadow-airbnb">
              <div className="h-[300px] flex items-center justify-center bg-gradient-subtle">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-white shadow-airbnb flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Guardium Towing HQ</h3>
                  <p className="text-muted-foreground mb-4">123 Towing Drive, Toronto, ON M5V 1A1</p>
                  <Button variant="secondary" className="rounded-full" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
