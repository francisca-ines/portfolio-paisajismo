import type { PlantIndex } from "@/domain/plant";
import type { Planter } from "@/domain/project";

type Props = { planters: Planter[]; plants: PlantIndex };

export function PlanterList({ planters, plants }: Props) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {planters.map((planter) => (
        <li key={planter.name} className="border-t border-line pt-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-label">{planter.name}</p>
          {planter.size && <p className="text-xs text-muted">{planter.size}</p>}
          <ul className="mt-3 space-y-1 text-sm">
            {planter.items.map((item) => (
              <li key={item.plantId}>
                <span className="mr-2 text-muted">{item.quantity} ×</span>
                {plants.get(item.plantId)?.scientificName}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
