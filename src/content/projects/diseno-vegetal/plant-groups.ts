import type { PlantGroupsBlock } from "@/domain/project";

export const plantGroups: PlantGroupsBlock["groups"] = [
  {
    code: "01",
    role: "Árbol principal",
    traits: "Globoso, caduco, follaje denso y color otoñal.",
    criterion: "Sombrea la zona de juegos y mantiene la visibilidad bajo la copa.",
  },
  {
    code: "02–03",
    role: "Arbustos de acompañamiento",
    traits: "Segunda magnitud, persistentes, floración blanca.",
    criterion: "Enmarcan el árbol principal y refuerzan la unidad visual.",
  },
  {
    code: "04–06",
    role: "Barrera vegetal",
    traits: "Arbustos globosos, persistentes, verde oscuro.",
    criterion: "Definen un límite suave y generan ritmo en el borde.",
  },
  {
    code: "07–08",
    role: "Estrato bajo",
    traits: "Tercera magnitud, verde claro, textura fina.",
    criterion: "Delimitan las ventanas sin obstruir las visuales.",
  },
  {
    code: "09–10",
    role: "Trepadoras de pérgola",
    traits: "Caducas, floración perfumada y tonos otoñales.",
    criterion: "Dan sombra en verano y dejan pasar el sol en invierno.",
  },
  {
    code: "11–16",
    role: "Acompañamiento del sendero",
    traits: "Arbustos semipersistentes, floración blanca o lila.",
    criterion: "Acompañan el recorrido sin cerrarlo visualmente.",
  },
  {
    code: "17–19",
    role: "Base vegetal",
    traits: "Arbustos persistentes de verde oscuro y alta densidad.",
    criterion: "Enmarcan el árbol 20 y aportan privacidad.",
  },
  {
    code: "20",
    role: "Árbol de borde",
    traits: "Segunda magnitud, copa aparasolada, semipersistente.",
    criterion: "Equilibra el conjunto y proyecta sombra ligera.",
  },
  {
    code: "21–23",
    role: "Conjunto arbóreo de fondo",
    traits: "Caducos, copa redondeada, tonos anaranjados en otoño.",
    criterion: "Aportan altura, profundidad y variación estacional.",
  },
  {
    code: "24–25",
    role: "Arbustos de transición",
    traits: "Segunda magnitud, verde claro, floración blanca.",
    criterion: "Conectan visualmente las distintas alturas vegetales.",
  },
  {
    code: "26",
    role: "Trepadora perimetral",
    traits: "Persistente, hojas pequeñas y textura fina.",
    criterion: "Suaviza el cerco y consolida el límite natural.",
  },
];
