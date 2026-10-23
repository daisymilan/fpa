import { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectStructuredData({ project }: Props) {
  const baseUrl = "https://www.fp-architect.com";
  const projectUrl = `${baseUrl}/portfolio/${project.slug}`;
  const isPhilippines = (project.country ?? "PH") === "PH";

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
      addressCountry: isPhilippines ? "PH" : project.country,
    },
    genre: project.type,
    keywords: [
      project.name,
      project.type,
      project.location,
      "FPA Design Consultancy",
      "Arch. Friendzel Pengi",
      ...(isPhilippines ? ["architect Philippines", "architectural design Philippines"] : []),
      `${project.type.toLowerCase().replace(/ design$/, "")} design ${project.location}`,
    ],
  };

  const video = project.video;
  const videoSchema = video && {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${projectUrl}#video`,
    name: video.title,
    description: video.description,
    thumbnailUrl: [
      `${baseUrl}${video.poster}`,
      ...(video.youtubeId ? [`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`] : []),
    ],
    ...(video.uploadDate && { uploadDate: video.uploadDate }),
    ...(video.durationSeconds && { duration: `PT${video.durationSeconds}S` }),
    contentUrl: `${baseUrl}${video.src}`,
    ...(video.youtubeId && { embedUrl: `https://www.youtube.com/embed/${video.youtubeId}` }),
    publisher: { "@id": `${baseUrl}/#business` },
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
      {videoSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      )}
    </>
  );
}
