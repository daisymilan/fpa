"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "FPA Design Consultancy — Modern Office Building",
    label: "Commercial Architecture",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "FPA Design Consultancy — Luxury Residential Home at Dusk",
    label: "Residential Design",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "FPA Design Consultancy — Contemporary Bungalow",
    label: "Modern Living",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 700);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current
              ? animating
                ? "opacity-0"
                : "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Category label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
              {slides[current].label}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-white mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 600,
            }}
          >
            Designing Spaces.
            <br />
            <span className="text-[#c41230]">Building Futures.</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            FPA Design Consultancy delivers premium architectural design,
            interior design, and construction management services across Baguio
            City and Northern Luzon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c41230] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#8b0000] transition-colors duration-200"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/60 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors duration-200"
            >
              Get a Consultation
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-6 lg:left-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-8 h-1 bg-[#c41230]"
                  : "w-4 h-1 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-6 lg:right-8 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 mb-6 whitespace-nowrap">
            Scroll Down
          </span>
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-white/70 h-1/2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
