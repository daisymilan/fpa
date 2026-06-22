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
    name: project.name,
    description: project.description,
    url: projectUrl,
    image: project.images.map((img) => `${baseUrl}${img}`),
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#architect`,
    },
    creator: {
      "@type": "Organization",
      "@id": `${baseUrl}/#business`,
    },
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
