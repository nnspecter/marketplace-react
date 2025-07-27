import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header/Header';
import ItemBoard from './components/item-board/ItemBoard';
import { CartContextProvider } from './components/customHooks/Cart/CartContext';
import Cart from './components/customHooks/Cart/Cart';

function App() {
  const [cart, setCartItems] = useState([]);
  
  const addItem = (item) => {
    setCartItems([...cart, item]);
  }

  return (
    <div className='App'>
    <Header/>
    <br></br>
    <CartContextProvider>
      <ItemBoard/>
      <Cart/>
    </CartContextProvider>
    
    </div>
  )
}

export default App
