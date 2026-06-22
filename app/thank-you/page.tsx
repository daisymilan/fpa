import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | FPA Design Consultancy",
  description: "Thank you for reaching out to FPA Design Consultancy. We will be in touch within 24 business hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="max-w-lg w-full text-center">
        <div
          className="w-16 h-16 flex items-center justify-center mx-auto mb-8"
          style={{ background: "rgba(255,59,48,0.1)", border: "1px solid rgba(255,59,48,0.2)" }}
        >
          <svg className="w-8 h-8 text-[#FF3B30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#FF3B30]" />
          <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Message Received</span>
          <div className="w-8 h-px bg-[#FF3B30]" />
        </div>

        <h1 className="display-heading text-fg mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Thank You for Reaching Out
        </h1>

        <p className="text-fg-muted text-sm leading-relaxed mb-2">
          We&apos;ve received your inquiry and will respond within 24 business hours.
        </p>
        <p className="text-fg-dim text-sm leading-relaxed mb-10">
          In the meantime, feel free to explore our portfolio or learn more about our services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E0352B] transition-colors duration-200"
          >
            View Our Work
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-10 py-4 text-fg text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200"
            style={{ border: "1px solid var(--border-strong)" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
