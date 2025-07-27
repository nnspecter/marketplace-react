import React, { createContext, useState } from 'react'
export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const[item, setItems] = useState([]);

    const updateItems = (newItem) => {
        setItems(prev =>[...prev, newItem]);
    }

  return (
    <CartContext.Provider value = {{item, updateItems}}>
        {children}
    </CartContext.Provider>
  )
}
