"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function ContactCTA() {
  const { lang } = useLanguage();
  const tx = t[lang].contactCta;

  return (
    <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">{tx.tag}</span>
          </div>

          <h2 className="display-heading text-fg mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            {tx.heading1}
            <br />
            <span className="text-[#c41230]">{tx.heading2}</span>
          </h2>

          <p className="text-fg-muted text-lg leading-relaxed mb-10 max-w-xl">
            {tx.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#c41230] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#8b0000] transition-colors duration-200"
            >
              {tx.cta1}
            </Link>
            <a
              href="tel:+639454221874"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-fg text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200"
              style={{ border: "1px solid var(--border-strong)" }}
            >
              {tx.cta2}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 mt-12 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
            <div>
              <p className="text-xs text-fg-faint tracking-widest uppercase mb-1">{tx.emailLabel}</p>
              <a href="mailto:fpadesignconsultancy@gmail.com" className="text-fg-muted text-sm hover:text-fg transition-colors">
                fpadesignconsultancy@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-fg-faint tracking-widest uppercase mb-1">{tx.phoneLabel}</p>
              <div className="flex flex-col gap-0.5">
                <a href="tel:+63744244644" className="text-fg-muted text-sm hover:text-fg transition-colors">(074) 424 4644</a>
                <a href="tel:+639454221874" className="text-fg-muted text-sm hover:text-fg transition-colors">0945 422 1874</a>
              </div>
            </div>
            <div>
              <p className="text-xs text-fg-faint tracking-widest uppercase mb-1">{tx.locationLabel}</p>
              <p className="text-fg-muted text-sm">Baguio City, Benguet, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
