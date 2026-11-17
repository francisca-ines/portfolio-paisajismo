import type { Project } from "@/domain/project";
import planoOpcion1 from "./plano-opcion-1.jpg";
import planoOpcion2 from "./plano-opcion-2.jpg";
import planoSector01 from "./plano-sector-01.jpg";
import planoSector02 from "./plano-sector-02.jpg";
import render01 from "./render-01.jpg";
import render02 from "./render-02.jpg";
import render03 from "./render-03.jpg";

const sunText =
  "Composición de especies resistentes al sol, con un lenguaje tropical y texturas de gramíneas para dar movimiento y liviandad.";

export const balconTerraza: Project = {
  slug: "balcon-terraza",
  title: "Balcón / Terraza",
  subtitle: "Propuesta de paisajismo",
  summary:
    "Balcón a pleno sol resuelto con jardineras de especies tropicales y gramíneas, en dos variantes: con y sin huerta.",
  status: "propuesta",
  area: "7,28 × 3,00 m",
  featured: true,
  order: 1,
  cover: {
    image: render01,
    alt: "Render del balcón con jardineras de gramíneas y macetas con plantas tropicales",
  },
  blocks: [
    {
      type: "plans",
      title: "Balcón",
      subtitle: "Planta general",
      options: [
        {
          label: "Opción 1 / Sin huerta",
          picture: {
            image: planoOpcion1,
            alt: "Plano del balcón con jardineras perimetrales y sector de estar, sin huerta",
          },
        },
        {
          label: "Opción 2 / Con huerta",
          picture: {
            image: planoOpcion2,
            alt: "Plano del balcón con jardineras perimetrales y una huerta en el lateral derecho",
          },
        },
      ],
    },
    {
      type: "sector",
      title: "Sector 01 / Lateral izquierdo",
      condition: "Sol directo · alta exposición",
      text: sunText,
      picture: {
        image: planoSector01,
        alt: "Plano del balcón con el sector lateral izquierdo marcado",
      },
      plantIds: [
        "strelitzia-reginae",
        "pennisetum-alopecuroides",
        "dietes-grandiflora",
      ],
      planters: [
        {
          name: "Maceta 01",
          items: [
            { plantId: "strelitzia-reginae", quantity: 1 },
            { plantId: "pennisetum-alopecuroides", quantity: 3 },
            { plantId: "dietes-grandiflora", quantity: 2 },
          ],
        },
        {
          name: "Maceta 02",
          items: [
            { plantId: "pennisetum-alopecuroides", quantity: 3 },
            { plantId: "strelitzia-reginae", quantity: 1 },
            { plantId: "dietes-grandiflora", quantity: 2 },
          ],
        },
      ],
    },
    {
      type: "sector",
      title: "Sector 02 / Fondo",
      condition: "Sol directo · alta exposición",
      text: sunText,
      picture: {
        image: planoSector02,
        alt: "Plano del balcón con el sector del fondo marcado",
      },
      plantIds: [
        "canna-indica",
        "pennisetum-alopecuroides",
        "gaura-lindheimeri",
        "dietes-grandiflora",
        "phormium-tenax",
      ],
      planters: [],
    },
    {
      type: "gallery",
      title: "Imágenes de la propuesta",
      items: [
        { kind: "render", image: render01, alt: "Vista general del balcón con jardineras al fondo" },
        { kind: "render", image: render02, alt: "Jardinera del lateral izquierdo con ave del paraíso, gramíneas y lirios" },
        { kind: "render", image: render03, alt: "Variante del lateral izquierdo con macetas y jardineras bajas" },
      ],
    },
  ],
};
