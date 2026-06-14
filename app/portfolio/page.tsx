import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Architectural Projects in Northern Luzon",
  description:
    "Browse the portfolio of FPA Design Consultancy — featuring residential homes, commercial buildings, and interior design projects across Baguio City, Benguet, Ifugao, La Union, and Northern Luzon.",
  alternates: {
    canonical: "https://fpadesignconsultancy.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
              Our Work
            </span>
          </div>
          <h1 className="display-heading text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Project
            <br />
            <span className="text-[#c41230]">Portfolio</span>
          </h1>
          <p className="text-stone-400 mt-6 max-w-xl text-sm leading-relaxed">
            A curated selection of residential, commercial, and interior design
            projects across Northern Luzon.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
