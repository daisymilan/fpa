import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Licensed Architect in Baguio City",
  description: "Learn about Arch. Friendzel B. Pengi, UAP — licensed architect and founder of FPA Design Consultancy in Baguio City.",
  alternates: { canonical: "https://www.fp-architect.com/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
