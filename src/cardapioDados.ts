import enroladinhoMignonImg from "./assets/pratos/enroladinho-mignon.jpeg";
import casal20Img from "./assets/pratos/casal-20.jpeg";
import burguerPicanhaImg from "./assets/pratos/burguer-picanha.jpeg";
import fishChipsImg from "./assets/pratos/fish-chips.jpeg";
import risotoCamaraoTrufadoImg from "./assets/pratos/risoto-camarao-trufado.jpeg";

import brownieImg from "./assets/sobremesas/brownie.jpeg";
import cocadaFornoImg from "./assets/sobremesas/cocada-forno.jpeg";
import petitGateauImg from "./assets/sobremesas/petit-gateau.jpeg";

import aguaSemGasImg from "./assets/bebidas/agua-sem-gas.jpeg";
import aguaComGasImg from "./assets/bebidas/agua-com-gas.jpeg";
import cocaColaImg from "./assets/bebidas/coca-cola.jpeg";
import guaranaImg from "./assets/bebidas/guarana.jpeg";
import heinekenImg from "./assets/bebidas/heineken.jpeg";

export const mainDishes = [
  {
    id: 1,
    name: "Enroladinho de Mignon",
    price: "R$ 64,90",
    image: enroladinhoMignonImg,
    description: "Finíssimas fatias de filé mignon enroladas no parmesão",
  },
  {
    id: 2,
    name: "Casal 20",
    price: "R$ 29,00",
    image: casal20Img,
    description: "Casal perfeito pão de alho caseiro e linguiça toscana grill",
  },
  {
    id: 3,
    name: "Burguer de Picanha",
    price: "R$ 44,90",
    image: burguerPicanhaImg,
    description:
      "Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon",
  },
  {
    id: 4,
    name: "Fish and Chips",
    price: "R$ 79,90",
    image: fishChipsImg,
    description:
      "Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito",
  },
  {
    id: 5,
    name: "Risoto de Camarão Trufado",
    price: "R$ 72,90",
    image: risotoCamaraoTrufadoImg,
    description:
      "Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko",
  },
];

export const desserts = [
  {
    id: 6,
    name: "Brownie",
    price: "R$ 32,90",
    image: brownieImg,
    description:
      "Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate",
  },
  {
    id: 7,
    name: "Cocada de Forno",
    price: "R$ 32,90",
    image: cocadaFornoImg,
    description:
      "Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme",
  },
  {
    id: 8,
    name: "Petit Gateau",
    price: "R$ 34,90",
    image: petitGateauImg,
    description:
      "Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju",
  },
];

export const drinks = [
  {
    id: 9,
    name: "Água sem gás",
    price: "R$ 6,90",
    image: aguaSemGasImg,
    description: "310ml",
  },
  {
    id: 10,
    name: "Água com gás",
    price: "R$ 7,90",
    image: aguaComGasImg,
    description: "310ml",
  },
  {
    id: 11,
    name: "Coca-Cola",
    price: "R$ 7,90",
    image: cocaColaImg,
    description: "290ml",
  },
  {
    id: 12,
    name: "Guaraná Antártica",
    price: "R$ 7,90",
    image: guaranaImg,
    description: "350ml",
  },
  {
    id: 13,
    name: "Heineken",
    price: "R$ 15,90",
    image: heinekenImg,
    description: "355ml",
  },
];
