import { describe, expect, it } from "vitest";
import { getFeaturedProjects, getProjectBySlug, getProjects } from "./projects";

describe("project queries", () => {
  it("returns projects ordered by their order field", () => {
    const orders = getProjects().map((p) => p.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it("returns only featured projects", () => {
    expect(getFeaturedProjects().every((p) => p.featured)).toBe(true);
  });

  it("finds a project by slug and returns undefined otherwise", () => {
    expect(getProjectBySlug("balcon-terraza")?.title).toBe("Balcón / Terraza");
    expect(getProjectBySlug("no-existe")).toBeUndefined();
  });
});
