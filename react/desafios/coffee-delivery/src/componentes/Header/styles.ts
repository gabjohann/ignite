import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme['base-background']};

  padding: 2rem 7.7rem;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0.5rem;
  gap: 0.5rem;

  border-radius: 6px;

  color: ${(props) => props.theme['purple']};
`;

export const CartButton = styled.button`
  border: none;
  padding: 0.5rem;

  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`;
