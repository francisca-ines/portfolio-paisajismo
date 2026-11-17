type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionTitle({ title, subtitle, eyebrow, as: Tag = "h2" }: Props) {
  return (
    <div className="border-b border-line pb-4">
      {eyebrow && (
        <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-label text-leaf">
          {eyebrow}
        </p>
      )}
      <Tag className="text-lg font-normal uppercase tracking-title md:text-xl">{title}</Tag>
      {subtitle && (
        <p className="mt-2 text-[0.7rem] uppercase tracking-label text-muted">{subtitle}</p>
      )}
    </div>
  );
}
