import React, { useContext, useId } from 'react';
import "./itemCard.css";
import star from "../../assets/star.png";
import monitor from "../../assets/monitor.jpg"
import basket from "../../assets/basket.png"
import { CartContext } from '../Cart/CartContext';
import { use } from 'react';


const ItemCard = ({ id, image, title, rating, price, reviews}) => {
  const key = useId();
  const newItem={
    key: key,
    id: id,
    image: image,
    title: title,
    rating: rating,
    price: price,
    count: 1,
  }

  const{updateItems} = useContext(CartContext);

  const handleClick = () =>{
    updateItems(newItem)
  }

  return (
    <div className='item' id={`item-${id}`}>
        <img src={image}></img>
        <div className='item-name'>
          <h3>{title}</h3>
        </div>
        <div className='item-line1'>
            <div className='star'><p>{rating}</p>
                <img src={star}/>
            </div>
            <p>{reviews} reviews</p>
            </div>
        <div className='item-line2'>
            <h2>{price}$</h2>
            <button onClick = {handleClick}>
                +
                <img src={basket}/>
            </button>
            </div>
    </div>
  )
}

export default ItemCard