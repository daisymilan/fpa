import Link from "next/link";

const stats = [
  { value: "UAP", label: "Member, United Architects of the Philippines" },
  { value: "SO2", label: "Certified Safety Officer" },
  { value: "9+", label: "Provinces Served Across Northern Luzon" },
  { value: "360°", label: "Full-Service Architecture & Design" },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
                About the Firm
              </span>
            </div>

            <h2 className="display-heading text-white mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Architecture Rooted in
              <br />
              <span className="text-[#c41230]">Purpose and Craft</span>
            </h2>

            <p className="text-stone-400 leading-relaxed mb-5">
              FPA Design Consultancy is a licensed architectural practice based
              in Baguio City, founded and led by Arch. Friendzel B. Pengi, UAP.
              We provide comprehensive architectural and design services to
              residential and commercial clients across Benguet, La Union,
              Pangasinan, Ifugao, and the wider Northern Luzon region.
            </p>

            <p className="text-stone-400 leading-relaxed mb-10">
              Our approach is rooted in the belief that every project — from a
              family home to a commercial building — deserves rigorous design
              thinking, climate-responsive planning, and meticulous execution.
              We guide clients from initial concept through building permit
              approval and construction completion.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-white text-xs font-semibold tracking-[0.2em] uppercase group"
            >
              Meet the Architect
              <span className="block w-8 h-px bg-white group-hover:w-14 transition-all duration-300" />
            </Link>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-[#0a0a0a] p-8 flex flex-col justify-between min-h-[160px] hover:bg-[#111111] transition-colors group">
                <span className="text-[#c41230] leading-none mb-4 display-heading" style={{ fontSize: "2.5rem" }}>
                  {stat.value}
                </span>
                <span className="text-stone-500 text-sm leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
