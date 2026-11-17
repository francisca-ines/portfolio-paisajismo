import Link from "next/link";
import { Container } from "./container";

const links = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/estudio", label: "Estudio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

type Props = { name: string; tagline: string };

export function SiteHeader({ name, tagline }: Props) {
  return (
    <header className="border-b border-line">
      <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-end md:justify-between">
        <Link href="/" className="group">
          <span className="block text-sm font-medium uppercase tracking-title">
            {name}
          </span>
          <span className="mt-1 block text-[0.65rem] uppercase tracking-label text-muted">
            {tagline}
          </span>
        </Link>
        <nav aria-label="Principal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] uppercase tracking-label">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
