import type { Note, Picture } from "./media";

export const projectStatuses = ["propuesta", "realizado", "academico"] as const;
export type ProjectStatus = (typeof projectStatuses)[number];

export const statusLabels: Record<ProjectStatus, string> = {
  propuesta: "Propuesta",
  realizado: "Realizado",
  academico: "Trabajo académico",
};

export type PlanterItem = { plantId: string; quantity: number };

export type Planter = {
  name: string;
  size?: string;
  items: PlanterItem[];
};

export type IntroBlock = {
  type: "intro";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  text: string;
  notesTitle?: string;
  notes: Note[];
  picture?: Picture;
};

export type PlansBlock = {
  type: "plans";
  title: string;
  subtitle?: string;
  options: { label: string; picture: Picture }[];
};

export type SectorBlock = {
  type: "sector";
  title: string;
  condition?: string;
  text: string;
  picture?: Picture;
  plantIds: string[];
  planters: Planter[];
};

export type PlantGroupsBlock = {
  type: "plantGroups";
  title: string;
  subtitle?: string;
  groups: { code: string; role: string; traits: string; criterion: string }[];
};

export type ImageNotesBlock = {
  type: "imageNotes";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  picture: Picture;
  notesTitle?: string;
  notes: Note[];
};

export type GalleryBlock = {
  type: "gallery";
  title?: string;
  items: (Picture & { kind: "render" | "foto" })[];
};

export type ProjectBlock =
  | IntroBlock
  | PlansBlock
  | SectorBlock
  | PlantGroupsBlock
  | ImageNotesBlock
  | GalleryBlock;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  context?: string;
  summary: string;
  status: ProjectStatus;
  location?: string;
  year?: number;
  area?: string;
  featured: boolean;
  order: number;
  cover: Picture;
  blocks: ProjectBlock[];
};
