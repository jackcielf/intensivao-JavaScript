import { CardapioItem } from "../../shared/interfaces/item-cardapio";

export const ItemCardapioComponent = ({ item }: { item: CardapioItem }) => {
  return (
    <div className="container-item-cardapio">
      <div key={ item.id }>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <p>{item.description}</p>
      </div>
      <img src={item.image} alt="Item cardápio" />
    </div>
  );
};
