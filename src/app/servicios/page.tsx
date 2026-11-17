import type { Metadata } from "next";
import { getSiteInfo } from "@/application/projects";
import { Container } from "@/components/layout/container";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = { title: "Servicios" };

export default function ServicesPage() {
  const site = getSiteInfo();
  return (
    <Container className="max-w-3xl space-y-10 pt-16">
      <SectionTitle as="h1" title="Servicios" subtitle={site.tagline} />
      {site.isPlaceholder.services && <PlaceholderNotice />}
      <ul className="divide-y divide-line border-y border-line">
        {site.services.map((service, i) => (
          <li key={service.title} className="grid grid-cols-[3rem_1fr] py-6">
            <span className="text-xs text-leaf">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-label">{service.title}</h2>
              <p className="mt-2 text-sm text-muted">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
