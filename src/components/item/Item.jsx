import React, { useId } from 'react';
import "./item.css";
import star from "../../assets/star.png";
import monitor from "../../assets/monitor.jpg"
import basket from "../../assets/basket.png"
const Item = ({key, title, rating, price, image}) => {
  const id = useId();
  return (
    <div className='item' id={key}>
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
            <button>
                +
                <img src={basket}/>
            </button>
            </div>
    </div>
  )
}

export default Item