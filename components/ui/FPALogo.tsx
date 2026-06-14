import Image from "next/image";

interface FPALogoProps {
  variant?: "dark" | "white";
  className?: string;
}

export default function FPALogo({
  variant = "dark",
  className = "h-10 w-auto",
}: FPALogoProps) {
  if (variant === "white") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span
          className="font-serif text-2xl font-bold tracking-tight text-white"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          <span className="text-white">F</span>
          <span className="text-[#c41230]">PA</span>
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white font-medium">
            Design
          </span>
          <div className="w-full h-px bg-[#c41230] my-0.5" />
          <span className="text-[10px] tracking-[0.18em] uppercase text-white font-medium">
            Consultancy
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className="font-serif text-2xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        <span className="text-stone-900">F</span>
        <span className="text-[#c41230]">PA</span>
      </span>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] tracking-[0.25em] uppercase text-stone-800 font-medium">
          Design
        </span>
        <div className="w-full h-px bg-[#c41230] my-0.5" />
        <span className="text-[10px] tracking-[0.18em] uppercase text-stone-800 font-medium">
          Consultancy
        </span>
      </div>
    </div>
  );
}
