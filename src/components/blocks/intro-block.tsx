import type { IntroBlock as IntroBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { NoteList } from "../note-list";
import { SectionTitle } from "../section-title";

export function IntroBlock({ block }: { block: IntroBlockData }) {
  const layout = block.picture ? "grid gap-10 md:grid-cols-2" : "max-w-2xl";
  return (
    <section className={layout}>
      <div className="space-y-8">
        <SectionTitle eyebrow={block.eyebrow} title={block.title} subtitle={block.subtitle} />
        <p className="text-sm leading-relaxed">{block.text}</p>
        <NoteList title={block.notesTitle} notes={block.notes} numbered />
      </div>
      {block.picture && <Figure picture={block.picture} className="bg-leaf-soft p-6 md:p-10" />}
    </section>
  );
}
