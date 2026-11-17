import type { Project } from "@/domain/project";
import p01RenderA from "./propuesta-01-render-a.jpg";
import p01RenderB from "./propuesta-01-render-b.jpg";
import p02RenderA from "./propuesta-02-render-a.jpg";
import p02RenderB from "./propuesta-02-render-b.jpg";

export const proyectoTerraza: Project = {
  slug: "proyecto-terraza",
  title: "Proyecto Terraza",
  subtitle: "Propuesta de paisajismo",
  summary:
    "Terraza con dos alternativas de maceteros, huerta integrada y una paleta vegetal de especies nativas y no nativas.",
  status: "propuesta",
  featured: true,
  order: 3,
  cover: {
    image: p01RenderB,
    alt: "Render de la terraza con trepadora florida sobre la reja y un macetero de madera con huerta",
  },
  blocks: [
    {
      type: "gallery",
      title: "Propuesta 01",
      subtitle: "Maceteros de madera y privacidad vegetal",
      text: "Cuatro macetas de madera (100 × 40 cm) con vegetación ornamental. Trepadoras sobre la reja para sumar verde, privacidad y una escala más íntima. Huerta de aromáticas y hortalizas integrada al espacio exterior.",
      items: [
        { kind: "render", image: p01RenderA, alt: "Vista lateral de la terraza con maceteros de madera con gramíneas y floración violeta" },
        { kind: "render", image: p01RenderB, alt: "Vista frontal con trepadora florida sobre la reja, macetero de madera con gramíneas y huerta elevada" },
      ],
    },
    {
      type: "gallery",
      title: "Propuesta 02",
      subtitle: "Maceteros de fibrocemento",
      text: "Alternativa de composición abierta, sin cobertura vegetal sobre la reja. Tres macetas de fibrocemento (100 × 35 × 40 cm), con gramíneas y florales. Huerta y vegetación ornamental como elementos de uso y ambientación.",
      items: [
        { kind: "render", image: p02RenderA, alt: "Vista lateral de la terraza con maceteros de fibrocemento, gramíneas y florales" },
        { kind: "render", image: p02RenderB, alt: "Vista frontal con reja libre, macetero de fibrocemento con gramíneas y huerta de madera" },
      ],
    },
    {
      type: "plantSelection",
      title: "Selección vegetal",
      subtitle: "Nativas y no nativas",
      text: "Paleta vegetal con gramíneas, herbáceas florales y trepadoras. Combinación de texturas, alturas y floraciones para aportar interés estacional.",
      groups: [
        {
          title: "Nativas",
          plantIds: [
            "verbena-bonariensis",
            "salvia-pallida",
            "glandularia-andina",
            "schizachyrium-microstachyum",
            "nassella-tenuissima",
            "grindelia-pulchella",
          ],
        },
        {
          title: "No nativas",
          plantIds: ["salvia-greggii", "lavanda", "santolina", "senecio-azul", "achillea"],
        },
        {
          title: "Opciones de trepadoras",
          plantIds: ["mburucuya", "jazmin-de-la-selva", "jazmin-de-leche"],
        },
      ],
    },
  ],
};
