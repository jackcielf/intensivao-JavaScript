import { NavegacaoComponent } from "./shared/components/navegacao.component";
import { ItemCardapioComponent } from "./shared/components/item-cardapio.component";
import { CardapioItem } from "./shared/interfaces/item-cardapio";

import Hashtaurante from "./assets/hashtaurante.webp";
import { mainDishes, desserts, drinks } from "./cardapioDados";

import "./App.css";
import { useState } from "react";

const App = () => {
  const menuPages = [ mainDishes, desserts, drinks ];
  const [selectedPage, setSelectedPage] = useState(() => 0);

  return (
    <>
      <img src={ Hashtaurante } alt="Imagem" />
      <NavegacaoComponent changePageSelected={setSelectedPage} />

      <div className="menu">
        { menuPages[selectedPage].map((item: CardapioItem, index: number) => <ItemCardapioComponent key={ index } item={ item } /> ) }
      </div>
    </>
  );
};

export default App;
