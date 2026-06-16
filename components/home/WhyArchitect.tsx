"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function WhyArchitect() {
  const { lang } = useLanguage();
  const tx = t[lang].why;

  return (
    <section className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">{tx.tag}</span>
            </div>
            <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              {tx.heading1}
              <br />
              <span className="text-[#c41230]">{tx.heading2}</span>
            </h2>
          </div>
          <p className="text-fg-muted leading-relaxed text-sm">
            {tx.intro}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0" style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>
          {tx.reasons.map((reason, i) => (
            <div
              key={i}
              className={`py-8 px-0 flex flex-col gap-3 group ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
              style={{
                borderRight: i % 2 === 0 ? `1px solid var(--border)` : undefined,
                borderBottom: i < tx.reasons.length - 2 ? `1px solid var(--border)` : undefined,
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="display-heading text-fg group-hover:text-[#c41230] transition-colors duration-200 text-sm" style={{ letterSpacing: "0.12em" }}>
                  {reason.title}
                </h3>
                <div className="w-16 h-px bg-[#c41230]/60 flex-shrink-0 ml-4" />
              </div>
              <p className="text-fg-dim text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
