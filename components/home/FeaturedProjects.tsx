import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/lib/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
                Our Work
              </span>
            </div>
            <h2
              className="text-stone-900 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
              }}
            >
              Featured
              <br />
              Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-stone-900 text-sm font-semibold tracking-widest uppercase group flex-shrink-0"
          >
            Full Portfolio
            <span className="block w-8 h-px bg-stone-900 group-hover:w-14 transition-all duration-300" />
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Large featured project */}
          <div className="lg:row-span-2 group relative overflow-hidden bg-stone-100">
            <div className="relative h-80 lg:h-full min-h-80 overflow-hidden">
              <Image
                src={projects[0].coverImage}
                alt={projects[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#c41230] text-xs font-semibold tracking-widest uppercase block mb-2">
                  {projects[0].type} · {projects[0].location}
                </span>
                <h3
                  className="text-white mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                  }}
                >
                  {projects[0].name}
                </h3>
                <Link
                  href={`/portfolio/${projects[0].slug}`}
                  className="inline-flex items-center gap-2 text-white/80 text-sm hover:text-white group/link"
                >
                  View Project
                  <span className="w-6 h-px bg-white/60 group-hover/link:w-10 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Smaller projects */}
          {projects.slice(1).map((project) => (
            <div
              key={project.slug}
              className="group relative overflow-hidden bg-stone-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#c41230] text-xs font-semibold tracking-widest uppercase block mb-1">
                    {project.type} · {project.location}
                  </span>
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.375rem",
                      fontWeight: 600,
                    }}
                  >
                    {project.name}
                  </h3>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-white/80 text-sm hover:text-white group/link"
                  >
                    View Project
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
