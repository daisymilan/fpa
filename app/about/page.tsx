import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Arch. Friendzel B. Pengi, UAP — Licensed Architect, Baguio City",
  description:
    "Arch. Friendzel B. Pengi, UAP — PRC-licensed architect, Safety Officer 2, and founder of FPA Design Consultancy, Baguio City, Benguet, Philippines.",
  keywords: [
    "Arch. Friendzel B. Pengi",
    "FPA Design Consultancy founder",
    "licensed architect Baguio City",
    "UAP architect Philippines",
    "PRC licensed architect Baguio",
    "Safety Officer 2 architect",
    "Lyceum Northwestern University architecture",
    "architect Benguet",
  ],
  alternates: { canonical: "https://www.fp-architect.com/about" },
  openGraph: {
    title: "About Arch. Friendzel B. Pengi, UAP | FPA Design Consultancy",
    description:
      "Licensed architect and founder of FPA Design Consultancy, Baguio City. Specializing in residential design, commercial architecture, and interior design.",
    url: "https://www.fp-architect.com/about",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const baseUrl = "https://www.fp-architect.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${baseUrl}/about#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "About", item: `${baseUrl}/about` },
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${baseUrl}/about`,
  name: "About Arch. Friendzel B. Pengi, UAP — FPA Design Consultancy",
  url: `${baseUrl}/about`,
  description:
    "Meet Arch. Friendzel B. Pengi, UAP — licensed architect, Safety Officer 2, and founder of FPA Design Consultancy in Baguio City, Benguet.",
  mainEntity: { "@id": `${baseUrl}/#architect` },
  breadcrumb: { "@id": `${baseUrl}/about#breadcrumb` },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      <AboutContent />
    </>
  );
}
