import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Architecture Portfolio | FPA Design Consultancy Baguio City",
  description:
    "Portfolio of FPA Design Consultancy — residential homes, commercial buildings, and interior design projects across Baguio City and the Philippines.",
  alternates: { canonical: "https://www.fp-architect.com/portfolio" },
  openGraph: {
    title: "Portfolio | FPA Design Consultancy — Architectural Projects",
    description:
      "Residential homes, commercial buildings, and interior design projects in Baguio City and across the Philippines by Arch. Friendzel B. Pengi, UAP.",
    url: "https://www.fp-architect.com/portfolio",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const baseUrl = "https://www.fp-architect.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${baseUrl}/portfolio` },
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${baseUrl}/portfolio`,
  name: "Portfolio — Architectural Projects by FPA Design Consultancy",
  url: `${baseUrl}/portfolio`,
  description:
    "Residential homes, commercial buildings, and interior design projects across the Philippines by Arch. Friendzel B. Pengi, UAP.",
  provider: { "@id": `${baseUrl}/#business` },
  hasPart: projects.map((p) => ({
    "@type": "CreativeWork",
    "@id": `${baseUrl}/portfolio/${p.slug}`,
    name: p.name,
    description: p.description,
    url: `${baseUrl}/portfolio/${p.slug}`,
    image: `${baseUrl}${p.coverImage}`,
    genre: p.type,
    locationCreated: {
      "@type": "Place",
      name: p.location,
      addressCountry: "PH",
    },
  })),
};

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <PortfolioContent />
    </>
  );
}
