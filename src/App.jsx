import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ItemBoard from './components/item-board/ItemBoard';
import { CartContextProvider } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import About from './components/about/About';

function App() {
  const[section, setSection]=useState('Каталог');

  const updateSection = (newSection) =>{
    setSection(newSection);
    console.log(newSection);
  }
  
  return (
    <div className='App'>
      <Header 
        section={section}
        updateSection={updateSection}
      />
      <br></br>
      <div className='main'>
        <CartContextProvider>
          {section=="Каталог" && <ItemBoard/>}
          {section=="Корзина" && <Cart/>}
          {section=="О нас" && <About/>}
          {section=="Корзина" && <Cart/>}
        </CartContextProvider>
      </div>
    </div>
  )
}

export default App
