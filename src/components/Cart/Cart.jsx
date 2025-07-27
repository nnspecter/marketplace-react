import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
  const {item} = useContext(CartContext);

  return (

    <div>
        <h1>Корзина</h1>
        {item.map((e)=>{
        return <h3>{e.title}</h3>
        })}
    </div>
  )
}

export default Cart