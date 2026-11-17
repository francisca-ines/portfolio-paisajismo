import type { Plant } from "@/domain/plant";

// Catálogo único de especies. Las características se leyeron de las láminas
// en baja resolución: confirmar con el estudio antes de publicar.
export const plants: Plant[] = [
  {
    id: "strelitzia-reginae",
    scientificName: "Strelitzia reginae",
    commonName: "Ave del paraíso",
    traits: [],
  },
  {
    id: "pennisetum-alopecuroides",
    scientificName: "Pennisetum alopecuroides",
    commonName: "Pasto ornamental",
    traits: [
      "Movimiento y textura",
      "Aspecto liviano",
      "Ideal para sol directo",
      "Bajo mantenimiento",
    ],
  },
  {
    id: "dietes-grandiflora",
    scientificName: "Dietes grandiflora",
    commonName: "Lirio africano",
    traits: [
      "Floración prolongada",
      "Tolerante y rústica",
      "Resistente al sol",
      "Bajo mantenimiento",
    ],
  },
  {
    id: "canna-indica",
    scientificName: "Canna indica",
    commonName: "Achira",
    traits: [
      "Follaje protagonista",
      "Aporte tropical",
      "Resistente al sol",
      "Bajo mantenimiento",
    ],
  },
  {
    id: "gaura-lindheimeri",
    scientificName: "Gaura lindheimeri",
    commonName: "Gaura blanca",
    traits: [
      "Floración continua",
      "Atrae polinizadores",
      "Resistente al sol",
      "Bajo mantenimiento",
    ],
  },
  {
    id: "phormium-tenax",
    scientificName: "Phormium tenax",
    commonName: "Formio",
    traits: [
      "Follaje escultórico",
      "Textura y estructura",
      "Resistente al sol",
      "Bajo mantenimiento",
    ],
  },
];
