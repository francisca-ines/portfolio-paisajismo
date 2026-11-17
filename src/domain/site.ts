export type SiteInfo = {
  name: string;
  tagline: string;
  description: string;
  about: string[];
  services: { title: string; text: string }[];
  contact: {
    email?: string;
    whatsapp?: string;
    instagram?: string;
  };
  isPlaceholder: { about: boolean; services: boolean };
};
