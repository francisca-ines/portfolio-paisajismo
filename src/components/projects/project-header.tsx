import { statusLabels, type Project } from "@/domain/project";

export function ProjectHeader({ project }: { project: Project }) {
  const facts = [
    { label: "Tipo", value: statusLabels[project.status] },
    { label: "Ubicación", value: project.location },
    { label: "Año", value: project.year?.toString() },
    { label: "Superficie", value: project.area },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  return (
    <header className="space-y-8 py-16 text-center md:py-24">
      {project.context && (
        <p className="text-[0.65rem] font-medium uppercase tracking-label text-leaf">
          {project.context}
        </p>
      )}
      <div>
        <h1 className="text-2xl font-normal uppercase tracking-title md:text-3xl">{project.title}</h1>
        <p className="mt-3 text-xs uppercase tracking-label text-muted">{project.subtitle}</p>
      </div>
      <p className="mx-auto max-w-xl text-sm leading-relaxed">{project.summary}</p>
      <dl className="flex flex-wrap justify-center gap-x-10 gap-y-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-[0.6rem] uppercase tracking-label text-muted">{fact.label}</dt>
            <dd className="mt-1 text-xs">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
