import type { Plant } from "@/domain/plant";
import mburucuya from "./images/mburucuya.jpg";
import jazminDeLeche from "./images/jazmin-de-leche.jpg";
import verbenaBonariensis from "./images/verbena-bonariensis.jpg";
import salviaPallida from "./images/salvia-pallida.jpg";
import glandulariaAndina from "./images/glandularia-andina.jpg";
import schizachyriumMicrostachyum from "./images/schizachyrium-microstachyum.jpg";
import nassellaTenuissima from "./images/nassella-tenuissima.jpg";
import grindeliaPulchella from "./images/grindelia-pulchella.jpg";
import salviaGreggii from "./images/salvia-greggii.jpg";
import lavanda from "./images/lavanda.jpg";
import santolina from "./images/santolina.jpg";
import senecioAzul from "./images/senecio-azul.jpg";
import achillea from "./images/achillea.jpg";

// Especies usadas en "Proyecto Terraza".
export const terrazaPlants: Plant[] = [
  {
    id: "verbena-bonariensis",
    scientificName: "Verbena bonariensis",
    traits: [],
    picture: { image: verbenaBonariensis, alt: "Foto de Verbena bonariensis" },
  },
  {
    id: "salvia-pallida",
    scientificName: "Salvia pallida",
    traits: [],
    picture: { image: salviaPallida, alt: "Foto de Salvia pallida" },
  },
  {
    id: "glandularia-andina",
    scientificName: "Glandularia andina",
    traits: [],
    picture: { image: glandulariaAndina, alt: "Foto de Glandularia andina" },
  },
  {
    id: "schizachyrium-microstachyum",
    scientificName: "Schizachyrium microstachyum",
    commonName: "Paja colorada",
    traits: [],
    picture: { image: schizachyriumMicrostachyum, alt: "Foto de Schizachyrium microstachyum" },
  },
  {
    id: "nassella-tenuissima",
    scientificName: "Nassella tenuissima",
    commonName: "Stipa",
    traits: [],
    picture: { image: nassellaTenuissima, alt: "Foto de Nassella tenuissima" },
  },
  {
    id: "grindelia-pulchella",
    scientificName: "Grindelia pulchella",
    commonName: "Melosa",
    traits: [],
    picture: { image: grindeliaPulchella, alt: "Foto de Grindelia pulchella" },
  },
  {
    id: "salvia-greggii",
    scientificName: "Salvia greggii",
    traits: [],
    picture: { image: salviaGreggii, alt: "Foto de Salvia greggii" },
  },
  {
    id: "lavanda",
    scientificName: "Lavandula spp.",
    commonName: "Lavanda",
    traits: [],
    picture: { image: lavanda, alt: "Foto de Lavanda" },
  },
  {
    id: "santolina",
    commonName: "Santolina",
    traits: [],
    picture: { image: santolina, alt: "Foto de Santolina" },
  },
  {
    id: "senecio-azul",
    commonName: "Senecio azul",
    traits: [],
    picture: { image: senecioAzul, alt: "Foto de Senecio azul" },
  },
  {
    id: "achillea",
    commonName: "Achillea",
    traits: [],
    picture: { image: achillea, alt: "Foto de Achillea" },
  },
  {
    id: "mburucuya",
    commonName: "Mburucuyá",
    traits: [
      "Nativa argentina, ideal para pleno sol",
    ],
    picture: {
      image: mburucuya,
      alt: "Foto de Mburucuyá",
      credit: { text: "Petar Milošević · CC BY-SA 4.0 · Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Passiflora_caerulea_(makro_close-up).jpg" },
    },
  },
  {
    id: "jazmin-de-la-selva",
    commonName: "Jazmín de la selva",
    traits: [
      "Flores blancas y crecimiento rápido",
    ],
  },
  {
    id: "jazmin-de-leche",
    commonName: "Jazmín de leche",
    traits: [
      "Follaje verde todo el año y flores perfumadas",
    ],
    picture: {
      image: jazminDeLeche,
      alt: "Foto de Jazmín de leche",
      credit: { text: "Parchaco · CC0 · Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Trachelospermum_jasminoides_Reunion.jpg" },
    },
  },
];
