import type { ImageNotesBlock as ImageNotesBlockData } from "@/domain/project";
import { Figure } from "../figure";
import { NoteList } from "../note-list";
import { SectionTitle } from "../section-title";

export function ImageNotesBlock({ block }: { block: ImageNotesBlockData }) {
  return (
    <section className="space-y-8">
      <SectionTitle eyebrow={block.eyebrow} title={block.title} subtitle={block.subtitle} />
      <div className="grid items-start gap-10 md:grid-cols-2">
        <Figure picture={block.picture} className="bg-leaf-soft p-6 md:p-10" />
        <NoteList title={block.notesTitle} notes={block.notes} />
      </div>
    </section>
  );
}
