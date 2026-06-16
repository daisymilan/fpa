"use client";

import { projects } from "@/lib/projects";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function PortfolioContent() {
  const { lang } = useLanguage();
  const tx = t[lang].portfolioPage;

  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.tag}</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            {tx.heading1}
            <br />
            <span className="text-[#FF3B30]">{tx.heading2}</span>
          </h1>
          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed">
            {tx.desc}
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
