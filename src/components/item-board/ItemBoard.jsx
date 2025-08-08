import React, { useContext, useState } from 'react'
import ItemCard from '../item/ItemCard'
import "./ItemBoard.css"
import useFetch from '../customHooks/useFetch';
import ItemsSort from './ItemsSort';
import { SortContext } from './SortContext';

const ItemBoard = () => {
  const{items} = useContext(SortContext);
  if(items.length === 0){
    return <p>Товары не найдены</p>
  }


  return (
      <div className='ItemBoard'>
        <div className='BoardContainer'>
          {
            items.products.map((item) => (
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