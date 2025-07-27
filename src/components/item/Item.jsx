import React, { useContext, useId } from 'react';
import "./item.css";
import star from "../../assets/star.png";
import monitor from "../../assets/monitor.jpg"
import basket from "../../assets/basket.png"
import { CartContext } from '../Cart/CartContext';


const Item = ({ id, image, title, rating, price}) => {
  
  const newItem={
    id: id,
    image: image,
    title: title,
    rating: rating,
    price: price
  }

  const{updateItems} = useContext(CartContext);

  const handleClick = () =>{
    updateItems(newItem)
  }

  return (
    <div className='item' id={`item-${id}`}>
        <img src={image}></img>
        <h3 className='item-name' >{title}</h3>
        <div className='item-line1'>
            <div className='star'><p>{rating}</p>
                <img src={star}/>
            </div>
            <p>29 000 reviews</p>
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

export default Item