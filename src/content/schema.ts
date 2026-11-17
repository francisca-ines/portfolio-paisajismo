import { z } from "zod";
import type { Plant } from "@/domain/plant";
import { projectStatuses, type Project } from "@/domain/project";

const text = z.string().trim().min(1);

const imageSource = z.object({
  src: text,
  width: z.number().positive(),
  height: z.number().positive(),
  blurDataURL: z.string().optional(),
});

const picture = z.object({
  image: imageSource,
  alt: text,
});

const note = z.object({ title: text, text });

const planter = z.object({
  name: text,
  size: text.optional(),
  items: z
    .array(z.object({ plantId: text, quantity: z.number().int().positive() }))
    .min(1),
  picture: picture.optional(),
});

const block = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("intro"),
    eyebrow: text.optional(),
    title: text,
    subtitle: text.optional(),
    text,
    notesTitle: text.optional(),
    notes: z.array(note),
    picture: picture.optional(),
  }),
  z.object({
    type: z.literal("plans"),
    title: text,
    subtitle: text.optional(),
    options: z.array(z.object({ label: text, picture })).min(1),
  }),
  z.object({
    type: z.literal("sector"),
    title: text,
    condition: text.optional(),
    text,
    picture: picture.optional(),
    plantIds: z.array(text),
    planters: z.array(planter),
  }),
  z.object({
    type: z.literal("plantGroups"),
    title: text,
    subtitle: text.optional(),
    groups: z
      .array(z.object({ code: text, role: text, traits: text, criterion: text }))
      .min(1),
  }),
  z.object({
    type: z.literal("imageNotes"),
    eyebrow: text.optional(),
    title: text,
    subtitle: text.optional(),
    picture,
    notesTitle: text.optional(),
    notes: z.array(note),
  }),
  z.object({
    type: z.literal("gallery"),
    title: text.optional(),
    subtitle: text.optional(),
    text: text.optional(),
    items: z
      .array(picture.extend({ kind: z.enum(["render", "foto"]) }))
      .min(1),
  }),
  z.object({
    type: z.literal("plantSelection"),
    title: text,
    subtitle: text.optional(),
    text: text.optional(),
    groups: z.array(z.object({ title: text, plantIds: z.array(text).min(1) })).min(1),
  }),
]);

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "slug en kebab-case"),
  title: text,
  subtitle: text,
  context: text.optional(),
  summary: text,
  status: z.enum(projectStatuses),
  location: text.optional(),
  year: z.number().int().min(1990).max(2100).optional(),
  area: text.optional(),
  featured: z.boolean(),
  order: z.number().int(),
  cover: picture,
  blocks: z.array(block).min(1),
}) satisfies z.ZodType<Project>;

export const plantSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
    scientificName: text.optional(),
    commonName: text.optional(),
    traits: z.array(text),
    picture: picture.optional(),
  })
  .refine((plant) => plant.scientificName ?? plant.commonName, {
    message: "La planta necesita nombre científico o nombre común",
  }) satisfies z.ZodType<Plant>;
