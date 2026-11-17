import { plantLabel, type PlantIndex } from "@/domain/plant";
import type { Planter } from "@/domain/project";
import { Figure } from "../figure";

type Props = { planters: Planter[]; plants: PlantIndex };

export function PlanterList({ planters, plants }: Props) {
  const columns = planters.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ul className={`grid gap-10 ${columns}`}>
      {planters.map((planter) => (
        <li key={planter.name} className="space-y-4">
          {planter.picture && (
            <Figure picture={planter.picture} sizes="(min-width: 768px) 33vw, 100vw" />
          )}
          <div className="border-t border-line pt-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-label">{planter.name}</p>
            {planter.size && <p className="text-xs text-muted">{planter.size}</p>}
            <ul className="mt-3 space-y-1 text-sm">
              {planter.items.map((item) => {
                const plant = plants.get(item.plantId);
                return (
                  <li key={item.plantId}>
                    <span className="mr-2 text-muted">{item.quantity} ×</span>
                    {plant ? plantLabel(plant) : item.plantId}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
