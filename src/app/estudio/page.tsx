import type { Metadata } from "next";
import { getSiteInfo } from "@/application/projects";
import { Container } from "@/components/layout/container";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = { title: "Estudio" };

export default function StudioPage() {
  const site = getSiteInfo();
  return (
    <Container className="max-w-3xl space-y-10 pt-16">
      <SectionTitle as="h1" title="Estudio" subtitle={site.tagline} />
      {site.isPlaceholder.about && <PlaceholderNotice />}
      <div className="space-y-5 text-sm leading-relaxed">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}
