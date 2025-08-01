import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ItemBoard from './components/item-board/ItemBoard';
import { CartContextProvider } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import About from './components/about/About';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const[section, setSection]=useState('О нас');

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
          <AnimatePresence mode="wait">

            {section=="Каталог" && (
              <motion.div
                key="catalog"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity:0}}>
                <ItemBoard/>
              </motion.div>)}

            {section=="О нас" && (
              <motion.div
                key="about"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity:0}}>
                <About/>
              </motion.div>)}

            {section=="Корзина" && (
              <motion.div
                key="cart"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity:0}}>
                <Cart/>
              </motion.div>)}

          </AnimatePresence>
        </CartContextProvider>
      </div>
    </div>
  )
}

export default App
