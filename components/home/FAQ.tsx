"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function FAQ() {
  const { lang } = useLanguage();
  const tx = t[lang].faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left column — heading + CTA */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FF3B30]" />
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
                {tx.tag}
              </span>
            </div>
            <h2
              className="display-heading text-fg mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {tx.heading1}
              <br />
              <span className="text-[#FF3B30]">{tx.heading2}</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-fg-dim text-xs font-semibold tracking-[0.2em] uppercase group hover:text-fg transition-colors duration-200"
            >
              {tx.cta}
              <span className="block w-8 h-px bg-[#FF3B30]/60 group-hover:w-14 transition-all duration-300" />
            </Link>
          </div>

          {/* Right column — accordion */}
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {tx.items.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span
                    className="display-heading text-fg group-hover:text-[#FF3B30] transition-colors duration-200"
                    style={{ fontSize: "1rem", letterSpacing: "0.07em", lineHeight: 1.5 }}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#FF3B30] text-sm transition-transform duration-300"
                    style={{
                      border: "1px solid var(--border-strong)",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="pb-7 pr-12">
                    <p className="text-fg-muted text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
