import { notFound } from "next/navigation";
import { INITIAL_PROJECTS } from "@/lib/siteData";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  const params = [];
  INITIAL_PROJECTS.forEach((proj) => {
    if (proj.id) params.push({ id: proj.id });
    if (proj.slug) params.push({ id: proj.slug });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = INITIAL_PROJECTS.find(
    (p) => p.id === id || p.slug === id
  );

  if (!project) {
    return {
      title: "Project Not Found | Gamal Ahmed",
      description: "The requested project could not be found."
    };
  }

  const title = `${project.title} | Gamal Ahmed`;
  const description = project.description || project.tagline;

  return {
    title,
    description,
    alternates: {
      canonical: `https://gamalahmed.dev/projects/${project.slug || project.id}`
    },
    openGraph: {
      title,
      description,
      url: `https://gamalahmed.dev/projects/${project.slug || project.id}`,
      type: "article",
      images: [
        {
          url: project.image || "/projectImage/image.webp",
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image || "/projectImage/image.webp"]
    }
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const projectIndex = INITIAL_PROJECTS.findIndex(
    (p) => p.id === id || p.slug === id
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = INITIAL_PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? INITIAL_PROJECTS[projectIndex - 1] : null;
  const nextProject =
    projectIndex < INITIAL_PROJECTS.length - 1
      ? INITIAL_PROJECTS[projectIndex + 1]
      : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}

