const reasons = [
  {
    title: "Legal Compliance",
    description: "A licensed architect ensures your project complies with the National Building Code of the Philippines, local zoning laws, and safety regulations — protecting you from legal liability and costly corrections.",
  },
  {
    title: "Structural Safety",
    description: "Architects design with structural integrity in mind, coordinating with structural engineers to ensure your building is safe, durable, and engineered for local conditions including seismic and typhoon loads.",
  },
  {
    title: "Long-Term Cost Savings",
    description: "Proper design planning eliminates costly change orders during construction. An architect optimizes your floor plan, materials, and systems — reducing waste and maximizing the value of every peso spent.",
  },
  {
    title: "Optimized Space Planning",
    description: "Great architecture is about making every square meter work harder. Architects create spaces that flow naturally, feel generous, and serve your daily life far better than an unplanned structure ever could.",
  },
  {
    title: "Climate-Responsive Design",
    description: "Baguio's cool highland climate and the Philippines' typhoon and seismic exposure demand specific design strategies. We design buildings that respond intelligently to local conditions for comfort, durability, and energy efficiency.",
  },
  {
    title: "Project Coordination",
    description: "Your architect is the single point of accountability, coordinating engineers, contractors, and suppliers to keep your project on schedule, on budget, and aligned with your original vision.",
  },
];

export default function WhyArchitect() {
  return (
    <section className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">The Value of Professional Design</span>
            </div>
            <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Why Hire a Licensed
              <br />
              Architect?
            </h2>
          </div>
          <p className="text-fg-muted leading-relaxed text-sm">
            Building without professional design guidance is one of the most common and costly mistakes a property owner can make. Here is why working with a licensed architect protects your investment.
          </p>
        </div>

        {/* Capabilities list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0" style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`py-8 px-0 flex flex-col gap-3 group ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
              style={{
                borderRight: i % 2 === 0 ? `1px solid var(--border)` : undefined,
                borderBottom: i < reasons.length - 2 ? `1px solid var(--border)` : undefined,
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
