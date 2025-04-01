import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { useState } from "react";
 import Modal from "./components/UI/Modal";

const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
 
   const showCartHandler = () => {
     setIsCartOpen(true);
   };
 
   const hideCartHandler = () => {
     setIsCartOpen(false);
   };

 return (
  <CartContextProvider>
    {isCartOpen && <Modal onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <Meals />
  </CartContextProvider>
  );
}

export default App;
