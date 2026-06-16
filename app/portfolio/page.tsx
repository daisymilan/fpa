import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | FPA Design Consultancy — Architectural Projects",
  description: "Browse the portfolio of FPA Design Consultancy — featuring residential homes, commercial buildings, and interior design projects in the Philippines and beyond.",
  alternates: { canonical: "https://www.fp-architect.com/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
