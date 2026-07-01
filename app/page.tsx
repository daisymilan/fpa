import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignProcess from "@/components/home/DesignProcess";
import WhyArchitect from "@/components/home/WhyArchitect";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import { services } from "@/lib/services";
import { t } from "@/lib/translations";

export const metadata: Metadata = {
  title: "FPA Design Consultancy | Architect in Baguio City, Benguet",
  description:
    "FPA Design Consultancy — Baguio City architect designing homes, commercial buildings, and interiors for clients in the Philippines and worldwide.",
  keywords: [
    "architect Baguio City",
    "Baguio architect",
    "architectural firm Baguio",
    "house design Baguio City",
    "residential architect Baguio",
    "interior design Baguio City",
    "building permit Baguio",
    "FPA Design Consultancy",
    "Arch. Friendzel Pengi",
    "architect Benguet",
    "architect Northern Luzon",
    "architect Philippines",
  ],
  alternates: {
    canonical: "https://www.fp-architect.com",
  },
};

const baseUrl = "https://www.fp-architect.com";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/#webpage`,
  url: baseUrl,
  name: "FPA Design Consultancy | Architect in Baguio City, Benguet",
  description:
    "Licensed architectural firm in Baguio City led by Arch. Friendzel B. Pengi, UAP — residential design, commercial architecture, interior design, and building permits.",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#business` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/images/og-image.jpg`,
    contentUrl: `${baseUrl}/images/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${baseUrl}/#faq`,
  mainEntity: t.en.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Architectural Services by FPA Design Consultancy",
  description:
    "Full range of architectural and design services offered by FPA Design Consultancy in Baguio City, Philippines.",
  numberOfItems: services.length,
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      "@id": `${baseUrl}/services/${service.slug}#service`,
      name: service.title,
      description: service.description,
      url: `${baseUrl}/services/${service.slug}`,
      provider: { "@id": `${baseUrl}/#business` },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <DesignProcess />
      <WhyArchitect />
      <FAQ />
      <ContactCTA />
    </>
  );
}
