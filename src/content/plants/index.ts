import type { Plant } from "@/domain/plant";
import { balconPlants } from "./balcon";
import { patioPlants } from "./patio";
import { patioTropicalPlants } from "./patio-tropical";
import { terrazaPlants } from "./terraza";

// Catálogo único de especies: cada planta se carga una sola vez.
export const plants: Plant[] = [...balconPlants, ...terrazaPlants, ...patioPlants, ...patioTropicalPlants];
