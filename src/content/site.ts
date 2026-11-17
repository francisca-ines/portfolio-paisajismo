import type { SiteInfo } from "@/domain/site";

// Textos de "Estudio" y "Servicios" provisorios hasta recibir los del estudio.
export const site: SiteInfo = {
  name: "Ines & Francisca",
  tagline: "Diseño del paisaje",
  description:
    "Jardines, balcones y terrazas pensados desde la vegetación, la luz y el uso de cada espacio.",
  about: [
    "Somos Ines y Francisca, un estudio de diseño del paisaje.",
    "Trabajamos cada proyecto a partir de la lectura del lugar: la luz, el uso y las especies que mejor se adaptan a cada espacio.",
  ],
  services: [
    { title: "Diseño de jardines", text: "Propuesta integral de espacios verdes residenciales." },
    { title: "Balcones y terrazas", text: "Diseño de jardineras y composiciones para espacios reducidos." },
    { title: "Paleta vegetal", text: "Selección de especies según exposición, mantenimiento y estación." },
  ],
  contact: {},
  isPlaceholder: { about: true, services: true },
};
