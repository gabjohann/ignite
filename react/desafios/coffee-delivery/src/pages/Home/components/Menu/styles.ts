import styled from 'styled-components';

export const MenuContainer = styled.div`
  padding: 2rem 7.7rem;

  background-color: ${(props) => props.theme['base-background']};
`;

export const MenuTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
`;

export const ProductList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, auto);
  column-gap: 2rem;
  row-gap: 2.5rem;

  padding: 2.125rem 7.7rem;
`;
