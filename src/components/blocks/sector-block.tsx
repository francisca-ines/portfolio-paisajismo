import type { PlantIndex } from "@/domain/plant";
import type { SectorBlock as SectorBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { SectionTitle } from "../section-title";
import { PlantCard } from "./plant-card";
import { PlanterList } from "./planter-list";

type Props = { block: SectorBlockData; plants: PlantIndex };

export function SectorBlock({ block, plants }: Props) {
  const palette = block.plantIds.flatMap((id) => plants.get(id) ?? []);
  return (
    <section className="space-y-10">
      <SectionTitle title={block.title} />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {block.condition && (
            <p className="text-[0.65rem] uppercase tracking-label text-muted">{block.condition}</p>
          )}
          <p className="text-sm leading-relaxed">{block.text}</p>
        </div>
        {block.picture && <Figure picture={block.picture} />}
      </div>

      {palette.length > 0 && (
        <div>
          <SubHeading>Paleta vegetal</SubHeading>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {palette.map((plant) => (
              <li key={plant.id}>
                <PlantCard plant={plant} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {block.planters.length > 0 && (
        <div>
          <SubHeading>Composición por jardinera</SubHeading>
          <PlanterList planters={block.planters} plants={plants} />
        </div>
      )}
    </section>
  );
}

function SubHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-6 flex items-center gap-4 text-[0.65rem] uppercase tracking-label text-muted after:h-px after:flex-1 after:bg-line">
      {children}
    </h3>
  );
}
