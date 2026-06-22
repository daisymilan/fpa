import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Architectural Services Baguio City | FPA Design Consultancy",
  description:
    "FPA Design Consultancy offers architectural design, interior design, construction management, building permits, and renovation in Baguio City, Philippines.",
  alternates: { canonical: "https://www.fp-architect.com/services" },
  openGraph: {
    title: "Architectural Services | FPA Design Consultancy Baguio City",
    description:
      "Architectural design, interior design, construction management, building permits, and renovation — by FPA Design Consultancy, Baguio City.",
    url: "https://www.fp-architect.com/services",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const baseUrl = "https://www.fp-architect.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is FPA Design Consultancy a licensed architectural firm?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. FPA Design Consultancy is led by Arch. Friendzel B. Pengi, UAP — a licensed architect registered with the Professional Regulation Commission (PRC) under Republic Act 9266 and a member of the United Architects of the Philippines." },
    },
    {
      "@type": "Question",
      name: "Do you serve clients outside Baguio City?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We serve clients across the Philippines and internationally, offering remote consultation and design services to Filipino families and businesses worldwide." },
    },
    {
      "@type": "Question",
      name: "How do I start a project with FPA Design Consultancy?",
      acceptedAnswer: { "@type": "Answer", text: "Simply reach out via our contact page or call us directly. We begin with a free initial consultation to understand your project goals, site conditions, and budget — then recommend the right scope of services." },
    },
    {
      "@type": "Question",
      name: "Do you handle both residential and commercial projects?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Our portfolio spans single-family residences, multi-storey homes, commercial office buildings, and interior renovation projects across the Philippines." },
    },
  ],
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
