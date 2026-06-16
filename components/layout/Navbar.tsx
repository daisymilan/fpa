"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FPALogo from "@/components/ui/FPALogo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();
  const tx = t[lang];

  const navItems = [
    { href: "/", label: tx.nav.home },
    { href: "/about", label: tx.nav.about },
    { href: "/services", label: tx.nav.services },
    { href: "/portfolio", label: tx.nav.portfolio },
    { href: "/contact", label: tx.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm py-3 border-b" : "bg-transparent py-0"
      }`}
      style={scrolled ? { background: "var(--nav-bg)", borderBottomColor: "var(--border)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <FPALogo className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-200 ${
                  pathname === link.href ? "text-[#FF3B30]" : ""
                }`}
                style={pathname !== link.href ? { color: "var(--nav-link)" } : undefined}
                onMouseEnter={(e) => pathname !== link.href && ((e.target as HTMLElement).style.color = "var(--nav-link-hover)")}
                onMouseLeave={(e) => pathname !== link.href && ((e.target as HTMLElement).style.color = "var(--nav-link)")}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <LanguageSelector />
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 border border-[#FF3B30] text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#FF3B30] hover:text-white transition-all duration-200"
            >
              {tx.nav.quote}
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <LanguageSelector />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className="block h-px w-full transition-all duration-300" style={{ background: "var(--fg)", transform: menuOpen ? "rotate(45deg) translateY(8px)" : undefined }} />
                <span className="block h-px w-full transition-all duration-300" style={{ background: "var(--fg)", opacity: menuOpen ? 0 : 1 }} />
                <span className="block h-px w-full transition-all duration-300" style={{ background: "var(--fg)", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : undefined }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "var(--bg)", borderTopColor: "var(--border)" }}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-xs font-medium tracking-[0.2em] uppercase border-b transition-colors ${
                pathname === link.href ? "text-[#FF3B30]" : ""
              }`}
              style={{
                borderBottomColor: "var(--border)",
                color: pathname === link.href ? undefined : "var(--nav-link)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 py-3 border border-[#FF3B30] text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase text-center hover:bg-[#FF3B30] hover:text-white transition-all"
          >
            {tx.nav.quote}
          </Link>
        </nav>
      </div>
    </header>
  );
}
