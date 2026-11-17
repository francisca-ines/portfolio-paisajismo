"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { name: string; tagline: string };

// En el inicio el nombre ya aparece grande en la portada: no se repite arriba.
export function HeaderBrand({ name, tagline }: Props) {
  if (usePathname() === "/") return null;
  return (
    <Link href="/">
      <span className="block text-sm font-medium uppercase tracking-title">{name}</span>
      <span className="mt-1 block text-[0.65rem] uppercase tracking-label text-muted">
        {tagline}
      </span>
    </Link>
  );
}
