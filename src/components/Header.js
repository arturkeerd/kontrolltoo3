import logo from '../assets/logo.jpg'
import Button from "./UI/Button";
import { useContext } from 'react';
import CartContext from "../store/CartContext";
 

const Header = () => {

    const cartContext = useContext(CartContext)

    const totalQuantity = cartContext.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={() => console.log('Cart clicked')}>Cart ({totalQuantity})</Button>
            </nav>
        </header>
    )
}

export default Header