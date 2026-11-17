import type { Plant } from "@/domain/plant";
import salviaLeucantha from "./images/salvia-leucantha.jpg";

// Especies usadas en el patio verde y tropical.
export const patioTropicalPlants: Plant[] = [
  {
    id: "alocasia-macrorrhiza",
    scientificName: "Alocasia macrorrhiza",
    commonName: "Alocasia",
    traits: ["Alt. 1,2–1,8 m · ancho 1,0–1,2 m"],
  },
  {
    id: "polystichum-setiferum",
    scientificName: "Polystichum setiferum",
    commonName: "Helecho",
    traits: ["Alt. 0,4–0,8 m · ancho 0,6–0,8 m"],
  },
  {
    id: "trepadora-hedera-ficus",
    scientificName: "Hedera helix / Ficus pumila",
    commonName: "Trepadora",
    traits: ["Cobertura de muro", "Perenne"],
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
  },
];
