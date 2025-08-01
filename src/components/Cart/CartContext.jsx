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
   const handleClickDelete =(id) =>{
    setItems(prevItems=>{
      const index = prevItems.findIndex(el => el.id === id)
      if(index === -1){return prevItems;};
      return prevItems.filter(el => el.id !== id);
    })
   }

   const handleClickCount = (increment, id) => {
    setItems(prevItems => {
      const index = prevItems.findIndex(el => el.id === id);
      if(index === -1){return prevItems;};

      const updatedItems = [...prevItems];
      const newCount = increment ? updatedItems[index].count + 1 : updatedItems[index].count - 1;
      
      if(newCount <= 0 || newCount >9){
        return prevItems;
      }

      updatedItems[index] = {...updatedItems[index], count: newCount};
      return updatedItems;
    })
   }
      
   

  return (
    <CartContext.Provider value = {{item, updateItems, handleClickCount, handleClickDelete}}>
        {children}
    </CartContext.Provider>
  )
}
