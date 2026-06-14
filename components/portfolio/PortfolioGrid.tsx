"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

const categories = ["All", "Residential", "Commercial", "Interior Design", "Renovation"] as const;

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.type === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 ${
              active === cat
                ? "bg-[#c41230] text-white border border-[#c41230]"
                : "text-fg-dim hover:text-fg"
            }`}
            style={active !== cat ? { border: "1px solid var(--border-strong)" } : undefined}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group block bg-bg overflow-hidden relative"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
            <div className="p-5 bg-bg group-hover:bg-surface transition-colors duration-300 relative">
              <div className="absolute top-0 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-500" />
              <span className="text-[#c41230] text-xs font-semibold tracking-widest uppercase block mb-1">
                {project.type} · {project.location}
              </span>
              <h3 className="display-heading text-fg group-hover:text-[#c41230] transition-colors duration-200" style={{ fontSize: "1.2rem" }}>
                {project.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-fg-faint">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
