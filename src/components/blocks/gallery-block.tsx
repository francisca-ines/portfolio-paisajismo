import type { GalleryBlock as GalleryBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { SectionTitle } from "../section-title";

const kindLabels = { render: "Render", foto: "Foto" } as const;

export function GalleryBlock({ block }: { block: GalleryBlockData }) {
  const count = block.items.length;
  const layout =
    count === 2
      ? "grid items-start gap-6 md:grid-cols-2"
      : count === 3
        ? "grid items-start gap-6 sm:grid-cols-3"
        : "grid gap-10";
  const sizes = count === 1 || count > 3 ? "(min-width: 1152px) 1072px, 100vw" : "(min-width: 768px) 50vw, 100vw";
  return (
    <section className="space-y-10">
      {block.title && <SectionTitle title={block.title} subtitle={block.subtitle} />}
      {block.text && <p className="max-w-2xl text-sm leading-relaxed">{block.text}</p>}
      <div className={layout}>
        {block.items.map((item) => (
          <Figure
            key={item.image.src}
            picture={item}
            caption={kindLabels[item.kind]}
            sizes={sizes}
          />
        ))}
      </div>
    </section>
  );
}
