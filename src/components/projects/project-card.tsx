import Image from "next/image";
import Link from "next/link";
import { statusLabels, type Project } from "@/domain/project";

export function ProjectCard({ project }: { project: Project }) {
  const { cover } = project;
  return (
    <Link href={`/proyectos/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={cover.image.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-normal uppercase tracking-title">{project.title}</h3>
        <p className="text-[0.65rem] uppercase tracking-label text-muted">
          {project.subtitle} · {statusLabels[project.status]}
        </p>
      </div>
    </Link>
  );
}
