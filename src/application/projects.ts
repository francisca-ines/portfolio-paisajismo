import { content, site } from "@/content";
import type { PlantIndex } from "@/domain/plant";
import type { Project } from "@/domain/project";
import type { SiteInfo } from "@/domain/site";
import { sortProjects } from "@/domain/project-rules";

export function getProjects(): Project[] {
  return sortProjects(content.projects);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return content.projects.find((project) => project.slug === slug);
}

export function getPlantIndex(): PlantIndex {
  return content.plants;
}

export function getSiteInfo(): SiteInfo {
  return site;
}
