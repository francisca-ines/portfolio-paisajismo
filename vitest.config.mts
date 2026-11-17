import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  plugins: [
    {
      // Imita los imports de imágenes de Next (objeto con src, width y height).
      name: "static-image-import",
      enforce: "pre",
      load(id) {
        if (!/\.(jpe?g|png|webp|avif)$/i.test(id)) return null;
        return `export default ${JSON.stringify({ src: id, width: 1, height: 1 })};`;
      },
    },
  ],
  test: { include: ["src/**/*.test.ts"] },
});
