import type { Plant } from "@/domain/plant";
import erigeronKarvinskianus from "./images/erigeron-karvinskianus.jpg";
import flechilla from "./images/flechilla.jpg";
import pennisetum from "./images/pennisetum.jpg";
import liriopeMuscari from "./images/liriope-muscari.jpg";
import aspidistraElatior from "./images/aspidistra-elatior.jpg";
import ophiopogonPlaniscapusNigrescens from "./images/ophiopogon-planiscapus-nigrescens.jpg";

// Especies usadas en "Patio interior".
export const patioPlants: Plant[] = [
  {
    id: "liriope-muscari",
    scientificName: "Liriope muscari",
    commonName: "Liriope",
    traits: ["Alt. 25–40 cm · ancho 30–45 cm", "Perenne", "Buena bordura", "Floración estacional"],
    picture: { image: liriopeMuscari, alt: "Foto de Liriope muscari" },
  },
  {
    id: "flechilla",
    commonName: "Flechilla",
    traits: ["Gramínea de aspecto naturalista"],
    picture: {
      image: flechilla,
      alt: "Foto de Flechilla",
      credit: { text: "Downtowngal · CC BY-SA 4.0 · Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Nassella_tenuissima_Los_Angeles.jpg" },
    },
  },
  {
    id: "pennisetum",
    scientificName: "Pennisetum",
    traits: ["Penachos crema", "Alt. aprox. 0,8–1,2 m", "Puede abrirse"],
    picture: {
      image: pennisetum,
      alt: "Foto de Pennisetum",
      credit: { text: "Dominicus Johannes Bergsma · CC BY-SA 3.0 · Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Pennisetum_alopecuroides_(Lampenpoetsersgras)_01.JPG" },
    },
  },
  {
    id: "erigeron-karvinskianus",
    scientificName: "Erigeron karvinskianus",
    commonName: "Margarita de muro",
    traits: ["Alt. 15–30 cm", "Borde colgante"],
    picture: {
      image: erigeronKarvinskianus,
      alt: "Foto de Erigeron karvinskianus",
      credit: { text: "Robert Flogaus-Faust · CC BY 4.0 · Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Erigeron_karvinskianus_RF.jpg" },
    },
  },
  {
    id: "aspidistra-elatior",
    scientificName: "Aspidistra elatior",
    commonName: "Aspidistra",
    traits: ["Alt. 50–80 cm · ancho 40–70 cm", "Sombra", "Perenne", "Hojas arqueadas"],
    picture: { image: aspidistraElatior, alt: "Foto de Aspidistra elatior" },
  },
  {
    id: "ophiopogon-planiscapus-nigrescens",
    scientificName: "Ophiopogon planiscapus 'Nigrescens'",
    commonName: "Mondo negro",
    traits: ["Alt. 15–25 cm", "Matas bajas y oscuras", "Crecimiento lento", "Tolera semisombra"],
    picture: { image: ophiopogonPlaniscapusNigrescens, alt: "Foto de Ophiopogon planiscapus 'Nigrescens'" },
  },
];
