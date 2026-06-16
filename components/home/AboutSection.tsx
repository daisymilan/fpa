"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const statValues = ["UAP", "SO2", "Global", "360°"];

export default function AboutSection() {
  const { lang } = useLanguage();
  const tx = t[lang].about;

  return (
    <section className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#FF3B30]" />
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
                {tx.tag}
              </span>
            </div>

            <h2 className="display-heading text-fg mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              {tx.heading1}
              <br />
              <span className="text-[#FF3B30]">{tx.heading2}</span>
            </h2>

            <p className="text-fg-muted leading-relaxed mb-5 text-sm">
              {tx.p1}
            </p>

            <p className="text-fg-muted leading-relaxed mb-10 text-sm">
              {tx.p2}
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-fg text-xs font-semibold tracking-[0.2em] uppercase group"
            >
              {tx.cta}
              <span className="block w-8 h-px group-hover:w-14 transition-all duration-300" style={{ background: "var(--fg)" }} />
            </Link>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-[1px]" style={{ background: "var(--gap-color)" }}>
            {statValues.map((value, i) => (
              <div key={value} className="bg-bg p-8 flex flex-col justify-between min-h-[160px] hover:bg-surface transition-colors group">
                <span className="text-[#FF3B30] leading-none mb-4 display-heading" style={{ fontSize: "2.5rem" }}>
                  {value}
                </span>
                <span className="text-fg-dim text-sm leading-snug">{tx.statLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
