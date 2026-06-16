import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Architectural Services | FPA Design Consultancy Baguio",
  description: "Full-service architectural firm offering design, construction management, interior design, and permit documentation for clients in the Philippines and worldwide.",
  alternates: { canonical: "https://www.fp-architect.com/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
