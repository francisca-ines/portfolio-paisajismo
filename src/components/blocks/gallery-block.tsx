import Image from "next/image";
import type { GalleryBlock as GalleryBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { SectionTitle } from "../section-title";

const kindLabels = { render: "Render", foto: "Foto" } as const;

type Item = GalleryBlockData["items"][number];

export function GalleryBlock({ block }: { block: GalleryBlockData }) {
  const count = block.items.length;
  const tiled = count === 2 || count === 3;
  return (
    <section className="space-y-10">
      {block.title && <SectionTitle title={block.title} subtitle={block.subtitle} />}
      {block.text && <p className="max-w-2xl text-sm leading-relaxed">{block.text}</p>}
      {tiled ? (
        <div className={`grid gap-6 ${count === 2 ? "md:grid-cols-2" : "sm:grid-cols-3"}`}>
          {block.items.map((item) => (
            <Tile key={item.image.src} item={item} square={count === 3} />
          ))}
        </div>
      ) : (
        <div className="grid gap-10">
          {block.items.map((item) => (
            <Figure
              key={item.image.src}
              picture={item}
              caption={item.caption ?? kindLabels[item.kind]}
              sizes="(min-width: 1152px) 1072px, 100vw"
            />
          ))}
        </div>
      )}
    </section>
  );
}

function Tile({ item, square }: { item: Item; square: boolean }) {
  return (
    <figure>
      <div className={`relative overflow-hidden bg-surface ${square ? "aspect-square" : "aspect-[4/3]"}`}>
        <Image
          src={item.image.src}
          alt={item.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-[0.65rem] uppercase tracking-label text-muted">
        {item.caption ?? kindLabels[item.kind]}
      </figcaption>
    </figure>
  );
}
