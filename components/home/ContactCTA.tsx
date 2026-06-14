import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-[#f9f8f6] relative overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 opacity-5"
        style={{
          background:
            "repeating-linear-gradient(45deg, #c41230 0, #c41230 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
              Start Your Project
            </span>
          </div>

          <h2
            className="text-stone-900 mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
            }}
          >
            Ready to Build Something
            <br />
            <span className="text-[#c41230]">Exceptional?</span>
          </h2>

          <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-xl">
            Whether you are planning a new home, a commercial building, or an
            interior renovation — we would love to hear about your project. Get
            in touch for a no-obligation consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#c41230] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#8b0000] transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+639454221874"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-stone-300 text-stone-800 text-sm font-semibold tracking-widest uppercase hover:border-stone-800 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 mt-12 pt-10 border-t border-stone-200">
            <div>
              <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">
                Email
              </p>
              <a
                href="mailto:fpadesignconsultancy@gmail.com"
                className="text-stone-700 text-sm hover:text-[#c41230] transition-colors"
              >
                fpadesignconsultancy@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">
                Phone
              </p>
              <div className="flex flex-col gap-0.5">
                <a
                  href="tel:+63744244644"
                  className="text-stone-700 text-sm hover:text-[#c41230] transition-colors"
                >
                  (074) 424 4644
                </a>
                <a
                  href="tel:+639454221874"
                  className="text-stone-700 text-sm hover:text-[#c41230] transition-colors"
                >
                  0945 422 1874
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">
                Location
              </p>
              <p className="text-stone-700 text-sm">
                Baguio City, Benguet, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
