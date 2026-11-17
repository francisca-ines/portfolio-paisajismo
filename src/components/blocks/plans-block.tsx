import type { PlansBlock as PlansBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { SectionTitle } from "../section-title";

export function PlansBlock({ block }: { block: PlansBlockData }) {
  return (
    <section className="space-y-10">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <div className="grid gap-12">
        {block.options.map((option) => (
          <div key={option.label}>
            <h3 className="mb-4 text-[0.7rem] font-medium uppercase tracking-label">
              {option.label}
            </h3>
            <Figure picture={option.picture} sizes="(min-width: 1152px) 1072px, 100vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
