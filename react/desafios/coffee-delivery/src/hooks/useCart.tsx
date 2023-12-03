import { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

export function useCart() {
  return useContext(ShoppingCartContext);
}
