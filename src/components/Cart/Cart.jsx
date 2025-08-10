import { useContext} from 'react'
import { CartContext } from './CartContext'
import "./Cart.css"
import deleteCard from "../../assets/delete.png"
import upArr from "../../assets/up.png"
import downArr from "../../assets/down.png"
const Cart = () => {
  const {item, handleClickCount, handleClickDelete} = useContext(CartContext);


  return (
    <div className='cart'>
        <h1>Корзина:</h1>
        {Object.keys(item).length == 0 && <p>Ваша корзина пуста, пожалуйста просмотрите наш каталог.</p>}
        {item.map((e)=>{
        return (
          <div className='cart-item' key={e.key}>
              <div className='imgName'>
                <div className='operate'>
                  <button onClick={() => handleClickDelete(e.id)}>
                  <img src={deleteCard}></img>
                  </button>
                  <div className='cart-count'> 
                      <button onClick = {()=>handleClickCount(true, e.id)} >
                        <img src={upArr}/>
                      </button>
                      <h1>{e.count}</h1>
                      <button onClick = {()=>handleClickCount(false, e.id)}>
                        <img src={downArr}/>
                      </button>
                  </div>
                </div>
                <img src={e.image}/>
                <h2>{e.title}</h2>
              </div>
              <div className='item-price'>
                
                <h2>{(e.price*e.count).toFixed(2)}$</h2>
              </div>
          </div>
        )
        })}
    </div>
  )
}

export default Cart