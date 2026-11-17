import Image from "next/image";
import type { Picture } from "@/domain/media";

type Props = {
  picture: Picture;
  caption?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function Figure({
  picture,
  caption,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  className = "",
}: Props) {
  return (
    <figure className={`mx-auto w-full ${className}`} style={{ maxWidth: picture.image.width }}>
      <Image
        src={picture.image.src}
        width={picture.image.width}
        height={picture.image.height}
        alt={picture.alt}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full bg-surface"
      />
      {caption && (
        <figcaption className="mt-3 text-[0.65rem] uppercase tracking-label text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
