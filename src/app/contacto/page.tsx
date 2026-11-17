import type { Metadata } from "next";
import { getSiteInfo } from "@/application/projects";
import { Container } from "@/components/layout/container";
import { contactEntries } from "@/components/layout/contact-links";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactPage() {
  const site = getSiteInfo();
  const entries = contactEntries(site.contact);
  return (
    <Container className="max-w-3xl space-y-10 pt-16">
      <SectionTitle as="h1" title="Contacto" subtitle="Escribinos" />
      {entries.length === 0 ? (
        <PlaceholderNotice text="Datos de contacto a confirmar." />
      ) : (
        <dl className="divide-y divide-line border-y border-line">
          {entries.map((entry) => (
            <div key={entry.label} className="grid grid-cols-[8rem_1fr] py-5">
              <dt className="text-[0.65rem] uppercase tracking-label text-muted">{entry.label}</dt>
              <dd className="text-sm">
                <a href={entry.href} className="hover:text-leaf">
                  {entry.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      )}
    </Container>
  );
}
