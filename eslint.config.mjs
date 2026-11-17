import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import boundaries from "eslint-plugin-boundaries";

// Regla de capas: ver "Arquitectura" en CLAUDE.md. No desactivar para que pase.
const layers = {
  files: ["src/**/*.{ts,tsx}"],
  plugins: { boundaries },
  settings: {
    "boundaries/include": ["src/**/*"],
    "boundaries/elements": [
      { type: "domain", pattern: "src/domain" },
      { type: "content", pattern: "src/content" },
      { type: "application", pattern: "src/application" },
      { type: "app", pattern: "src/app" },
      { type: "components", pattern: "src/components" },
    ],
  },
  rules: {
    "boundaries/dependencies": [
      2,
      {
        default: "disallow",
        policies: [
          { from: { element: { type: "domain" } }, allow: { to: { element: { types: ["domain"] } } } },
          { from: { element: { type: "content" } }, allow: { to: { element: { types: ["domain", "content"] } } } },
          { from: { element: { type: "application" } }, allow: { to: { element: { types: ["domain", "content", "application"] } } } },
          { from: { element: { type: "components" } }, allow: { to: { element: { types: ["domain", "components"] } } } },
          { from: { element: { type: "app" } }, allow: { to: { element: { types: ["domain", "application", "components", "app"] } } } },
        ],
      },
    ],
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  layers,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
