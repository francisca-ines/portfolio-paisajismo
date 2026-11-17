import type { Note } from "@/domain/media";

type Props = { title?: string; notes: Note[]; numbered?: boolean };

export function NoteList({ title, notes, numbered = false }: Props) {
  if (notes.length === 0) return null;
  return (
    <div>
      {title && (
        <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-label text-leaf">
          {title}
        </p>
      )}
      <ul className="divide-y divide-line border-y border-line">
        {notes.map((note, i) => (
          <li key={note.title} className="py-4">
            <p className="text-sm font-medium">
              {numbered && (
                <span className="mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
              )}
              {note.title}
            </p>
            <p className="mt-1 text-sm text-muted">{note.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
