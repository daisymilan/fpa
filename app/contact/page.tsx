import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Architect in Baguio City — Get a Consultation",
  description: "Contact FPA Design Consultancy for architectural design, interior design, renovation, and building permit services. Based in Baguio City, serving clients in the Philippines and worldwide. Call (074) 424 4644.",
  alternates: { canonical: "https://www.fp-architect.com/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
