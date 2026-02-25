"use client";

import { useState } from "react";
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const contactReasons = [
  "Emergency Towing",
  "Request a Quote",
  "General Inquiry",
  "Service Feedback",
  "Fleet Services",
  "Other",
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
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Badge variant="accent" className="mb-4">
            <MessageSquare className="h-3 w-3 mr-1" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Need a tow, roadside assistance, or a free quote? Reach out and our team
            will respond promptly. For emergencies, call us directly — we&apos;re available 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Emergency Line</h3>
                <a href="tel:1-800-GUARDIUM" className="text-secondary hover:underline font-medium">
                  1-800-GUARDIUM
                </a>
                <p className="text-sm text-muted-foreground mt-1">24/7 Emergency Service</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:info@guardiumtowing.ca" className="text-secondary hover:underline text-sm">
                  info@guardiumtowing.ca
                </a>
                <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Based In</h3>
                <p className="text-sm font-medium">Edmonton, AB</p>
                <p className="text-sm text-muted-foreground mt-1">Serving greater Edmonton area</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <p className="text-sm font-medium text-success">24/7 Available</p>
                <p className="text-sm text-muted-foreground mt-1">365 days a year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(780) 555-1234"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reason">Reason for Contact *</Label>
                          <Select
                            value={formData.reason}
                            onValueChange={(value) => setFormData({ ...formData, reason: value })}
                            required
                          >
                            <SelectTrigger>
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
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help — include your location if possible..."
                          className="min-h-[150px]"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">About Guardium Towing</h2>
                <p className="text-muted-foreground mb-4">
                  Guardium Towing is Edmonton&apos;s trusted towing company with over 15 years of
                  experience. We serve Edmonton and all surrounding communities including
                  Sherwood Park, St. Albert, Spruce Grove, Leduc, Beaumont, Devon, and Morinville.
                </p>
                <p className="text-muted-foreground">
                  Whether it&apos;s a roadside emergency at 3 AM in -30°C or a scheduled
                  flatbed transport, our team of certified professionals is always ready to help.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  Service Hours
                </h3>
                <Card>
                  <CardContent className="pt-4">
                    <div className="space-y-2.5 text-sm">
                      <div className="flex justify-between">
                        <span>Emergency Towing</span>
                        <span className="font-semibold text-success">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Roadside Assistance</span>
                        <span className="font-semibold text-success">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Office &amp; Quotes</span>
                        <span>Mon–Fri: 8am–6pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend Office</span>
                        <span>Sat–Sun: 9am–4pm</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Edmonton", "Sherwood Park", "St. Albert", "Spruce Grove",
                    "Leduc", "Beaumont", "Devon", "Morinville",
                  ].map((area) => (
                    <span
                      key={area}
                      className="text-sm bg-muted px-3 py-1 rounded-full border border-border"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
