import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem;

  border-radius: 6px 36px 6px 36px;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 130%;
  }

  img {
    margin-top: -1.25rem;
  }
`;

export const ProductName = styled.h1``;
export const ProductDescription = styled.p`
  margin: 0.5rem auto 2rem;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`;

export const ProductType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  div {
    margin: 0.75rem auto 1rem;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
  }

  p {
    font-weight: bold;
    font-size: 0.625rem;
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.25rem;
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  gap: 0.1875rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-text']};

  margin-right: 1.4375rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const CartIcon = styled.button`
  padding: 0.5rem;
  border: 0;

  display: flex;
  align-items: center;
  border-radius: 6px;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
`;
