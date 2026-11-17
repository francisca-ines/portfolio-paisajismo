import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlantIndex, getProjectBySlug, getProjects } from "@/application/projects";
import { ProjectBlocks } from "@/components/blocks/project-blocks";
import { Container } from "@/components/layout/container";
import { ProjectHeader } from "@/components/projects/project-header";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.cover.image.src, alt: project.cover.alt }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Container>
      <ProjectHeader project={project} />
      <ProjectBlocks blocks={project.blocks} plants={getPlantIndex()} />
    </Container>
  );
}
