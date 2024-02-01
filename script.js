const imgViewCurrent = document.querySelector("#imagem-visualizacao");
const txtProductSizeTitle = document.querySelector(".tamanho-item");
const txtProductNameTitle = document.querySelector(".name-color-item");
const txtColorName = document.querySelector(".color-name");
const imgThumbnail0 = document.querySelector("#imagem-0-miniatura"); 
const imgThumbnail1 = document.querySelector("#imagem-1-miniatura"); 
const imgThumbnail2 = document.querySelector("#imagem-2-miniatura"); 

const colorOptions = [
  {
    name: "verde-cipreste",
    path: "imagens-verde-cipreste",
  },
  {
    name: "azul-inverno",
    path: "imagens-azul-inverno",
  },
  {
    name: "meia-noite",
    path: "imagens-meia-noite",
  },
  {
    name: "estelar",
    path: "imagens-estelar",
  },
  {
    name: "rosa-claro",
    path: "imagens-rosa-claro",
  },
];

const optionsSize = ["41 mm", "45 mm"];

let imageSelected = 1;
let sizeSelected = 1;

const changeImage = () => {
  let optionSelectedId = document.querySelector(
    "[name='opcao-imagem']:checked"
  ).id;
  imageSelected = optionSelectedId.charAt(0);
  imgViewCurrent.src = `./imagens/opcoes-cores/${colorOptions[colorSelected].path}/imagem-${imageSelected}.jpeg`;
};

const changeSize = () => {
  let optionSelectedId = document.querySelector(
    "[name='opcao-tamanho']:checked"
  ).id;
  sizeSelected = optionSelectedId.charAt(0);

  txtProductSizeTitle.innerText = optionsSize[sizeSelected];

  if (optionsSize[sizeSelected] === optionsSize[0]) {
    imgViewCurrent.classList.add("caixa-pequena");
  } else {
    imgViewCurrent.classList.remove("caixa-pequena");
  }
};

const changeColorItem = () => {
  let optionSelectedId = document.querySelector(
    "[name='opcao-cor']:checked"
  ).id;
  colorSelected = optionSelectedId.charAt(0);
  imgViewCurrent.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imageSelected}.jpeg`;

  txtProductNameTitle.innerText = colorOptions[colorSelected].name;

  txtColorName.innerText = colorOptions[colorSelected].name;

  imgThumbnail0.src = `./imagens/opcoes-cores/${colorOptions[colorSelected].path}/imagem-0.jpeg`;
  imgThumbnail1.src = `./imagens/opcoes-cores/${colorOptions[colorSelected].path}/imagem-1.jpeg`;
  imgThumbnail2.src = `./imagens/opcoes-cores/${colorOptions[colorSelected].path}/imagem-2.jpeg`;

  imgViewCurrent.src = `./imagens/opcoes-cores/${colorOptions[colorSelected].path}/imagem-${imageSelected}.jpeg`;


};
