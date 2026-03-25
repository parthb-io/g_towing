import { MetadataRoute } from "next";

const BASE_URL = "https://guardiumtowing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core pages
  const corePages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/locations", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/book", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/careers", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/help", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  // Service pages
  const servicePages = [
    "/services/light-medium-duty-towing",
    "/services/heavy-duty-towing",
    "/services/deck-transportation-hauling",
    "/services/accident-towing",
    "/services/flatbed-towing",
    "/services/winching-tow-dolly",
    "/services/roadside-assistance",
    "/services/battery-boost-jump-start",
    "/services/tire-repair-replacement",
    "/services/fuel-delivery",
  ];

  // Location pages
  const locationPages = [
    "/locations/edmonton",
    "/locations/sherwood-park",
    "/locations/spruce-grove",
    "/locations/beaumont",
    "/locations/devon",
    "/locations/morinville",
    "/locations/leduc",
  ];

  return [
    // Core pages
    ...corePages.map((page) => ({
      url: `${BASE_URL}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    // Service pages
    ...servicePages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Location pages
    ...locationPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
