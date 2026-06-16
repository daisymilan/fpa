interface FPALogoProps {
  variant?: "dark" | "white";
  className?: string;
}

export default function FPALogo({
  className = "h-10 w-auto",
}: FPALogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className="text-2xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        <span style={{ color: "var(--logo-fg)" }}>F</span>
        <span className="text-[#FF3B30]">PA</span>
      </span>
      <div className="flex flex-col leading-none">
        <span
          className="text-[10px] tracking-[0.25em] uppercase font-medium"
          style={{ color: "var(--logo-fg)" }}
        >
          Design
        </span>
        <div className="w-full h-px bg-[#FF3B30] my-0.5" />
        <span
          className="text-[10px] tracking-[0.18em] uppercase font-medium"
          style={{ color: "var(--logo-fg)" }}
        >
          Consultancy
        </span>
      </div>
    </div>
  );
}
