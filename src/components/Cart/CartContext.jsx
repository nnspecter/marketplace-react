import React, { createContext, useState } from 'react'
export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const[item, setItems] = useState([]);

    const updateItems = (newItem) => {
      const index = item.findIndex(el => el.id === newItem.id);

      if(index !=-1){
        item[index].count++;
        return;
        }
      setItems(prev =>[...prev, newItem]);
    }

   const handleClick = (increment, id) => {
    setItems(prevItems => {
      const index = prevItems.findIndex(el => el.id === id);
      if(index === -1){return prevItems;};

      const updatedItems = [...prevItems];
      const newCount = increment ? updatedItems[index].count + 1 : updatedItems[index].count - 1;
      
      if(newCount <= 0){
        return prevItems.filter(el=> el.id !==id);
      }
      updatedItems[index] = {...updatedItems[index], count: newCount};
      return updatedItems;
    })
   }
      
   

  return (
    <CartContext.Provider value = {{item, updateItems, handleClick}}>
        {children}
    </CartContext.Provider>
  )
}
