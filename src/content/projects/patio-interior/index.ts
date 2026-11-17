import type { Project } from "@/domain/project";
import renderCanterosEntrada from "./render-canteros-entrada.jpg";
import renderNaturalista from "./render-naturalista.jpg";
import renderTropical from "./render-tropical.jpg";

const tropical = {
  image: renderTropical,
  alt: "Cantero del patio en versión tropical, con ave del paraíso en los extremos y follajes grandes contra un cerco de madera",
};

export const patioInterior: Project = {
  slug: "patio-interior",
  title: "Patio interior",
  subtitle: "Propuesta vegetal",
  context: "Estudio de paisajismo · Propuesta vegetal",
  summary:
    "Dos lenguajes para un mismo cantero, tropical y naturalista, y canteros de entrada con una composición sobria y perenne.",
  status: "propuesta",
  featured: true,
  order: 5,
  cover: tropical,
  blocks: [
    {
      type: "intro",
      title: "Emplazamiento",
      subtitle: "Dos lenguajes para un mismo cantero: tropical y naturalista",
      text: "Cantero de aprox. 4,00 × 0,45 m con sol de tarde y más exposición en verano. El objetivo es tener follaje presente todo el año y circulación libre hacia la cocina.",
      notesTitle: "Criterio de diseño",
      notes: [
        { title: "Ancho disponible", text: "El ancho del cantero limita las especies de porte abierto." },
      ],
    },
    {
      type: "sector",
      title: "01 / Tropical",
      condition: "Sol de tarde",
      text: "Follajes grandes, verdes y contrastes de textura: dos Strelitzia reginae en los extremos y Liriope muscari en bordura.",
      picture: tropical,
      plantIds: ["strelitzia-reginae", "liriope-muscari"],
      planters: [],
    },
    {
      type: "sector",
      title: "02 / Naturalista",
      condition: "Sol de tarde",
      text: "Gramíneas, movimiento y floración liviana. Composición orientativa, a ajustar según el ancho del cantero.",
      picture: {
        image: renderNaturalista,
        alt: "Cantero del patio en versión naturalista, con gramíneas de penachos crema, lavandas y floración blanca liviana",
      },
      plantIds: [
        "flechilla",
        "pennisetum",
        "gaura-lindheimeri",
        "lavanda",
        "erigeron-karvinskianus",
      ],
      planters: [
        {
          name: "Cantero del patio",
          size: "4,00 × 0,45 m aprox.",
          items: [
            { plantId: "flechilla", quantity: 7 },
            { plantId: "pennisetum", quantity: 2 },
            { plantId: "gaura-lindheimeri", quantity: 3 },
            { plantId: "lavanda", quantity: 3 },
            { plantId: "erigeron-karvinskianus", quantity: 2 },
          ],
        },
      ],
    },
    {
      type: "sector",
      title: "Canteros de entrada",
      condition: "Acceso · orientación sur",
      text: "Composición sobria y perenne con aspidistra, mondo negro y piedra de río. En el cantero derecho, aspidistras en fila, dejando libre el barrido del portón.",
      picture: {
        image: renderCanterosEntrada,
        alt: "Acceso con portón negro y dos canteros de hierro con aspidistras, mondo negro y piedras de río",
      },
      plantIds: ["aspidistra-elatior", "ophiopogon-planiscapus-nigrescens"],
      planters: [
        {
          name: "Cantero izquierdo",
          size: "1,20 × 0,40 m",
          items: [
            { plantId: "aspidistra-elatior", quantity: 2 },
            { plantId: "ophiopogon-planiscapus-nigrescens", quantity: 5 },
          ],
        },
      ],
    },
  ],
};
