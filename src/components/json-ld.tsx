export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Guardium Towing",
    url: "https://guardiumtowing.com",
    logo: "https://guardiumtowing.com/images/Towing logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-780-809-7860",
      contactType: "customer service",
      areaServed: "CA-AB",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/guardiumtowing",
      "https://www.instagram.com/guardiumtowing",
      "https://www.linkedin.com/company/guardiumtowing",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TowingService",
    "@id": "https://guardiumtowing.com/#business",
    name: "Guardium Towing",
    image: "https://guardiumtowing.com/images/Towing logo.png",
    url: "https://guardiumtowing.com",
    telephone: "+1-780-809-7860",
    email: "dispatch@guardiumtowing.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 206, 4918 Roper Rd NW",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      postalCode: "T6B3T7",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5461,
      longitude: -113.4938,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Edmonton",
        "@id": "https://www.wikidata.org/wiki/Q2096",
      },
      {
        "@type": "City",
        name: "Sherwood Park",
      },
      {
        "@type": "City",
        name: "Spruce Grove",
      },
      {
        "@type": "City",
        name: "Beaumont",
      },
      {
        "@type": "City",
        name: "Devon",
      },
      {
        "@type": "City",
        name: "Morinville",
      },
      {
        "@type": "City",
        name: "Leduc",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Guardium Towing",
    url: "https://guardiumtowing.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://guardiumtowing.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}

// FAQ Schema for pages with FAQ sections
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

// Service Schema for service pages
export function ServiceJsonLd({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string[];
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      name: "Guardium Towing",
      telephone: "+1-780-809-7860",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 206, 4918 Roper Rd NW",
        addressLocality: "Edmonton",
        addressRegion: "AB",
        postalCode: "T6B3T7",
        addressCountry: "CA",
      },
    },
    description: description,
    areaServed: areaServed || [
      "Edmonton",
      "Sherwood Park",
      "Spruce Grove",
      "Beaumont",
      "Devon",
      "Morinville",
      "Leduc",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema),
      }}
    />
  );
}
