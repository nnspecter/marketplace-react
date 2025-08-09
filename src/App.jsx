import './App.css';
import Header from './components/header/Header';
import ItemBoard from './components/item-board/ItemBoard';
import { CartContextProvider } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import About from './components/about/About';
import { AnimatePresence, motion } from 'framer-motion';
import { SortContextProvider } from './components/item-board/SortContext';
import ItemsSort from './components/item-board/ItemsSort';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <br/>


        <div className='main'>
          <CartContextProvider>
            <AnimatedRoutes />
          </CartContextProvider>
        </div>
      </Router>
    </div>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation();
  return(
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      {/* Каталог */}
      <Route
        path="/catalog"
        element={
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            transition={{ duration: 0.3 }}>
            <SortContextProvider>
              <ItemsSort/>
              <ItemBoard/>
            </SortContextProvider>
          </motion.div>
        }
      />
            
      <Route
        path="/about"
        element={
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            transition={{ duration: 0.3 }}>
            <About/>
          </motion.div>
        }
      />

      <Route
        path="/cart"
        element={
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            transition={{ duration: 0.3 }}>
            <Cart/>
          </motion.div>
        }
      />
                
      </Routes>
    </AnimatePresence>
  )
}


export default App
