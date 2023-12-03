import styled from 'styled-components';

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  margin-top: 1rem;

  img {
    margin-right: 1.25rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.5625rem;
  margin-bottom: 0.5rem;
`;

export const ProductTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-weight: 1rem;

  color: ${(props) => props.theme['base-subtitle']};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;
`;

export const RemoveProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};
  }
`;

export const ProductPrice = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1rem;

  color: ${(props) => props.theme['base-text']};
`;
