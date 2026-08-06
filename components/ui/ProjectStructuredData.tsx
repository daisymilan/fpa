import { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectStructuredData({ project }: Props) {
  const baseUrl = "https://www.fp-architect.com";
  const projectUrl = `${baseUrl}/portfolio/${project.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${baseUrl}/portfolio`,
      },
      { "@type": "ListItem", position: 3, name: project.name, item: projectUrl },
    ],
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#project`,
    name: project.name,
    abstract: project.metaDescription,
    description: project.description,
    url: projectUrl,
    image: project.images.map((img) => ({
      "@type": "ImageObject",
      url: `${baseUrl}${img}`,
      contentUrl: `${baseUrl}${img}`,
    })),
    author: { "@id": `${baseUrl}/#architect` },
    creator: { "@id": `${baseUrl}/#business` },
    publisher: { "@id": `${baseUrl}/#business` },
    locationCreated: {
      "@type": "Place",
      name: project.location,
      addressCountry: "PH",
    },
    genre: project.type,
    keywords: [
      project.name,
      project.type,
      project.location,
      "FPA Design Consultancy",
      "Arch. Friendzel Pengi",
      "architect Philippines",
      "architectural design Philippines",
      `${project.type.toLowerCase()} design ${project.location}`,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
    </>
  );
}
