import React, { useContext, useId } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { SortContext } from '../item-board/sortContext';
import "./ItemPage.css"
import AddButton from './AddButton';
import star from "../../assets/star.png";
const ItemPage = () => {
    const {id} = useParams();
    const{items} = useContext(SortContext);

    const findId = items.products.find(el=> el.id === parseInt(id));
    if(!findId){
        console.log("uncorrect id")
        return <Navigate to="/" replace/>
    }
    
    const item = items.products.filter(el => el.id === parseInt(id))

 
    
    
  return (
    <div className='item-page'>
        
      <div className='item-page-img'>
        <img src={item[0].images[0]} alt="" />
      </div>
          <div className='box-1'>
          <div className='item-page-name'>
            <h1>{item[0].title}</h1>
            <p>Категория: {item[0].category}</p>
            <div className='item-page-rate'>
              <h3>{item[0].rating}</h3>
              <img src={star}/>
            </div>
            
          </div>
          <div className='item-page-bt'>
            <AddButton id={item[0].id} />
            <h1>{item[0].price}$</h1>
          </div>
        </div>
        <div className='box-1'>
        <div className='item-page-description'>
          <h3>Описание:</h3>
          <p>{item[0].description}</p>
        </div>
        </div>

        {item[0].category === "furniture" &&
          <>
            <div className='item-dimensions'>
              <h3>Габариты:</h3>
              <p>Длина: {item[0].dimensions.depth} м.</p>
              <p>Ширина: {item[0].dimensions.width} м.</p>
              <p>Высота: {item[0].dimensions.height} м.</p>
            </div>
          </>}
          <div>

          </div>

    </div>
    
  )
}

export default ItemPage