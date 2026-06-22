import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | Architectural Projects in the Philippines — FPA Design Consultancy Baguio",
  description:
    "Browse the portfolio of FPA Design Consultancy — featuring residential homes, commercial buildings, and interior design projects in Baguio City, Northern Luzon, and across the Philippines.",
  alternates: { canonical: "https://www.fp-architect.com/portfolio" },
  openGraph: {
    title: "Portfolio | FPA Design Consultancy — Architectural Projects",
    description:
      "Residential homes, commercial buildings, and interior design projects in Baguio City and across the Philippines by Arch. Friendzel B. Pengi, UAP.",
    url: "https://www.fp-architect.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
