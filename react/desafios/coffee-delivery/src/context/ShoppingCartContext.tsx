import { useNavigate } from 'react-router-dom';
import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { Item, Order, shoppingCartReducer } from '../reducers/cart/reducer';
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions';

interface ShoppingCartContextType {
  shoppingCart: Item[];
  orders: Order[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item['id']) => void;
  decrementItemQuantity: (itemId: Item['id']) => void;
  incrementItemQuantity: (itemId: Item['id']) => void;
  checkout: (order: OrderInfo) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}
export function ShoppingCartContexxtProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shoppingCartState, dispatch] = useReducer(
    shoppingCartReducer,
    {
      shoppingCart: [],
      orders: [],
    },
    (shoppingCartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state'
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return shoppingCartState;
    }
  );

  const navigate = useNavigate();

  const { shoppingCart, orders } = shoppingCartState;

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId));
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate));
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  useEffect(() => {
    if (shoppingCartState) {
      const stateJSON = JSON.stringify(shoppingCartState);

      localStorage.setItem('@coffee-delivery:cart-state', stateJSON);
    }
  }, [shoppingCartState]);

  return (
    <ShoppingCartContext.Provider
      value={{
        addItem,
        shoppingCart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
