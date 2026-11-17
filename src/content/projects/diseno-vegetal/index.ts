import type { Project } from "@/domain/project";
import planoImplantacion from "./plano-implantacion.jpg";
import primaveraVerano from "./primavera-verano.jpg";
import otonoInvierno from "./otono-invierno.jpg";
import { plantGroups } from "./plant-groups";

const plano = {
  image: planoImplantacion,
  alt: "Plano de implantación del jardín con los 26 ejemplares numerados, sendero de lajas, zona de juegos y pérgola",
};

export const disenoVegetal: Project = {
  slug: "diseno-vegetal",
  title: "Diseño vegetal",
  subtitle: "Organización espacial y lectura del paisaje",
  context: "Estudio de paisaje · Trabajo práctico 01",
  summary:
    "Diseño vegetal de un jardín residencial: implantación de 26 ejemplares, paleta vegetal y lectura estacional.",
  status: "academico",
  featured: true,
  order: 2,
  cover: plano,
  blocks: [
    {
      type: "intro",
      title: "Concepto",
      text: "Propuesta de composición vegetal para un jardín residencial, articulada mediante áreas de juego, recorridos, bordes vegetales y una pérgola.",
      notesTitle: "Criterios de diseño",
      notes: [
        { title: "Estructura", text: "Árboles y arbustos que definen sectores y límites." },
        { title: "Continuidad", text: "Repetición de masas verdes para dar unidad visual." },
        { title: "Estacionalidad", text: "Variaciones de color, sombra y floración durante el año." },
      ],
    },
    {
      type: "imageNotes",
      eyebrow: "Implantación",
      title: "Plano de implantación",
      subtitle: "Distribución de los 26 ejemplares y sus relaciones espaciales",
      picture: plano,
      notesTitle: "Lectura del espacio",
      notes: [
        { title: "Zona de juegos", text: "Sombra, visibilidad y contención vegetal." },
        { title: "Sendero de lajas", text: "Recorrido acompañado por estratos bajos y medios." },
        { title: "Pérgola", text: "Trepadoras para sombra estival y apertura solar invernal." },
        { title: "Perímetro", text: "Bordes verdes que aportan privacidad y profundidad." },
      ],
    },
    {
      type: "plantGroups",
      title: "Paleta vegetal",
      subtitle: "Características morfológicas y criterios de implantación",
      groups: plantGroups,
    },
    {
      type: "imageNotes",
      eyebrow: "Estacionalidad",
      title: "Primavera / verano",
      subtitle: "Follaje activo, floración y sombra",
      picture: {
        image: primaveraVerano,
        alt: "Plano del jardín en primavera y verano, con las copas de árboles y arbustos en verde",
      },
      notesTitle: "Lectura estacional",
      notes: [
        { title: "Vegetación activa", text: "Las masas vegetales consolidan los límites y aportan continuidad verde." },
        { title: "Floración", text: "Blancos, lilas y amarillos generan acentos sobre el recorrido y la pérgola." },
        { title: "Confort", text: "La sombra de árboles y trepadoras acompaña el uso del jardín." },
      ],
    },
    {
      type: "imageNotes",
      eyebrow: "Estacionalidad",
      title: "Otoño / invierno",
      subtitle: "Color estacional, estructura y asoleamiento",
      picture: {
        image: otonoInvierno,
        alt: "Plano del jardín en otoño e invierno, con las especies caducas en tonos ocres",
      },
      notesTitle: "Lectura estacional",
      notes: [
        { title: "Contraste cromático", text: "Las especies caducas incorporan tonos cálidos y dejan ver su estructura." },
        { title: "Persistencia", text: "Los arbustos perennes sostienen el carácter verde del jardín." },
        { title: "Luz natural", text: "La pérdida de hojas en la pérgola favorece el ingreso del sol." },
      ],
    },
  ],
};
