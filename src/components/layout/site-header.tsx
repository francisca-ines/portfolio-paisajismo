import Link from "next/link";
import { Container } from "./container";
import { HeaderBrand } from "./header-brand";

const links = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
];

type Props = { name: string; tagline: string };

export function SiteHeader({ name, tagline }: Props) {
  return (
    <header className="border-b border-line">
      <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-end md:justify-between">
        <HeaderBrand name={name} tagline={tagline} />
        <nav aria-label="Principal" className="md:ml-auto">
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
