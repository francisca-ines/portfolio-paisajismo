import Image from "next/image";
import { plantLabel, type Plant } from "@/domain/plant";
import { PhotoCredit } from "./photo-credit";

export function PlantCard({ plant }: { plant: Plant }) {
  const secondary = plant.scientificName ? plant.commonName : undefined;
  return (
    <article className="space-y-3">
      {plant.picture && (
        <div className="relative aspect-square w-full max-w-40 overflow-hidden rounded-full bg-surface">
          <Image
            src={plant.picture.image.src}
            alt={plant.picture.alt}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      )}
      <div>
        <p className="text-[0.7rem] font-medium uppercase tracking-label">{plantLabel(plant)}</p>
        {secondary && <p className="text-xs text-muted">{secondary}</p>}
      </div>
      {plant.traits.length > 0 && (
        <ul className="space-y-0.5 text-xs text-muted">
          {plant.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      )}
      <PhotoCredit picture={plant.picture} />
    </article>
  );
}
