import Link from "next/link";
import { getFeaturedProjects, getSiteInfo } from "@/application/projects";
import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionTitle } from "@/components/section-title";

export default function HomePage() {
  const site = getSiteInfo();
  const featured = getFeaturedProjects();

  return (
    <Container>
      <section className="py-24 text-center md:py-36">
        <h1 className="text-2xl font-normal uppercase tracking-title md:text-4xl">{site.name}</h1>
        <p className="mt-4 text-xs uppercase tracking-label text-muted">{site.tagline}</p>
        <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed">{site.description}</p>
      </section>

      <section className="space-y-12">
        <SectionTitle title="Proyectos" subtitle="Selección" />
        <ProjectGrid projects={featured} />
        <div className="text-center">
          <Link
            href="/proyectos"
            className="inline-block border-b border-ink pb-1 text-[0.7rem] uppercase tracking-label"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    </Container>
  );
}
