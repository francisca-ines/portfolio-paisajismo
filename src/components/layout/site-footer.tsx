import type { SiteInfo } from "@/domain/site";
import { Container } from "./container";
import { ContactLinks } from "./contact-links";

type Props = { site: SiteInfo };

export function SiteFooter({ site }: Props) {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="flex flex-col gap-4 py-8 text-[0.65rem] uppercase tracking-label text-muted md:flex-row md:justify-between">
        <span>
          {site.name} · {site.tagline}
        </span>
        <ContactLinks contact={site.contact} />
      </Container>
    </footer>
  );
}
