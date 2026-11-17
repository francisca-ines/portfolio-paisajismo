import { describe, expect, it } from "vitest";
import { indexPlants, type Plant } from "./plant";
import type { Project } from "./project";
import { findDuplicateSlugs, findMissingPlants, referencedPlantIds, sortProjects } from "./project-rules";

const picture = { image: { src: "/x.jpg", width: 1, height: 1 }, alt: "x" };

function project(overrides: Partial<Project> = {}): Project {
  return {
    slug: "p",
    title: "P",
    subtitle: "S",
    summary: "R",
    status: "propuesta",
    featured: false,
    order: 0,
    cover: picture,
    blocks: [
      {
        type: "sector",
        title: "Sector",
        text: "t",
        plantIds: ["a"],
        planters: [{ name: "M", items: [{ plantId: "b", quantity: 2 }] }],
      },
    ],
    ...overrides,
  };
}

const plant = (id: string): Plant => ({ id, scientificName: id, commonName: id, traits: [] });

describe("project rules", () => {
  it("collects plant ids from palettes and planters", () => {
    expect(referencedPlantIds(project()).sort()).toEqual(["a", "b"]);
  });

  it("reports plants missing from the catalog", () => {
    const missing = findMissingPlants([project()], indexPlants([plant("a")]));
    expect(missing).toEqual([{ slug: "p", plantId: "b" }]);
  });

  it("reports duplicated slugs", () => {
    expect(findDuplicateSlugs([project(), project(), project({ slug: "q" })])).toEqual(["p"]);
  });

  it("sorts by order without mutating the input", () => {
    const input = [project({ slug: "b", order: 2 }), project({ slug: "a", order: 1 })];
    expect(sortProjects(input).map((p) => p.slug)).toEqual(["a", "b"]);
    expect(input[0].slug).toBe("b");
  });

  it("rejects duplicated plants in the catalog", () => {
    expect(() => indexPlants([plant("a"), plant("a")])).toThrow();
  });
});
