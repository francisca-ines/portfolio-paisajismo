import type { Project } from "@/domain/project";
import alternativaNaturalista from "./alternativa-naturalista.jpg";
import ambienteNocturno from "./ambiente-nocturno.jpg";
import plantaSectores from "./planta-sectores.jpg";
import renderPrincipal from "./render-principal.jpg";
import sectorAcento from "./sector-acento.jpg";
import texturaAlocasia from "./textura-alocasia.jpg";
import texturaHelecho from "./textura-helecho.jpg";
import texturaLiriope from "./textura-liriope.jpg";

const principal = {
  image: renderPrincipal,
  alt: "Patio interior con alocasias, helechos y liriopes junto a un sendero de losas sobre piedra partida, con trepadoras en el muro",
};

export const patioVerdeTropical: Project = {
  slug: "patio-verde-tropical",
  title: "Patio interior",
  subtitle: "Patio verde y tropical",
  summary:
    "Un patio verde y tropical, con una combinación de texturas, alturas y follaje persistente, que aporta frescura, privacidad y un clima cálido todo el año.",
  status: "propuesta",
  featured: true,
  order: 4,
  cover: principal,
  blocks: [
    { type: "gallery", items: [{ kind: "render", ...principal }] },
    {
      type: "imageNotes",
      title: "Planta / Sectores",
      subtitle: "Del fondo alto al borde del sendero",
      picture: {
        image: plantaSectores,
        alt: "Planta del patio dividida en tres sectores a lo largo del sendero de losas",
      },
      notesTitle: "Sectores",
      notes: [
        { title: "Sector 1", text: "Fondo alto" },
        { title: "Sector 2", text: "Follaje medio" },
        { title: "Sector 3", text: "Borde y sendero" },
      ],
    },
    {
      type: "sector",
      title: "Especies y cantidades",
      condition: "Semisombra / sombra luminosa",
      text: "Riego moderado, follaje perenne, bajo mantenimiento y apto para mascotas.",
      plantIds: [
        "alocasia-macrorrhiza",
        "polystichum-setiferum",
        "liriope-muscari",
        "ophiopogon-planiscapus-nigrescens",
        "trepadora-hedera-ficus",
      ],
      planters: [
        {
          name: "Cantidades",
          items: [
            { plantId: "alocasia-macrorrhiza", quantity: 3 },
            { plantId: "polystichum-setiferum", quantity: 5 },
            { plantId: "liriope-muscari", quantity: 6 },
            { plantId: "ophiopogon-planiscapus-nigrescens", quantity: 8 },
          ],
        },
      ],
    },
    {
      type: "gallery",
      title: "Detalles / Texturas",
      items: [
        { kind: "render", image: texturaAlocasia, alt: "Detalle de la hoja de alocasia" },
        { kind: "render", image: texturaHelecho, alt: "Detalle de las frondas del helecho" },
        { kind: "render", image: texturaLiriope, alt: "Detalle de las hojas finas de liriope" },
      ],
    },
    {
      type: "gallery",
      title: "Ambiente nocturno",
      items: [
        {
          kind: "render",
          image: ambienteNocturno,
          alt: "El patio de noche, con luz cálida rasante sobre las alocasias y el muro",
        },
      ],
    },
    {
      type: "sector",
      title: "Alternativa naturalista",
      condition: "Especies sugeridas",
      picture: {
        image: alternativaNaturalista,
        alt: "Versión naturalista del patio con gramíneas de penachos, salvias violetas y floración blanca",
      },
      plantIds: [
        "pennisetum-alopecuroides",
        "salvia-leucantha",
        "gaura-lindheimeri",
        "dietes-bicolor",
      ],
      planters: [],
    },
    {
      type: "intro",
      title: "Sector de acento",
      text: "Incorporación de una pieza cerámica y una especie protagónica para generar un punto focal.",
      notes: [],
      picture: {
        image: sectorAcento,
        alt: "Rincón del patio con una vasija de cerámica, una alocasia y luz cálida",
      },
    },
  ],
};
