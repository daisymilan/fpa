import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-[#0d0d0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Start Your Project</span>
          </div>

          <h2 className="display-heading text-white mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Ready to Build
            <br />
            Something{" "}
            <span className="text-[#c41230]">Exceptional?</span>
          </h2>

          <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-xl">
            Whether you are planning a new home, a commercial building, or an
            interior renovation — we would love to hear about your project. Get
            in touch for a no-obligation consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#c41230] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#8b0000] transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+639454221874"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:border-white transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 mt-12 pt-10 border-t border-white/10">
            <div>
              <p className="text-xs text-stone-600 tracking-widest uppercase mb-1">Email</p>
              <a href="mailto:fpadesignconsultancy@gmail.com" className="text-stone-400 text-sm hover:text-white transition-colors">
                fpadesignconsultancy@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-stone-600 tracking-widest uppercase mb-1">Phone</p>
              <div className="flex flex-col gap-0.5">
                <a href="tel:+63744244644" className="text-stone-400 text-sm hover:text-white transition-colors">(074) 424 4644</a>
                <a href="tel:+639454221874" className="text-stone-400 text-sm hover:text-white transition-colors">0945 422 1874</a>
              </div>
            </div>
            <div>
              <p className="text-xs text-stone-600 tracking-widest uppercase mb-1">Location</p>
              <p className="text-stone-400 text-sm">Baguio City, Benguet, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
