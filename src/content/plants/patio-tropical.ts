import type { Plant } from "@/domain/plant";
import dietesBicolor from "./images/dietes-bicolor.jpg";
import alocasiaMacrorrhiza from "./images/alocasia-macrorrhiza.jpg";
import polystichumSetiferum from "./images/polystichum-setiferum.jpg";
import trepadoraHederaFicus from "./images/trepadora-hedera-ficus.jpg";
import salviaLeucantha from "./images/salvia-leucantha.jpg";

// Especies usadas en el patio verde y tropical.
export const patioTropicalPlants: Plant[] = [
  {
    id: "alocasia-macrorrhiza",
    scientificName: "Alocasia macrorrhiza",
    commonName: "Alocasia",
    traits: ["Alt. 1,2–1,8 m · ancho 1,0–1,2 m"],
    picture: { image: alocasiaMacrorrhiza, alt: "Foto de Alocasia macrorrhiza" },
  },
  {
    id: "polystichum-setiferum",
    scientificName: "Polystichum setiferum",
    commonName: "Helecho",
    traits: ["Alt. 0,4–0,8 m · ancho 0,6–0,8 m"],
    picture: { image: polystichumSetiferum, alt: "Foto de Polystichum setiferum" },
  },
  {
    id: "trepadora-hedera-ficus",
    scientificName: "Hedera helix / Ficus pumila",
    commonName: "Trepadora",
    traits: ["Cobertura de muro", "Perenne"],
    picture: { image: trepadoraHederaFicus, alt: "Foto de trepadora sobre muro" },
  },
  {
    id: "salvia-leucantha",
    scientificName: "Salvia leucantha",
    commonName: "Salvia",
    traits: [],
    picture: { image: salviaLeucantha, alt: "Foto de Salvia leucantha" },
  },
  {
    id: "dietes-bicolor",
    scientificName: "Dietes bicolor",
    commonName: "Dietes",
    traits: [],
    picture: {
      image: dietesBicolor,
      alt: "Foto de Dietes bicolor",
      credit: { text: "Nathaly 1106 · CC0 · Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Iris_africano_(Dietes_bicolor).jpg" },
    },
  },
];
