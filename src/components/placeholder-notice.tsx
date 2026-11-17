type Props = { text?: string };

export function PlaceholderNotice({ text = "Texto provisorio, a reemplazar por el del estudio." }: Props) {
  return (
    <p className="border border-dashed border-line px-4 py-3 text-[0.65rem] uppercase tracking-label text-muted">
      {text}
    </p>
  );
}
