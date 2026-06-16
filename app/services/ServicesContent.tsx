"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const numbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

export default function ServicesContent() {
  const { lang } = useLanguage();
  const tx = t[lang].servicesPage;

  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">{tx.tag}</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            {tx.heading1}
            <br />
            <span className="text-[#c41230]">{tx.heading2}</span>
          </h1>
          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed">
            {tx.desc}
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
            {tx.items.map((service, i) => (
              <div key={i} className="bg-bg p-8 group relative hover:bg-bg-alt transition-colors duration-300">
                <div className="absolute top-0 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-500" />
                <span className="display-heading block mb-5 leading-none" style={{ fontSize: "3rem", color: "var(--fg-ghost)" }}>
                  {numbers[i]}
                </span>
                <h2 className="display-heading text-fg mb-4 group-hover:text-[#c41230] transition-colors duration-200" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
                  {service.title}
                </h2>
                <p className="text-fg-dim text-sm leading-relaxed mb-6">{service.description}</p>
                <div>
                  <p className="text-xs text-fg-faint tracking-widest uppercase mb-3">{tx.delivLabel}</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-fg-dim">
                        <span className="w-1 h-1 rounded-full bg-[#c41230] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">{tx.ctaTag}</span>
              </div>
              <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                {tx.ctaHeading}
              </h2>
              <p className="text-fg-muted mt-4 text-sm leading-relaxed max-w-md">
                {tx.ctaDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#c41230] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#8b0000] transition-colors duration-200">
                {tx.ctaBtn1}
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center px-10 py-4 text-fg text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200" style={{ border: "1px solid var(--border-strong)" }}>
                {tx.ctaBtn2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
