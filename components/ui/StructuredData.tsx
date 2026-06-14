export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://fpadesignconsultancy.com/#business",
        name: "FPA Design Consultancy",
        alternateName: "FPA Design",
        description:
          "Licensed architectural firm in Baguio City specializing in residential design, commercial architecture, interior design, renovation, and building permit assistance across Northern Luzon.",
        url: "https://fpadesignconsultancy.com",
        logo: "https://fpadesignconsultancy.com/images/logo.png",
        image: "https://fpadesignconsultancy.com/images/og-image.jpg",
        telephone: ["+63744244644", "+639454221874"],
        email: "fpadesignconsultancy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Baguio City",
          addressRegion: "Benguet",
          addressCountry: "PH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 16.4023,
          longitude: 120.596,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/share/1E4rr19U8p/?mibextid=wwXIfr",
          "https://www.instagram.com/fpadesignconsultancy",
        ],
        priceRange: "₱₱",
        areaServed: [
          "Baguio City",
          "Benguet",
          "La Union",
          "Pangasinan",
          "Mountain Province",
          "Ifugao",
          "Kalinga",
          "Abra",
          "Apayao",
          "Northern Luzon",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Architectural Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Space Planning" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Supervision" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building Permit Assistance" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Visualization" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CAD Drafting" } },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": "https://fpadesignconsultancy.com/#architect",
        name: "Friendzel B. Pengi",
        jobTitle: "Licensed Architect",
        honorificPrefix: "Arch.",
        honorificSuffix: "UAP",
        worksFor: { "@id": "https://fpadesignconsultancy.com/#business" },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Lyceum Northwestern University",
        },
        image: "https://fpadesignconsultancy.com/images/about/architect.jpg",
        knowsLanguage: ["English", "Filipino", "Ilocano"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
