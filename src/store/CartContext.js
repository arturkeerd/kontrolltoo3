import { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  clearCart: () => {}
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex(i => i.id === action.item.id);
    const updatedItems = [...state.items];

    if (existingItemIndex !== -1) {
      const updatedItem = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { items: updatedItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { items: [] };
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  };

  // Log updated cart items whenever they change
  useEffect(() => {
    console.log("Updated Cart Items:", cartState.items);
  }, [cartState.items]);

  return (
    <CartContext.Provider value={{
      items: cartState.items,
      addItem: addItemHandler,
      clearCart: clearCartHandler
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;