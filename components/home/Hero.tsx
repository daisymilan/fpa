"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const slideImages = [
  { src: "/images/hero/hero-1.jpg", alt: "FPA Design Consultancy — Modern Office Building", idx: 0 },
  { src: "/images/hero/hero-2.jpg", alt: "FPA Design Consultancy — Luxury Residential Home at Dusk", idx: 1 },
  { src: "/images/hero/hero-3.jpg", alt: "FPA Design Consultancy — Contemporary Bungalow", idx: 2 },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { lang } = useLanguage();
  const tx = t[lang].hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slideImages.length);
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
      {slideImages.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? (animating ? "opacity-0" : "opacity-100") : "opacity-0"
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
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
              {tx.labels[current]}
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
            {tx.heading1}
            <br />
            <span className="text-[#FF3B30]">{tx.heading2}</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            {tx.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF3B30] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#E0352B] transition-colors duration-200"
            >
              {tx.cta1}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/60 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors duration-200"
            >
              {tx.cta2}
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-6 lg:left-8 flex gap-2">
          {slideImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 ${
                i === current ? "w-8 h-1 bg-[#FF3B30]" : "w-4 h-1 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
