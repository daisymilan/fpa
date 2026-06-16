"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const numbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

export default function ServicesSection() {
  const { lang } = useLanguage();
  const tx = t[lang].services;

  return (
    <section className="section-padding bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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
          <Link href="/services" className="inline-flex items-center gap-3 text-fg text-xs font-semibold tracking-[0.2em] uppercase group flex-shrink-0">
            {tx.cta}
            <span className="block w-8 h-px group-hover:w-14 transition-all duration-300" style={{ background: "var(--fg)" }} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
          {tx.items.map((service, i) => (
            <div key={i} className="bg-bg-alt p-8 hover:bg-surface transition-colors duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-500" />
              <span className="text-[#c41230] text-xs font-medium tracking-widest block mb-4">{numbers[i]}</span>
              <h3 className="display-heading text-fg mb-3 group-hover:text-[#c41230] transition-colors duration-200" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
                {service.title}
              </h3>
              <p className="text-fg-dim text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
