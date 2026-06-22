import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectStructuredData from "@/components/ui/ProjectStructuredData";

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
    title: `${project.name} — ${project.type} in ${project.location} | FPA Design Consultancy`,
    description: project.description,
    alternates: { canonical: `https://www.fp-architect.com/portfolio/${slug}` },
    openGraph: {
      title: `${project.name} | FPA Design Consultancy`,
      description: project.description,
      url: `https://www.fp-architect.com/portfolio/${slug}`,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `${project.name} — ${project.type} in ${project.location} by FPA Design Consultancy`,
        },
      ],
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
      <ProjectStructuredData project={project} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.imageAlts[0] ?? `${project.name} — ${project.type} in ${project.location} by FPA Design Consultancy`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-16">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/portfolio" className="text-white/60 text-xs tracking-widest uppercase hover:text-white transition-colors">Portfolio</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#FF3B30] text-xs tracking-widest uppercase">{project.type}</span>
          </div>
          <h1 className="display-heading text-white max-w-2xl" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>{project.name}</h1>
          <p className="text-white/60 mt-2 text-xs tracking-[0.2em] uppercase">{project.location}</p>
        </div>
      </section>

      {/* Project details */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Project Overview</span>
              </div>
              <p className="text-fg-muted leading-relaxed mb-8 text-base">{project.description}</p>
              <h2 className="display-heading text-fg mb-4" style={{ fontSize: "1.5rem" }}>Design Concept</h2>
              <p className="text-fg-muted leading-relaxed text-sm">{project.concept}</p>
            </div>

            {/* Right */}
            <div>
              <div className="bg-surface p-8 mb-8" style={{ border: "1px solid var(--border)" }}>
                <h3 className="display-heading text-fg mb-6" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>Project Details</h3>
                <div className="space-y-5">
                  {[
                    { label: "Project Type", value: project.type },
                    { label: "Location", value: project.location },
                    { label: "Architect", value: "Arch. Friendzel B. Pengi, UAP" },
                    { label: "Firm", value: "FPA Design Consultancy" },
                  ].map(({ label, value }) => (
                    <div key={label} className="pb-4 last:pb-0" style={{ borderBottom: "1px solid var(--border)" }}>
                      <p className="text-xs text-fg-faint tracking-widest uppercase mb-1">{label}</p>
                      <p className="text-fg text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="display-heading text-fg mb-5" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>Key Features</h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] flex-shrink-0 mt-1.5" />
                      <span className="text-fg-dim text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Project Gallery</span>
          </div>
          <ProjectGallery images={project.images} imageAlts={project.imageAlts} projectName={project.name} />
        </div>
      </section>

      {/* Other projects */}
      {otherProjects.length > 0 && (
        <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">More Projects</span>
              </div>
              <Link href="/portfolio" className="text-fg-dim text-xs tracking-widest uppercase hover:text-fg transition-colors">View All →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
              {otherProjects.map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block overflow-hidden bg-bg-alt">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={p.coverImage} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 bg-surface group-hover:bg-surface-2 transition-colors duration-200 relative">
                    <div className="absolute top-0 left-0 w-0 h-px bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
                    <span className="text-[#FF3B30] text-xs font-semibold tracking-widest uppercase block mb-1">{p.type} · {p.location}</span>
                    <h3 className="display-heading text-fg group-hover:text-[#FF3B30] transition-colors" style={{ fontSize: "1rem" }}>{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#FF3B30]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="display-heading text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Inspired? Let&apos;s Build Something Together.</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">Contact us to discuss your project and discover how FPA Design Consultancy can bring your vision to life.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
