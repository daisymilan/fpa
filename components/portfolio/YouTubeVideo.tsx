"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  poster: string;
}

// Shows the poster with a play button and only loads YouTube's player (privacy-enhanced domain)
// once the visitor clicks, so the project page stays fast and sets no YouTube cookies before then.
export default function YouTubeVideo({ id, title, poster }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          <Image src={poster} alt="" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          <span className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-20 rounded-full bg-[#FF3B30] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-2xl">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
