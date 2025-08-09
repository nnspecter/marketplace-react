import { Children, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ItemBoard from './components/item-board/ItemBoard';
import { CartContextProvider } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import About from './components/about/About';
import { AnimatePresence, motion } from 'framer-motion';
import { SortContextProvider } from './components/item-board/SortContext';
import ItemsSort from './components/item-board/ItemsSort';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const[section, setSection]=useState('О нас');

  const updateSection = (newSection) =>{
    setSection(newSection);
    console.log(newSection);
  }
  
  return (
    <div className='App'>
      <Router>
        <Header/>
        <br></br>


        <div className='main'>
          <CartContextProvider>
            <AnimatePresence mode="wait">

              {/* Каталог */}
              <RouteWrapper path="/catalog">
                  <SortContextProvider>
                    <ItemsSort/>
                    <ItemBoard/>
                  </SortContextProvider>
              </RouteWrapper>

              {/*О нас*/ }
              <RouteWrapper path="/about">
                <About/>
              </RouteWrapper>

              <RouteWrapper path="/cart">
                <Cart/>
              </RouteWrapper>

            </AnimatePresence>
          </CartContextProvider>
        </div>
      </Router>
    </div>
  )
}

const RouteWrapper = ({path, children}) => {
  return(
    <Routes>
      <Route
        path={path}
        element={
          <motion.div
            key={path}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}>
            {children}
          </motion.div>
        }
      />
    </Routes>
  )
}

export default App
