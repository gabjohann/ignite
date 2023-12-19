import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { Handbag } from '@phosphor-icons/react';
import { useShoppingCart } from 'use-shopping-cart';

import logoImg from '../../assets/logo.svg';
import { ShoppingCart } from '../ShoppingCart';
import { CartContext } from '../../contexts/CartContext';
import { HeaderContainer, ProductCounter } from './styles';

export function Header() {
  const { cartCount } = useShoppingCart();

  const { shoppingCartState, handleOpenShoppingCart } = useContext(CartContext);

  const toggleShoppingList = () => {
    handleOpenShoppingCart(!shoppingCartState);
  };

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt='' />
      </Link>

      <button onClick={toggleShoppingList}>
        <Handbag color='#8D8D99' width={24} height={24} />
        <ProductCounter>
          <span>{cartCount}</span>
        </ProductCounter>
      </button>
      {shoppingCartState && <ShoppingCart />}
    </HeaderContainer>
  );
}
