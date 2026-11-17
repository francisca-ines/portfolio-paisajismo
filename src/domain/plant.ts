import type { Picture } from "./media";

export type Plant = {
  id: string;
  scientificName?: string;
  commonName?: string;
  traits: string[];
  picture?: Picture;
};

export type PlantIndex = ReadonlyMap<string, Plant>;

export function plantLabel(plant: Plant): string {
  return plant.scientificName ?? plant.commonName ?? plant.id;
}

export function indexPlants(plants: readonly Plant[]): PlantIndex {
  const index = new Map<string, Plant>();
  for (const plant of plants) {
    if (index.has(plant.id)) {
      throw new Error(`Planta duplicada en el catálogo: "${plant.id}"`);
    }
    index.set(plant.id, plant);
  }
  return index;
}
