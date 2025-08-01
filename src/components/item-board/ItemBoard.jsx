import React, { useEffect, useState } from 'react'
import ItemCard from '../item/ItemCard'
import "./ItemBoard.css"
import useFetch from '../customHooks/useFetch';
import { CartContext, CartContextProvider } from '../Cart/CartContext';
import ItemsSort from './ItemsSort';
const ItemBoard = () => {
  const[itemsData, setItemsData] = useState({products: []});


  //api товаров 
  const url = "https://dummyjson.com/products"
  const {data, loading, error} = useFetch(url);

  return (
    <div className='ItemBoard'>
      <ItemsSort/>
      <div className='BoardContainer'>
        {
          data.products.slice(0, 150).map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            image={item.images[0]}
            title={item.title}
            rating={item.rating}
            price={item.price}
            reviews={Object.keys(item.reviews).length}
          />
            ) 
          )
        }
      </div>
    </div>
  )
}

export default ItemBoard