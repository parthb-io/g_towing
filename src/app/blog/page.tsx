import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, BookOpen, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert tips, guides, and news about towing, roadside safety, and vehicle maintenance from Guardium Towing.",
};

const blogPosts = [
  {
    slug: "guardium-acquires-cliffs-towing",
    title: "Guardium Towing Acquires Cliffs Towing to Expand Heavy-Duty Coverage",
    excerpt:
      "Guardium Towing has acquired Cliffs Towing, strengthening our heavy-duty fleet, response capacity, and service footprint across Western Canada.",
    category: "Company News",
    author: "Guardium Editorial Team",
    date: "March 23, 2026",
    readTime: "4 min read",
    featured: true,
  },
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
];

const categories = ["All", "Company News", "Safety Tips", "Guides", "Tips", "Maintenance"];

export default function BlogPage() {
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
            <span className="text-gray-900">Blog</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="h-4 w-4" />
              Our Blog
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Towing Tips & Resources
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Expert advice, safety tips, and helpful guides from Edmonton&apos;s
              leading towing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gray-900 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author.split(" ")[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      

      {/* Emergency CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Need Towing Now?</h3>
              <p className="text-gray-600">Our team is available 24/7 for emergencies.</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8" asChild>
              <a href="tel:+17808097860">
                <Phone className="mr-2 h-5 w-5" />
                Call 780-809-7860
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
