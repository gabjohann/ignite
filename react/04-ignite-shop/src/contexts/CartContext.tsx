import { ReactNode, createContext, useState } from 'react';

interface CartContextProps {
  shoppingCartState: boolean;
  handleOpenShoppingCart: (state: boolean) => void;
  openShoppingCart: () => void;
  closeShoppingCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartStateProvider({ children }: CartProviderProps) {
  const [shoppingCartState, setShoppingCartState] = useState(false);

  function handleOpenShoppingCart(state: boolean) {
    setShoppingCartState(state);
  }

  function openShoppingCart() {
    setShoppingCartState(true);
  }

  function closeShoppingCart() {
    setShoppingCartState(false);
  }

  return (
    <CartContext.Provider
      value={{
        shoppingCartState,
        handleOpenShoppingCart,
        openShoppingCart,
        closeShoppingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
