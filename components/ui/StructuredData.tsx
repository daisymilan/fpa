export default function StructuredData() {
  const baseUrl = "https://www.fp-architect.com";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${baseUrl}/#business`,
        name: "FPA Design Consultancy",
        alternateName: "FPA Design",
        description:
          "Licensed architectural firm in Baguio City, Philippines specializing in residential design, commercial architecture, interior design, renovation, and building permit assistance. Serving clients in the Philippines and worldwide.",
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        image: `${baseUrl}/images/og-image.jpg`,
        telephone: ["+63744244644", "+639454221874"],
        email: "fpadesignconsultancy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Baguio City",
          addressRegion: "Benguet",
          postalCode: "2600",
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/share/1E4rr19U8p/?mibextid=wwXIfr",
          "https://www.instagram.com/fpadesignconsultancy",
        ],
        priceRange: "₱₱",
        areaServed: ["Philippines", "Worldwide"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Architectural & Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Architectural Design",
                url: `${baseUrl}/services/architectural-design`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interior Design",
                url: `${baseUrl}/services/interior-design`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Renovation & Remodeling",
                url: `${baseUrl}/services/renovation-remodeling`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Space Planning",
                url: `${baseUrl}/services/space-planning`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Construction Project Management",
                url: `${baseUrl}/services/construction-project-management`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Construction Supervision",
                url: `${baseUrl}/services/construction-supervision`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Building Permit Documentation",
                url: `${baseUrl}/services/building-permit-documentation`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "3D Visualization & Rendering",
                url: `${baseUrl}/services/3d-visualization-rendering`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cabinet Design",
                url: `${baseUrl}/services/cabinet-design`,
              },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#architect`,
        name: "Friendzel B. Pengi",
        jobTitle: "Licensed Architect",
        honorificPrefix: "Arch.",
        honorificSuffix: "UAP",
        worksFor: { "@id": `${baseUrl}/#business` },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Lyceum Northwestern University",
        },
        image: `${baseUrl}/images/about/architect.jpg`,
        knowsLanguage: ["English", "Filipino", "Ilocano"],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Licensed Architect",
            credentialCategory: "Professional License",
            recognizedBy: {
              "@type": "Organization",
              name: "Professional Regulation Commission (PRC)",
              addressCountry: "PH",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Safety Officer 2 (SO2)",
            credentialCategory: "Professional Certification",
            recognizedBy: {
              "@type": "Organization",
              name: "Department of Labor and Employment (DOLE)",
              addressCountry: "PH",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "FPA Design Consultancy",
        publisher: { "@id": `${baseUrl}/#business` },
        inLanguage: "en-PH",
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
