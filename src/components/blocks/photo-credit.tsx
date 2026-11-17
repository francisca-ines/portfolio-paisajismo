import type { Picture } from "@/domain/media";

export function PhotoCredit({ picture }: { picture?: Picture }) {
  if (!picture?.credit) return null;
  return (
    <a
      href={picture.credit.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-[0.6rem] text-muted underline-offset-2 hover:underline"
    >
      Foto: {picture.credit.text}
    </a>
  );
}
