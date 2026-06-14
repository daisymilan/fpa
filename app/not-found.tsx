import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <span
          className="text-[#c41230] block mb-4 leading-none"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "8rem",
            fontWeight: 700,
          }}
        >
          404
        </span>
        <h1
          className="text-stone-900 mb-4"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "2rem",
            fontWeight: 600,
          }}
        >
          Page Not Found
        </h1>
        <p className="text-stone-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#c41230] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#8b0000] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
