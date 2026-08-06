"use client";

import Link from "next/link";
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

      {/* CTA */}
      <section className="section-padding bg-[#FF3B30]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="display-heading text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Each project in our portfolio began with a conversation. Tell us about your vision — we will design a space that reflects who you are and how you live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/60 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
