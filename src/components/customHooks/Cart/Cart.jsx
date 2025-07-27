import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
  const {item} = useContext(CartContext);

  return (
    <div>{item.map((e)=>{
      return <li>{e.title}</li>
    })}</div>
  )
}

export default Cart