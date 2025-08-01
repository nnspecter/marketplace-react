import React, { createContext, useEffect, useState } from 'react'
import useFetch from '../customHooks/useFetch';
export const SortContext = createContext();

export const SortContextProvider = ({children}) => {
    const url = "https://dummyjson.com/products"
    const {data, loading, error} = useFetch(url);
    const [items, setItems]=useState({ products: [] });
    useEffect(()=>{
        if (!error){
            setItems({...data});
        }
    }, [data])
    

    const updateItems = (newItems) => {
        setItems(newItems);
    }
  return (
    <SortContext.Provider value={{items, updateItems, loading, error}}>
        {children}
    </SortContext.Provider>
  )
}
