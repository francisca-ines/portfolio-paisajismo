import type { Metadata } from "next";
import { getProjects } from "@/application/projects";
import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = { title: "Proyectos" };

export default function ProjectsPage() {
  return (
    <Container className="space-y-12 pt-16">
      <SectionTitle as="h1" title="Proyectos" subtitle="Diseño del paisaje" />
      <ProjectGrid projects={getProjects()} />
    </Container>
  );
}
