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
  Building2,
  Users,
  Headphones,
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
    address: "123 Towing Drive, Toronto, ON M5V 1A1",
    phone: "(416) 555-0123",
  },
  {
    city: "Vancouver",
    address: "456 Rescue Road, Vancouver, BC V6B 2P3",
    phone: "(604) 555-0456",
  },
  {
    city: "Calgary",
    address: "789 Highway Help Ave, Calgary, AB T2P 3C4",
    phone: "(403) 555-0789",
  },
  {
    city: "Montreal",
    address: "321 Rue du Remorquage, Montreal, QC H2Y 1C6",
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
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Badge variant="accent" className="mb-4">
            <MessageSquare className="h-3 w-3 mr-1" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Have questions? Need a quote? Want to partner with us? We&apos;re here
            to help. Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Emergency Line</h3>
                <a
                  href="tel:1-800-GUARDIUM"
                  className="text-secondary hover:underline"
                >
                  1-800-GUARDIUM
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  24/7 Emergency Service
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Customer Service</h3>
                <a
                  href="tel:1-888-555-0100"
                  className="text-secondary hover:underline"
                >
                  1-888-555-0100
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Mon-Fri: 8am-8pm
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:info@guardiumtowing.ca"
                  className="text-secondary hover:underline"
                >
                  info@guardiumtowing.ca
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  We reply within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Headquarters</h3>
                <p className="text-sm">123 Towing Drive</p>
                <p className="text-sm text-muted-foreground">
                  Toronto, ON M5V 1A1
                </p>
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
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
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
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
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
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reason">Reason for Contact *</Label>
                          <Select
                            value={formData.reason}
                            onValueChange={(value) =>
                              setFormData({ ...formData, reason: value })
                            }
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
                          placeholder="Tell us how we can help..."
                          className="min-h-[150px]"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
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
                <h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  Our Regional Offices
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {offices.map((office) => (
                    <Card key={office.city}>
                      <CardContent className="pt-4">
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {office.address}
                        </p>
                        <a
                          href={`tel:${office.phone}`}
                          className="text-sm text-secondary hover:underline"
                        >
                          {office.phone}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  Business Hours
                </h3>
                <Card>
                  <CardContent className="pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Emergency Towing</span>
                        <span className="font-semibold text-success">
                          24/7
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Customer Service</span>
                        <span>Mon-Fri: 8am-8pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Office Hours</span>
                        <span>Mon-Fri: 9am-6pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend Support</span>
                        <span>Sat-Sun: 10am-4pm</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our headquarters in downtown Toronto
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="bg-secondary/5 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg">Guardium Towing HQ</h3>
                <p className="text-muted-foreground">
                  123 Towing Drive, Toronto, ON M5V 1A1
                </p>
                <Button variant="outline" size="sm" className="mt-4 text-foreground" asChild>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
