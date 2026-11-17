import Image from "next/image";
import { plantLabel, type Plant, type PlantIndex } from "@/domain/plant";
import type { PlantSelectionBlock as PlantSelectionBlockData } from "@/domain/project";
import { SectionTitle } from "../section-title";

type Props = { block: PlantSelectionBlockData; plants: PlantIndex };

export function PlantSelectionBlock({ block, plants }: Props) {
  const single = block.groups.length === 1;
  return (
    <section className="space-y-10">
      <SectionTitle title={block.title} subtitle={block.subtitle} />
      {block.text && <p className="max-w-2xl text-sm leading-relaxed">{block.text}</p>}
      <div className={single ? "" : "grid gap-12 md:grid-cols-2 lg:grid-cols-3"}>
        {block.groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-6 text-[0.7rem] font-medium uppercase tracking-label text-leaf">
              {group.title}
            </h3>
            <ul className={single ? "grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4" : "space-y-5"}>
              {group.plantIds.flatMap((id) => plants.get(id) ?? []).map((plant) => (
                <li key={plant.id}>
                  <PlantRow plant={plant} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlantRow({ plant }: { plant: Plant }) {
  const secondary = plant.scientificName ? plant.commonName : undefined;
  return (
    <div className="flex items-center gap-4">
      {plant.picture ? (
        <Image
          src={plant.picture.image.src}
          alt={plant.picture.alt}
          width={64}
          height={64}
          className="size-16 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span aria-hidden className="size-16 shrink-0 rounded-full border border-line bg-surface" />
      )}
      <div>
        <p className="text-sm italic">{plantLabel(plant)}</p>
        {secondary && <p className="text-xs text-muted">{secondary}</p>}
        {plant.traits.length > 0 && (
          <p className="mt-1 text-xs text-muted">{plant.traits.join(" · ")}</p>
        )}
      </div>
    </div>
  );
}
