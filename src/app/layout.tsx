import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://guardiumtowing.com"),
  title: {
    default: "Guardium Towing | Edmonton & Area 24/7 Towing Service",
    template: "%s | Guardium Towing",
  },
  description:
    "Guardium Towing provides 24/7 professional towing and roadside assistance in Edmonton, Sherwood Park, Spruce Grove, Beaumont, Devon, Morinville, and Leduc. Call +1 780-809-7860.",
  keywords: [
    "towing service Edmonton",
    "emergency towing Alberta",
    "roadside assistance Edmonton",
    "heavy duty towing",
    "24/7 towing Edmonton",
    "accident recovery",
    "flatbed towing",
    "Sherwood Park towing",
    "Spruce Grove towing",
  ],
  authors: [{ name: "Guardium Towing" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://guardiumtowing.com",
    siteName: "Guardium Towing",
    title: "Guardium Towing | Edmonton & Area 24/7 Towing Service",
    description:
      "24/7 professional towing and roadside assistance in Edmonton and surrounding areas. Fast, reliable, and affordable. Call +1 780-809-7860.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardium Towing | Edmonton & Area 24/7 Towing Service",
    description:
      "24/7 professional towing and roadside assistance in Edmonton and surrounding areas. Fast, reliable, and affordable.",
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
    <html lang="en-CA">
      <body className="antialiased min-h-screen flex flex-col ">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
