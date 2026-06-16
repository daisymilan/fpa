import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="text-center max-w-md">
        <span className="text-[#FF3B30] display-heading block mb-4 leading-none" style={{ fontSize: "8rem" }}>
          404
        </span>
        <h1 className="display-heading text-fg mb-4" style={{ fontSize: "2rem" }}>
          Page Not Found
        </h1>
        <p className="text-fg-dim mb-8 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3 bg-[#FF3B30] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#E0352B] transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
