import React, { useEffect, useState } from 'react'
import Item from '../item/item'
import "./ItemBoard.css"
const ItemBoard = () => {
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState('');
  const[itemsData, setItemsData] = useState({products: []});


  //api товаров 
  const url = "https://dummyjson.com/products"
  console.log(itemsData.products[1])
  useEffect(()=>{
    const fetchItems = async () =>{
      setLoading(true);
      setError('');
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error("Ошибка на сервере");
        }
        const data = await response.json();
        setItemsData(data);
      }
      catch(err){
        setError(err.message);
      }

      finally{
        setLoading(false)
      }
      }
    fetchItems();
  }, [])

  return (
    <div className='ItemBoard'>
      <div className='BoardContainer'>
        {itemsData.products.slice(0, 150).map((item) => (
          <Item
            key={item.id}
            image={item.images[0]}
            title={item.title}
            rating={item.rating}
            price={item.price}
          />
        ))}
        {itemsData.products.slice(0, 14).map((item) => (
          <Item
            key={item.id}
            image={item.images[0]}
            title={item.title}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default ItemBoard