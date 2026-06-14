import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.type} in ${project.location}`,
    description: project.description,
    alternates: {
      canonical: `https://fpadesignconsultancy.com/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.name} | FPA Design Consultancy`,
      description: project.description,
      images: [{ url: project.coverImage, alt: project.name }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-16">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/portfolio"
              className="text-white/60 text-xs tracking-widest uppercase hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#c41230] text-xs tracking-widest uppercase">
              {project.type}
            </span>
          </div>
          <h1
            className="text-white leading-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
            }}
          >
            {project.name}
          </h1>
          <p className="text-white/60 mt-2 text-sm tracking-wider uppercase">
            {project.location}
          </p>
        </div>
      </section>

      {/* Project details */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Description + Concept */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
                  Project Overview
                </span>
              </div>
              <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                {project.description}
              </p>

              <h2
                className="text-stone-900 mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Design Concept
              </h2>
              <p className="text-stone-600 leading-relaxed">{project.concept}</p>
            </div>

            {/* Right: Project info + Key features */}
            <div>
              <div className="bg-[#f9f8f6] p-8 mb-8">
                <h3
                  className="text-stone-900 mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">
                      Project Type
                    </p>
                    <p className="text-stone-700 text-sm font-medium">
                      {project.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">
                      Location
                    </p>
                    <p className="text-stone-700 text-sm font-medium">
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">
                      Architect
                    </p>
                    <p className="text-stone-700 text-sm font-medium">
                      Arch. Friendzel B. Pengi, UAP
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">
                      Firm
                    </p>
                    <p className="text-stone-700 text-sm font-medium">
                      FPA Design Consultancy
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="text-stone-900 mb-5"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c41230] flex-shrink-0 mt-1.5" />
                      <span className="text-stone-600 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
              Project Gallery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <div
                key={img}
                className={`relative overflow-hidden bg-stone-100 ${
                  i === 0 ? "md:col-span-2 h-96" : "h-64"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.name} — image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes={
                    i === 0
                      ? "100vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other projects */}
      {otherProjects.length > 0 && (
        <section className="section-padding bg-[#f9f8f6]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
                  More Projects
                </span>
              </div>
              <Link
                href="/portfolio"
                className="text-stone-600 text-sm hover:text-[#c41230] transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group block overflow-hidden bg-white"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[#c41230] text-xs font-semibold tracking-widest uppercase block mb-1">
                      {p.type} · {p.location}
                    </span>
                    <h3
                      className="text-stone-900 group-hover:text-[#c41230] transition-colors"
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "1.125rem",
                        fontWeight: 600,
                      }}
                    >
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#c41230]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
            }}
          >
            Inspired? Let&apos;s Build Something Together.
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contact us to discuss your project and discover how FPA Design
            Consultancy can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#c41230] text-sm font-semibold tracking-widest uppercase hover:bg-stone-50 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
