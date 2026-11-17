import type { Plant } from "@/domain/plant";
import hosta from "./images/hosta.jpg";
import hydrangeaArborescens from "./images/hydrangea-arborescens.jpg";
import teucriumFruticans from "./images/teucrium-fruticans.jpg";

// Especies usadas en "Jardín de campo · Ayacucho".
export const campoPlants: Plant[] = [
  {
    id: "hydrangea-arborescens",
    scientificName: "Hydrangea arborescens",
    traits: [],
    picture: { image: hydrangeaArborescens, alt: "Foto de Hydrangea arborescens" },
  },
  {
    id: "teucrium-fruticans",
    scientificName: "Teucrium fruticans",
    traits: [],
    picture: { image: teucriumFruticans, alt: "Foto de Teucrium fruticans" },
  },
  {
    id: "hosta",
    scientificName: "Hosta sp.",
    traits: [],
    picture: { image: hosta, alt: "Foto de Hosta" },
  },
];
