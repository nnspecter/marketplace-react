import React, { useContext, useId } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { SortContext } from '../item-board/sortContext';
import "./ItemPage.css"
import { CartContext } from '../Cart/CartContext';
import AddButton from './AddButton';
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
        
        <div className='item-page-name'>
          <h1>{item[0].title}</h1>
        </div>
        <div className='item-page-bt'>
          <AddButton id={item[0].id} />
        </div>
        <div className='item-page-description'>
          <p>{item[0].description}</p>
        </div>
    </div>

  )
}

export default ItemPage