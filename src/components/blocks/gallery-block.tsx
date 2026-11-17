import type { GalleryBlock as GalleryBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { SectionTitle } from "../section-title";

const kindLabels = { render: "Render", foto: "Foto" } as const;

export function GalleryBlock({ block }: { block: GalleryBlockData }) {
  const paired = block.items.length === 2;
  return (
    <section className="space-y-10">
      {block.title && <SectionTitle title={block.title} subtitle={block.subtitle} />}
      {block.text && <p className="max-w-2xl text-sm leading-relaxed">{block.text}</p>}
      <div className={paired ? "grid items-start gap-6 md:grid-cols-2" : "grid gap-10"}>
        {block.items.map((item) => (
          <Figure
            key={item.image.src}
            picture={item}
            caption={kindLabels[item.kind]}
            sizes={paired ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1152px) 1072px, 100vw"}
          />
        ))}
      </div>
    </section>
  );
}
