import { useContext, useId } from 'react';
import "./itemCard.css";
import star from "../../assets/star.png";
import basket from "../../assets/basket.png"
import { CartContext } from '../Cart/CartContext';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';



const ItemCard = ({ id, image, title, rating, price, reviews}) => {
  

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='item' id={`item-${id}`}>
        <Link to={`/product/${id}`}>
        <div className='card-img'>
          <img src={image}></img>
        </div>
        <div className='item-name'>
          <h3>{title}</h3>
        </div>
        </Link>
        <div className='item-line1'>
            <div className='star'><p>{rating}</p>
                <img src={star}/>
            </div>
            <p>{reviews} reviews</p>
            </div>
        <div className='item-line2'>
            <h2>{price}$</h2>
            <AddButton id={id}/>
            </div>
    </div>
  )
}

export default ItemCard