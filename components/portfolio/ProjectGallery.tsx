"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import type { ProjectVideo } from "@/types";

interface Props {
  images: string[];
  imageAlts: string[];
  projectName: string;
  video?: ProjectVideo;
}

type MediaItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string };

export default function ProjectGallery({ images, imageAlts, projectName, video }: Props) {
  const media: MediaItem[] = [
    ...images.map((src, i) => ({ kind: "image" as const, src, alt: imageAlts[i] ?? `${projectName} — image ${i + 1}` })),
    ...(video ? [{ kind: "video" as const, src: video.src, poster: video.poster, alt: video.title }] : []),
  ];
  const count = media.length;
  const [selected, setSelected] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() => setSelected((i) => (i !== null ? (i - 1 + count) % count : null)), [count]);
  const next = useCallback(() => setSelected((i) => (i !== null ? (i + 1) % count : null)), [count]);

  // Move focus into lightbox on open; restore on close
  useEffect(() => {
    if (selected !== null) {
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "ArrowLeft") { prev(); return; }
      if (e.key === "ArrowRight") { next(); return; }
      if (e.key === "Tab") {
        const focusable = lightboxRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {media.map((item, i) => (
          <button
            key={item.src}
            onClick={(e) => { triggerRef.current = e.currentTarget as HTMLButtonElement; setSelected(i); }}
            aria-label={item.kind === "video" ? `Play video: ${item.alt}` : undefined}
            className={`relative overflow-hidden bg-surface group ${item.kind === "video" ? "cursor-pointer" : "cursor-zoom-in"} ${i === 0 ? "md:col-span-2 h-96" : "h-64"}`}
          >
            <Image
              src={item.kind === "video" ? item.poster : item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            />
            {item.kind === "video" ? (
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center drop-shadow-lg">
                  <svg className="w-7 h-7 text-[#FF3B30] ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} — ${media[selected].kind} ${selected + 1} of ${count}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {media[selected].kind === "video" ? (
              <video
                key={media[selected].src}
                src={media[selected].src}
                poster={media[selected].poster}
                aria-label={media[selected].alt}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={media[selected].src}
                alt={media[selected].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
          </div>

          {/* Close */}
          <button
            ref={closeButtonRef}
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-full"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {count > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-full"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {count > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-full"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
            {selected + 1} / {count}
          </div>
        </div>
      )}
    </>
  );
}
