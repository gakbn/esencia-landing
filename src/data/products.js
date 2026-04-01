// Importamos las imágenes desde la carpeta assets
import imgTartaleta from '../assets/Tartaleta.jpg'; // Ojo a la 'T' mayúscula de tu archivo
import imgAtun from '../assets/atun.jpg';
import imgCarlota from '../assets/carlota.jpg';
import imgSalami from '../assets/salami.jpg';

export const products = [
  {
    id: 1,
    name: "Mini Tartaleta de Fruta",
    description: "Base crujiente con relleno cremoso y frutas frescas de temporada, con un toque brillante.",
    prices: { 1: 18, 6: 100, 12: 190 },
    category: "Tartaleta",
    image: imgTartaleta
  },
  {
    id: 2,
    name: "Mini Sandwich de Atún",
    description: "Pan suave con relleno de atún cremoso y fresco, con ingredientes ligeros.",
    prices: { 1: 15, 6: 85, 12: 160 },
    category: "Sándwich",
    image: imgAtun
  },
  {
    id: 3,
    name: "Carlota de Limón en Vaso",
    description: "Postre cremoso con capas de galleta y crema de limón, perfecto balance.",
    prices: { 1: 25, 6: 140, 12: 260 },
    category: "Carlota",
    image: imgCarlota
  },
  {
    id: 4,
    name: "Mini Sándwich de Salami",
    description: "Pan brioche suave con relleno de salami, lechuga picada, elegante y delicioso.",
    prices: { 1: 20, 6: 110, 12: 210 },
    category: "Sándwich",
    image: imgSalami
  }
];