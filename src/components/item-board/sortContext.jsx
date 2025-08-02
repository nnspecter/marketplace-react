import React, { createContext, useEffect, useState } from 'react'
import useFetch from '../customHooks/useFetch';
export const SortContext = createContext();

export const SortContextProvider = ({children}) => {
    const url = "https://dummyjson.com/products"
    const {data, loading, error} = useFetch(url);
    const [items, setItems]=useState({ products: [] });
    const [category, setCategory] =useState("all");
    const[sort, setSort] = useState("actual")
    useEffect(()=>{
        if (!error){
            setItems({...data});
        }
    }, [data])
    
    const updateCategory =(newCategory) =>{
        setCategory(newCategory);
        console.log(newCategory);
    }

    const updateSort =(newSort) =>{
        setSort(newSort);
        console.log(newSort);
    }

    const updateItems = (newItems) => {
        setItems(newItems);
    }

  return (
    <SortContext.Provider value={{
            items,
            updateItems,
            loading,
            error,
            sort,
            updateSort,
            category,
            updateCategory,
        }}>
        {children}
    </SortContext.Provider>
  )
}
