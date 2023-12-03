import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 2rem;
  padding: 2.5rem 7.7rem;

  background: ${(props) => props.theme['base-background']};

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const SelectedCoffeesContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px 6px 36px;
`;

export const Divider = styled.div`
  padding: 0 2.5rem;

  hr {
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }
`;
