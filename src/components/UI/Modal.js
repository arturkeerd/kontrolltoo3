import { useEffect, useRef } from "react";
import Button from "./Button";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import formatPrice from "../../utils/formatPrice";

const Modal = ({ onClose }) => {
  const dialog = useRef();
  const cartContext = useContext(CartContext);

  const totalPrice = cartContext.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const dialogNode = dialog.current;
    dialogNode.showModal();

    return () => dialogNode.close();
  }, []);

  const checkoutHandler = () => {
    cartContext.clearCart();
    onClose();
  };

  return (
    <dialog className="modal" ref={dialog}>
      <h2>Cart</h2>
      {cartContext.items.length === 0 && <p>Your cart is empty.</p>}
      <ul className="cart">
        {cartContext.items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - {item.quantity} 
            </p>
          </li>
        ))}
      </ul>
      <div className="cart-total">
         {formatPrice(totalPrice)}
      </div>
      <div className="modal-actions">
        <Button onClick={onClose} textOnly>
          Close
        </Button>
        <Button onClick={checkoutHandler}>Checkout</Button>
      </div>
    </dialog>
  );
};

export default Modal;