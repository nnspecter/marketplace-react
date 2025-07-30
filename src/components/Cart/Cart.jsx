import React, { useContext, useId, useState } from 'react'
import { CartContext } from './CartContext'
import "./Cart.css"
const Cart = () => {
  const {item, handleClick} = useContext(CartContext);


  return (
    <div>
        <h1>Корзина:</h1>
        {item.map((e)=>{
        return (
          <div className='cart-item' key={e.key}>
              <div className='imgName'>
                <div>
                    <button onClick = {()=>handleClick(true, e.id)} >+</button>
                    <h1>{e.count}</h1>
                    <button onClick = {()=>handleClick(false, e.id)}>--</button>
                </div>
                <img src={e.image}/>
                <h2>{e.title}</h2>
              </div>
              <div className='item-price'>
                
                <h2>{(e.price*e.count).toFixed(2)}$</h2>
              </div>
          </div>
        )
        })}
    </div>
  )
}

export default Cart