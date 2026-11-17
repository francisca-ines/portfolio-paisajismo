import type { PlantIndex } from "./plant";
import type { Project } from "./project";

export function referencedPlantIds(project: Project): string[] {
  const ids = new Set<string>();
  for (const block of project.blocks) {
    if (block.type !== "sector") continue;
    block.plantIds.forEach((id) => ids.add(id));
    block.planters.forEach((p) => p.items.forEach((i) => ids.add(i.plantId)));
  }
  return [...ids];
}

export function findMissingPlants(
  projects: readonly Project[],
  plants: PlantIndex,
): { slug: string; plantId: string }[] {
  return projects.flatMap((project) =>
    referencedPlantIds(project)
      .filter((id) => !plants.has(id))
      .map((plantId) => ({ slug: project.slug, plantId })),
  );
}

export function findDuplicateSlugs(projects: readonly Project[]): string[] {
  const seen = new Set<string>();
  const duplicated = new Set<string>();
  for (const { slug } of projects) {
    if (seen.has(slug)) duplicated.add(slug);
    seen.add(slug);
  }
  return [...duplicated];
}

export function sortProjects(projects: readonly Project[]): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
