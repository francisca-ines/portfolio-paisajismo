import type { Plant } from "@/domain/plant";
import strelitziaReginae from "./images/strelitzia-reginae.jpg";
import pennisetumAlopecuroides from "./images/pennisetum-alopecuroides.jpg";
import dietesGrandiflora from "./images/dietes-grandiflora.jpg";
import cannaIndica from "./images/canna-indica.jpg";
import gauraLindheimeri from "./images/gaura-lindheimeri.jpg";
import phormiumTenax from "./images/phormium-tenax.jpg";

// Especies usadas en "Balcón / Terraza".
export const balconPlants: Plant[] = [
  {
    id: "strelitzia-reginae",
    scientificName: "Strelitzia reginae",
    commonName: "Ave del paraíso",
    traits: [
      "Hoja protagonista",
      "Aporte tropical",
      "Floración estacional",
      "Pleno sol",
    ],
    picture: { image: strelitziaReginae, alt: "Foto de Strelitzia reginae" },
  },
  {
    id: "pennisetum-alopecuroides",
    scientificName: "Pennisetum alopecuroides",
    commonName: "Pastos ornamentales",
    traits: [
      "Movimiento y textura",
      "Aspecto liviano",
      "Ideal para sol directo",
      "Bajo mantenimiento",
    ],
    picture: { image: pennisetumAlopecuroides, alt: "Foto de Pennisetum alopecuroides" },
  },
  {
    id: "dietes-grandiflora",
    scientificName: "Dietes grandiflora",
    commonName: "Lirio africano",
    traits: [
      "Floración prolongada",
      "Transición y relleno",
      "Resistente al sol",
      "Bajo mantenimiento",
    ],
    picture: { image: dietesGrandiflora, alt: "Foto de Dietes grandiflora" },
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
    picture: { image: cannaIndica, alt: "Foto de Canna indica" },
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
    picture: { image: gauraLindheimeri, alt: "Foto de Gaura lindheimeri" },
  },
  {
    id: "phormium-tenax",
    scientificName: "Phormium tenax",
    commonName: "Formio",
    traits: [
      "Follaje arquitectónico",
      "Textura y estructura",
      "Resistente al sol",
      "Bajo mantenimiento",
    ],
    picture: { image: phormiumTenax, alt: "Foto de Phormium tenax" },
  },
];
