import type { GalleryBlock as GalleryBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { SectionTitle } from "../section-title";

const kindLabels = { render: "Render", foto: "Foto" } as const;

export function GalleryBlock({ block }: { block: GalleryBlockData }) {
  return (
    <section className="space-y-10">
      {block.title && <SectionTitle title={block.title} />}
      <div className="grid gap-10">
        {block.items.map((item) => (
          <Figure
            key={item.image.src}
            picture={item}
            caption={kindLabels[item.kind]}
            sizes="(min-width: 1152px) 1072px, 100vw"
          />
        ))}
      </div>
    </section>
  );
}
