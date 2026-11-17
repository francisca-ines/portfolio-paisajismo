import { z } from "zod";
import { indexPlants, type PlantIndex } from "@/domain/plant";
import type { Project } from "@/domain/project";
import { findDuplicateSlugs, findMissingPlants } from "@/domain/project-rules";
import { plants as rawPlants } from "./plants";
import { balconTerraza } from "./projects/balcon-terraza";
import { patioInterior } from "./projects/patio-interior";
import { proyectoTerraza } from "./projects/proyecto-terraza";
import { plantSchema, projectSchema } from "./schema";

export { site } from "./site";

const rawProjects: Project[] = [balconTerraza, patioInterior, proyectoTerraza];

function loadContent(): { projects: Project[]; plants: PlantIndex } {
  const projects = z.array(projectSchema).parse(rawProjects);
  const plants = indexPlants(z.array(plantSchema).parse(rawPlants));

  const duplicated = findDuplicateSlugs(projects);
  if (duplicated.length > 0) {
    throw new Error(`Slugs de proyecto repetidos: ${duplicated.join(", ")}`);
  }

  const missing = findMissingPlants(projects, plants);
  if (missing.length > 0) {
    const detail = missing.map((m) => `${m.slug} → ${m.plantId}`).join(", ");
    throw new Error(`Plantas que no están en el catálogo: ${detail}`);
  }

  return { projects, plants };
}

export const content = loadContent();
