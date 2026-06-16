"use client";

import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/lib/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();
  const { lang } = useLanguage();
  const tx = t[lang].projects;

  return (
    <section className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">{tx.tag}</span>
            </div>
            <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              {tx.heading1}
              <br />
              <span className="text-[#c41230]">{tx.heading2}</span>
            </h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-3 text-fg text-xs font-semibold tracking-[0.2em] uppercase group flex-shrink-0">
            {tx.cta}
            <span className="block w-8 h-px group-hover:w-14 transition-all duration-300" style={{ background: "var(--fg)" }} />
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          {/* Large featured project */}
          <div className="lg:row-span-2 group relative overflow-hidden bg-surface">
            <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
              <Image
                src={projects[0].coverImage}
                alt={projects[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.25em] uppercase block mb-2">
                  {projects[0].type} · {projects[0].location}
                </span>
                <h3 className="display-heading text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  {projects[0].name}
                </h3>
                <Link href={`/portfolio/${projects[0].slug}`} className="inline-flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase hover:text-white group/link">
                  {tx.viewProject}
                  <span className="w-6 h-px bg-white/60 group-hover/link:w-10 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Smaller projects */}
          {projects.slice(1).map((project) => (
            <div key={project.slug} className="group relative overflow-hidden bg-surface">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#c41230] text-xs font-semibold tracking-[0.25em] uppercase block mb-1">
                    {project.type} · {project.location}
                  </span>
                  <h3 className="display-heading text-white mb-3" style={{ fontSize: "1.25rem" }}>
                    {project.name}
                  </h3>
                  <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase hover:text-white group/link">
                    {tx.viewProject}
                    <span className="w-6 h-px bg-white/60 group-hover/link:w-10 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
