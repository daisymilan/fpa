const steps = [
  { number: "01", title: "Discovery & Brief", description: "We begin with an in-depth consultation to understand your vision, program requirements, site conditions, and budget parameters. This forms the foundation of every design decision." },
  { number: "02", title: "Concept Design", description: "Our team develops schematic design options, translating your brief into spatial concepts, massing studies, and preliminary layouts for your review and feedback." },
  { number: "03", title: "Design Development", description: "The approved concept is refined into detailed architectural drawings, material selections, 3D visualizations, and coordinated engineering requirements." },
  { number: "04", title: "Permit Documentation", description: "We prepare and process all building permit documents in compliance with the National Building Code of the Philippines and local government unit requirements." },
  { number: "05", title: "Construction Supervision", description: "We provide on-site supervision and project management throughout the construction phase, ensuring that the built work matches the approved design with the highest standard of quality." },
  { number: "06", title: "Project Completion", description: "Final inspection, punch-list resolution, and project turnover. We ensure your space is delivered exactly as envisioned — ready for occupancy." },
];

export default function DesignProcess() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">How We Work</span>
            <div className="w-8 h-px bg-[#c41230]" />
          </div>
          <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Our Design Process
          </h2>
          <p className="text-fg-dim mt-4 max-w-2xl mx-auto text-sm">
            A structured, client-centered process that ensures clarity, transparency, and exceptional outcomes at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
          {steps.map((step) => (
            <div key={step.number} className="bg-bg-alt p-8 hover:bg-surface transition-colors duration-300 group relative">
              <div className="absolute top-0 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-500" />
              <span className="display-heading leading-none block mb-4" style={{ fontSize: "3.5rem", color: "var(--fg-ghost)" }}>
                {step.number}
              </span>
              <h3 className="display-heading text-fg mb-3 group-hover:text-[#c41230] transition-colors duration-200" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
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
