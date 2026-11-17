import type { SiteInfo } from "@/domain/site";

type Props = { contact: SiteInfo["contact"]; className?: string };

export function contactEntries(contact: SiteInfo["contact"]) {
  const entries: { label: string; value: string; href: string }[] = [];
  if (contact.email) {
    entries.push({ label: "Email", value: contact.email, href: `mailto:${contact.email}` });
  }
  if (contact.whatsapp) {
    const digits = contact.whatsapp.replace(/\D/g, "");
    entries.push({ label: "WhatsApp", value: contact.whatsapp, href: `https://wa.me/${digits}` });
  }
  if (contact.instagram) {
    const user = contact.instagram.replace(/^@/, "");
    entries.push({ label: "Instagram", value: `@${user}`, href: `https://instagram.com/${user}` });
  }
  return entries;
}

export function ContactLinks({ contact, className = "" }: Props) {
  const entries = contactEntries(contact);
  if (entries.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {entries.map((entry) => (
        <li key={entry.label}>
          <a href={entry.href} className="transition-colors hover:text-ink">
            {entry.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
