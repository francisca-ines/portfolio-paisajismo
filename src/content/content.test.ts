import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { referencedPlantIds } from "@/domain/project-rules";
import { content } from "./index";

const projectsDir = join(__dirname, "projects");

describe("content", () => {
  it("loads and validates every project", () => {
    expect(content.projects.length).toBeGreaterThan(0);
  });

  it("registers every project folder", () => {
    const folders = readdirSync(projectsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
    const slugs = content.projects.map((p) => p.slug).sort();
    expect(slugs).toEqual(folders);
  });

  it("gives every plant used in a project a photo", () => {
    const used = new Set(content.projects.flatMap(referencedPlantIds));
    const missing = [...used].filter((id) => !content.plants.get(id)?.picture);
    expect(missing).toEqual([]);
  });

  it("only references image files that exist", () => {
    const sources = JSON.stringify(content).match(/"src":"([^"]+)"/g) ?? [];
    for (const match of sources) {
      const path = match.slice(7, -1);
      expect(existsSync(path), path).toBe(true);
    }
  });
});
