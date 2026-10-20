import type { Metadata } from "next";
import { languageAlternates } from "@/lib/localeRoutes";
import ServicesContent from "./ServicesContent";
import { t } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Architectural Services Baguio City | FPA Design Consultancy",
  description:
    "FPA Design Consultancy offers architectural design, interior design, construction management, building permits, and renovation in Baguio City, Philippines.",
  alternates: languageAlternates("/services", "en"),
  openGraph: {
    title: "Architectural Services | FPA Design Consultancy Baguio City",
    description:
      "Architectural design, interior design, construction management, building permits, and renovation — by FPA Design Consultancy, Baguio City.",
    url: "https://www.fp-architect.com/services",
    images: [{ url: "/images/og/default.jpg", width: 1200, height: 630 }],
  },
};

const baseUrl = "https://www.fp-architect.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: t.en.common.servicesFaq.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesContent />
    </>
  );
}
