import type { Plant } from "@/domain/plant";
import { Figure } from "../figure";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <article className="space-y-3">
      {plant.picture ? (
        <Figure picture={plant.picture} sizes="(min-width: 1024px) 20vw, 50vw" />
      ) : (
        <div aria-hidden className="aspect-[3/4] border border-line bg-surface" />
      )}
      <div>
        <p className="text-[0.7rem] font-medium uppercase tracking-label">{plant.scientificName}</p>
        <p className="text-xs text-muted">{plant.commonName}</p>
      </div>
      {plant.traits.length > 0 && (
        <ul className="space-y-0.5 text-xs text-muted">
          {plant.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
