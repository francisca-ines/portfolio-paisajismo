import type { Plant } from "@/domain/plant";

// Especies usadas en "Patio interior".
export const patioPlants: Plant[] = [
  {
    id: "liriope-muscari",
    scientificName: "Liriope muscari",
    commonName: "Liriope",
    traits: ["Alt. 25–40 cm · ancho 30–45 cm", "Perenne", "Buena bordura", "Floración estacional"],
  },
  {
    id: "flechilla",
    commonName: "Flechilla",
    traits: ["Gramínea de aspecto naturalista"],
  },
  {
    id: "pennisetum",
    scientificName: "Pennisetum",
    traits: ["Penachos crema", "Alt. aprox. 0,8–1,2 m", "Puede abrirse"],
  },
  {
    id: "erigeron-karvinskianus",
    scientificName: "Erigeron karvinskianus",
    commonName: "Margarita de muro",
    traits: ["Alt. 15–30 cm", "Borde colgante"],
  },
  {
    id: "aspidistra-elatior",
    scientificName: "Aspidistra elatior",
    commonName: "Aspidistra",
    traits: ["Alt. 50–80 cm · ancho 40–70 cm", "Sombra", "Perenne", "Hojas arqueadas"],
  },
  {
    id: "ophiopogon-planiscapus-nigrescens",
    scientificName: "Ophiopogon planiscapus 'Nigrescens'",
    commonName: "Mondo negro",
    traits: ["Alt. 15–25 cm", "Matas bajas y oscuras", "Crecimiento lento", "Tolera semisombra"],
  },
];
