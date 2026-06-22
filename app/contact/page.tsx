import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Architect in Baguio City — Get a Consultation",
  description: "Contact FPA Design Consultancy — architect in Baguio City. Architectural design, interior design, renovation, and building permits. Call (074) 424 4644.",
  alternates: { canonical: "https://www.fp-architect.com/contact" },
  openGraph: {
    title: "Contact FPA Design Consultancy | Architect in Baguio City",
    description: "Reach out for a free consultation — architectural design, interior design, renovation, and building permits. Call (074) 424 4644.",
    url: "https://www.fp-architect.com/contact",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const baseUrl = "https://www.fp-architect.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${baseUrl}/contact#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${baseUrl}/contact` },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${baseUrl}/contact`,
  name: "Contact FPA Design Consultancy — Architect in Baguio City",
  url: `${baseUrl}/contact`,
  description:
    "Contact FPA Design Consultancy to start your architectural design, interior design, renovation, or building permit project. Free initial consultation available.",
  mainEntity: { "@id": `${baseUrl}/#business` },
  breadcrumb: { "@id": `${baseUrl}/contact#breadcrumb` },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <ContactContent />
    </>
  );
}
