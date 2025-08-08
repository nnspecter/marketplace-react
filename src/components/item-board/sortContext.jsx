import React, { createContext, useEffect, useState } from 'react'
import useFetch from '../customHooks/useFetch';
export const SortContext = createContext();

export const SortContextProvider = ({children}) => {
    const url = "https://dummyjson.com/products"
    const {data, loading, error} = useFetch(url);
    const [items, setItems]=useState({ products: [] });
    const [category, setCategory] =useState("all");
    const[sort, setSort] = useState("default")
    useEffect(()=>{
        if (!error){
            setItems({...data});
            updateSort(sort)
        }
    }, [data])
    
    const updateCategory =(newCategory) =>{
        setCategory(newCategory);
        
        if(!data || !Array.isArray(data.products)){
            setItems({products: []});
            return;
        }

        if(newCategory==="all"){
            setItems({products: [...data.products]})
        }
        else{
            setItems({
            products: data.products.filter(product => product.category.includes(newCategory))
        })
        }
        updateSort(sort);
        console.log(newCategory);
    }

    const updateSort =(newSort) =>{
        setSort(newSort);
        switch(newSort){
            case "default":
                setItems(prev => ({
                    ...prev,
                    products: [...prev.products].sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }))
                }));
                break;
            case "upPrice":
                setItems(prev => ({
                    ...prev,
                    products: [...prev.products].sort((a, b) => a.price - b.price)
                }));
                break;
            case "dwPrice":
                setItems(prev => ({
                    ...prev,
                    products: [...prev.products].sort((a, b) => b.price - a.price)
                }));
                break;
            case "rating":
                setItems(prev => ({
                    ...prev,
                    products: [...prev.products].sort((a, b) => b.rating - a.rating)
                }));
                break;
        }
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
