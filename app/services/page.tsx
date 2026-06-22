import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Architectural Services Baguio City | FPA Design Consultancy",
  description:
    "Full-service architectural firm in Baguio City offering architectural design, interior design, construction management, building permit documentation, and renovation services for clients in the Philippines and worldwide.",
  alternates: { canonical: "https://www.fp-architect.com/services" },
  openGraph: {
    title: "Architectural Services | FPA Design Consultancy Baguio City",
    description:
      "Architectural design, interior design, construction management, building permits, and renovation — by FPA Design Consultancy, Baguio City.",
    url: "https://www.fp-architect.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
