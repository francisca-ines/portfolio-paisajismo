import type { PlantGroupsBlock as PlantGroupsBlockData } from "@/domain/project";
import { SectionTitle } from "../section-title";

export function PlantGroupsBlock({ block }: { block: PlantGroupsBlockData }) {
  return (
    <section className="space-y-8">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      <ul className="grid gap-x-12 md:grid-cols-2">
        {block.groups.map((group) => (
          <li key={group.code} className="grid grid-cols-[4rem_1fr] gap-x-4 border-b border-line py-4">
            <span className="text-xs font-medium text-leaf">{group.code}</span>
            <div>
              <p className="text-sm font-medium">{group.role}</p>
              <p className="mt-1 text-xs text-muted">{group.traits}</p>
              <p className="mt-2 text-xs">{group.criterion}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
