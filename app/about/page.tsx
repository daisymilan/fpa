import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Arch. Friendzel B. Pengi, UAP — Licensed Architect, Baguio City",
  description:
    "Meet Arch. Friendzel B. Pengi, UAP — licensed architect, Safety Officer 2, and founder of FPA Design Consultancy in Baguio City, Benguet. Serving residential and commercial clients across the Philippines.",
  alternates: { canonical: "https://www.fp-architect.com/about" },
  openGraph: {
    title: "About Arch. Friendzel B. Pengi, UAP | FPA Design Consultancy",
    description:
      "Licensed architect and founder of FPA Design Consultancy, Baguio City. Specializing in residential design, commercial architecture, and interior design.",
    url: "https://www.fp-architect.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
