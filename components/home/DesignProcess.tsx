"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const numbers = ["01", "02", "03", "04", "05", "06"];

export default function DesignProcess() {
  const { lang } = useLanguage();
  const tx = t[lang].process;

  return (
    <section className="section-padding bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.tag}</span>
            <div className="w-8 h-px bg-[#FF3B30]" />
          </div>
          <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            {tx.heading}
          </h2>
          <p className="text-fg-dim mt-4 max-w-2xl mx-auto text-sm">
            {tx.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
          {tx.steps.map((step, i) => (
            <div key={i} className="bg-bg-alt p-8 hover:bg-surface transition-colors duration-300 group relative">
              <div className="absolute top-0 left-0 w-0 h-px bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
              <span className="display-heading leading-none block mb-4" style={{ fontSize: "3.5rem", color: "var(--fg-ghost)" }}>
                {numbers[i]}
              </span>
              <h3 className="display-heading text-fg mb-3 group-hover:text-[#FF3B30] transition-colors duration-200" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
                {step.title}
              </h3>
              <p className="text-fg-dim text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
