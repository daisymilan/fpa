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
      <section className="pt-40 pb-20 bg-[#0a0a0a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(45deg, #c41230 0, #c41230 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
              Our Work
            </span>
          </div>
          <h1
            className="text-white leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 600,
            }}
          >
            Project Portfolio
          </h1>
          <p className="text-stone-400 mt-4 max-w-xl">
            A curated selection of residential, commercial, and interior design
            projects across Northern Luzon.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section-padding bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
