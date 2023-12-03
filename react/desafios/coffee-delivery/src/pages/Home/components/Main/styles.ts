import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-content: center;
  column-gap: 3.5rem;
  margin-top: 5.875rem;

  background-image: url('src/assets/background.png');
  background-size: cover;
  padding: 0 7.7rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  max-width: 36.75rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const CharacteristicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  margin-top: 4.125rem;
  margin-bottom: 6.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    color: ${(props) => props.theme['white']};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  #cart {
    padding: 0.5rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  #timer {
    padding: 0.5rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme['yellow']};
  }

  #package {
    padding: 0.5rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme['base-text']};
  }

  #coffee {
    padding: 0.5rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme['purple']};
  }
`;
