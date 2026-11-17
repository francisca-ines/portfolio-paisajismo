import type { Planter, Project } from "@/domain/project";
import planoOpcion1 from "./plano-opcion-1.jpg";
import planoOpcion2 from "./plano-opcion-2.jpg";
import planoSector01 from "./plano-sector-01.jpg";
import planoSector02 from "./plano-sector-02.jpg";
import portada from "./portada.jpg";
import render01 from "./render-01.jpg";
import render02 from "./render-02.jpg";
import render03 from "./render-03.jpg";
import jardineraS101 from "./jardinera-s1-01.jpg";
import jardineraS102 from "./jardinera-s1-02.jpg";
import macetonIzquierdo from "./maceton-izquierdo.jpg";
import jardineraS201 from "./jardinera-s2-01.jpg";
import jardineraS202 from "./jardinera-s2-02.jpg";
import jardineraS203 from "./jardinera-s2-03.jpg";
import macetonDerecho from "./maceton-derecho.jpg";

const sector02Planters: Planter[] = [
  {
    name: "Macetón izquierdo",
    size: "Ø 0,80 aprox.",
    picture: { image: macetonIzquierdo, alt: "Ilustración del macetón izquierdo con achira, pastos ornamentales y lirios" },
    items: [
      { plantId: "canna-indica", quantity: 1 },
      { plantId: "pennisetum-alopecuroides", quantity: 2 },
      { plantId: "dietes-grandiflora", quantity: 2 },
    ],
  },
  {
    name: "Jardinera 01",
    size: "1,50 × 0,35 aprox.",
    picture: { image: jardineraS201, alt: "Ilustración de la jardinera 01 con pastos ornamentales, gaura y lirios" },
    items: [
      { plantId: "pennisetum-alopecuroides", quantity: 2 },
      { plantId: "gaura-lindheimeri", quantity: 3 },
      { plantId: "dietes-grandiflora", quantity: 2 },
    ],
  },
  {
    name: "Jardinera 02",
    size: "1,50 × 0,35 aprox.",
    picture: { image: jardineraS202, alt: "Ilustración de la jardinera 02 con pastos ornamentales, gaura, formio y lirios" },
    items: [
      { plantId: "pennisetum-alopecuroides", quantity: 2 },
      { plantId: "gaura-lindheimeri", quantity: 3 },
      { plantId: "phormium-tenax", quantity: 1 },
      { plantId: "dietes-grandiflora", quantity: 2 },
    ],
  },
  {
    name: "Jardinera 03",
    size: "1,50 × 0,35 aprox.",
    picture: { image: jardineraS203, alt: "Ilustración de la jardinera 03 con pastos ornamentales, gaura, lirios y formio" },
    items: [
      { plantId: "pennisetum-alopecuroides", quantity: 2 },
      { plantId: "gaura-lindheimeri", quantity: 3 },
      { plantId: "dietes-grandiflora", quantity: 2 },
      { plantId: "phormium-tenax", quantity: 1 },
    ],
  },
  {
    name: "Macetón derecho",
    size: "Ø 0,80 aprox.",
    picture: { image: macetonDerecho, alt: "Ilustración del macetón derecho con achira, pastos ornamentales y lirios" },
    items: [
      { plantId: "canna-indica", quantity: 1 },
      { plantId: "pennisetum-alopecuroides", quantity: 2 },
      { plantId: "dietes-grandiflora", quantity: 2 },
    ],
  },
];

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
    image: portada,
    alt: "Balcón a pleno sol con macetones de achira en los extremos y jardineras de gramíneas, gaura y lirios contra la baranda",
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
          size: "80 × 20 × 40",
          picture: { image: jardineraS101, alt: "Ilustración de la maceta 01 con ave del paraíso, pastos ornamentales y lirios africanos" },
          items: [
            { plantId: "strelitzia-reginae", quantity: 1 },
            { plantId: "pennisetum-alopecuroides", quantity: 3 },
            { plantId: "dietes-grandiflora", quantity: 2 },
          ],
        },
        {
          name: "Maceta 02",
          size: "80 × 20 × 40",
          picture: { image: jardineraS102, alt: "Ilustración de la maceta 02 con pastos ornamentales, ave del paraíso y lirios africanos" },
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
      planters: sector02Planters,
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
