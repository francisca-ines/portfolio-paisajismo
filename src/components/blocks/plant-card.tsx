import Image from "next/image";
import { plantLabel, type Plant } from "@/domain/plant";

export function PlantCard({ plant }: { plant: Plant }) {
  const label = plantLabel(plant);
  const secondary = plant.scientificName ? plant.commonName : undefined;
  return (
    <article className="space-y-3">
      {plant.picture && (
        <div className="relative aspect-square overflow-hidden bg-surface">
          <Image
            src={plant.picture.image.src}
            alt={plant.picture.alt}
            fill
            sizes="(min-width: 1024px) 20vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
      <div>
        <p className="text-[0.7rem] font-medium uppercase tracking-label">{label}</p>
        {secondary && <p className="text-xs text-muted">{secondary}</p>}
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
