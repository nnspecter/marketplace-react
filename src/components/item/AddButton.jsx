import { useContext, useId } from 'react'
import { CartContext } from '../Cart/CartContext'
import { SortContext } from '../item-board/sortContext'
import basket from "../../assets/basket.png"

const AddButton = ({id}) => {
    const{updateItems} = useContext(CartContext);
    const{items} = useContext(SortContext);
    const key = useId();
    const item = items.products.filter(el => el.id === parseInt(id));
    const newItem={
        key: key,
        id: item[0].id,
        image: item[0].images[0],
        title: item[0].title,
        rating: item[0].rating,
        price: item[0].price,
        count: 1,
      }


  return (
        <button onClick = {() => updateItems(newItem)}>
            +
            <img src={basket}/>
        </button>
  )
}

export default AddButton