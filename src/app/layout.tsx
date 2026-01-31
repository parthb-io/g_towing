import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/floating-actions";

export const metadata: Metadata = {
  title: {
    default: "Guardium Towing | Canada's #1 Towing Service Provider",
    template: "%s | Guardium Towing",
  },
  description:
    "Guardium Towing provides 24/7 professional towing and roadside assistance across Canada. Emergency towing, heavy-duty towing, accident recovery, and more. Call 1-800-GUARDIUM.",
  keywords: [
    "towing service",
    "emergency towing",
    "roadside assistance",
    "heavy duty towing",
    "Canada towing",
    "24/7 towing",
    "accident recovery",
    "motorcycle towing",
  ],
  authors: [{ name: "Guardium Towing" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://guardiumtowing.ca",
    siteName: "Guardium Towing",
    title: "Guardium Towing | Canada's #1 Towing Service Provider",
    description:
      "24/7 professional towing and roadside assistance across Canada. Fast, reliable, and affordable.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardium Towing | Canada's #1 Towing Service Provider",
    description:
      "24/7 professional towing and roadside assistance across Canada. Fast, reliable, and affordable.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
