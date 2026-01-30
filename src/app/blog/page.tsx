import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert tips, guides, and news about towing, roadside safety, and vehicle maintenance from Guardium Towing.",
};

const blogPosts = [
  {
    slug: "winter-towing-tips",
    title: "10 Essential Winter Towing Tips Every Canadian Driver Should Know",
    excerpt:
      "Winter driving in Canada presents unique challenges. Learn how to prepare your vehicle and what to do if you get stranded in cold weather.",
    category: "Safety Tips",
    author: "Mike Johnson",
    date: "January 15, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "what-to-do-after-accident",
    title: "What to Do After a Car Accident: A Step-by-Step Guide",
    excerpt:
      "Being in a car accident is stressful. This comprehensive guide walks you through exactly what to do in the moments and days following a collision.",
    category: "Guides",
    author: "Sarah Chen",
    date: "January 8, 2026",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "choosing-towing-company",
    title: "How to Choose a Reliable Towing Company",
    excerpt:
      "Not all towing companies are created equal. Here's what to look for when you need to call for help on the road.",
    category: "Tips",
    author: "Mike Johnson",
    date: "December 20, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "roadside-emergency-kit",
    title: "Building the Ultimate Roadside Emergency Kit",
    excerpt:
      "Be prepared for any roadside emergency with our comprehensive guide to building a well-stocked emergency kit for your vehicle.",
    category: "Safety Tips",
    author: "Lisa Park",
    date: "December 12, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "battery-maintenance",
    title: "Car Battery Maintenance: Extending the Life of Your Battery",
    excerpt:
      "Dead batteries are one of the most common reasons for roadside calls. Learn how to maintain your battery and avoid being stranded.",
    category: "Maintenance",
    author: "David Wong",
    date: "December 5, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "tire-blowout-safety",
    title: "How to Handle a Tire Blowout Safely",
    excerpt:
      "A tire blowout at highway speeds can be terrifying. Learn the proper techniques to safely handle this emergency situation.",
    category: "Safety Tips",
    author: "Sarah Chen",
    date: "November 28, 2025",
    readTime: "6 min read",
    featured: false,
  },
];

const categories = ["All", "Safety Tips", "Guides", "Tips", "Maintenance"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            Our Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Towing Tips & Resources
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Expert advice, safety tips, and helpful guides from Canada&apos;s
            leading towing professionals.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-primary relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for the latest safety tips, towing
            advice, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="secondary">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
