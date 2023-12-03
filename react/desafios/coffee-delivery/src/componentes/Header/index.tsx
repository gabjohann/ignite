import { HeaderContainer, NavContainer, Location, CartButton } from './styles';
import { NavLink } from 'react-router-dom';
import logo from '/assets/logo.svg';
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt='' />

      <NavContainer>
        <Location>
          <MapPin size={32} weight='fill' />
          <p>Porto Alegre, RS</p>
        </Location>

        <NavLink to='/' title='Cart'>
          <CartButton>
            <ShoppingCartSimple size={32} weight='fill' />
          </CartButton>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
}
