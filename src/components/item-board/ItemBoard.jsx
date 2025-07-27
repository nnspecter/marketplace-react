import React, { useEffect, useState } from 'react'
import Item from '../item/Item'
import "./ItemBoard.css"
import useFetch from '../customHooks/useFetch';
import { CartContext, CartContextProvider } from '../Cart/CartContext';
const ItemBoard = () => {
  const[itemsData, setItemsData] = useState({products: []});


  //api товаров 
  const url = "https://dummyjson.com/products"
  const {data, loading, error} = useFetch(url);

  return (
    <div className='ItemBoard'>
      <div className='BoardContainer'>
        {
          data.products.slice(0, 150).map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.images[0]}
            title={item.title}
            rating={item.rating}
            price={item.price}
          />
            ) 
          )
        }
      </div>
    </div>
  )
}

export default ItemBoard