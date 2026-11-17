import type { Project } from "@/domain/project";
import estadoOriginal from "./estado-original.jpg";
import planoPlantacion from "./plano-plantacion.jpg";
import propuestaDiseno from "./propuesta-diseno.jpg";

const propuesta = {
  image: propuestaDiseno,
  alt: "Casa de campo blanca con un cantero perimetral curvo de arbustos, gramíneas y floríferas bajo los árboles",
};

export const jardinDeCampoAyacucho: Project = {
  slug: "jardin-de-campo-ayacucho",
  title: "Jardín de campo",
  subtitle: "Propuesta de paisajismo",
  summary:
    "Rediseño del cantero perimetral de una casa de campo, incorporando una composición más amplia, diversa y de bajo mantenimiento.",
  status: "propuesta",
  location: "Ayacucho",
  featured: true,
  order: 5,
  cover: propuesta,
  blocks: [
    {
      type: "gallery",
      title: "Antes y después",
      items: [
        {
          kind: "foto",
          caption: "Estado original",
          image: estadoOriginal,
          alt: "La casa antes de la intervención, con arbustos aislados junto al muro y césped",
        },
        { kind: "render", caption: "Propuesta de diseño", ...propuesta },
      ],
    },
    {
      type: "intro",
      title: "Propuesta",
      text: "Rediseño del cantero perimetral, incorporando una composición más amplia, diversa y de bajo mantenimiento.",
      notesTitle: "Objetivos",
      notes: [
        { title: "Integrar la casa con el entorno natural" },
        { title: "Aportar textura, color y floración en distintas épocas del año" },
        { title: "Generar un cantero curvo y armónico, de aspecto naturalista" },
      ],
    },
    {
      type: "imageNotes",
      title: "Plano de plantación",
      picture: {
        image: planoPlantacion,
        alt: "Plano del cantero curvo frente a la casa, con arbustos, gramíneas, floríferas y cubresuelos alrededor de dos árboles existentes",
      },
      notesTitle: "Referencias",
      notes: [
        { title: "Arbustos principales" },
        { title: "Gramíneas" },
        { title: "Herbáceas floríferas" },
        { title: "Cubresuelos" },
        { title: "Árbol existente" },
      ],
    },
    {
      type: "plantSelection",
      title: "Paleta vegetal",
      groups: [
        {
          title: "Especies",
          plantIds: [
            "salvia-leucantha",
            "pennisetum-alopecuroides",
            "hydrangea-arborescens",
            "dietes-grandiflora",
            "phormium-tenax",
            "teucrium-fruticans",
            "hosta",
            "gaura-lindheimeri",
          ],
        },
      ],
    },
  ],
};
