import React, { createContext, useState } from 'react'
export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const[item, setNewItems] = useState([]);

    const updateItems = (item) => {
        setNewItems([...item, setNewItems]);
    }

  return (
    <CartContext.Provider value = {{item, updateItems}}>
        {children}
    </CartContext.Provider>
  )
}
