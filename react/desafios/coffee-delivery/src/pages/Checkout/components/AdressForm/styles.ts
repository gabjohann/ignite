import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 2.5rem;
  margin: 1rem auto 0.75rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`;

export const FormLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
  column-gap: 0.5rem;
  row-gap: 0.125rem;
`;

export const FormSubtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;

  color: ${(props) => props.theme['base-subtitle']};
`;

export const FormText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;

  color: ${(props) => props.theme['base-text']};
`;

export const AdressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;

  padding-top: 2rem;

  #cep {
    grid-column-start: 1;
  }

  #rua {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
  }

  #numero {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
  }

  #complemento {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
  }

  #bairro {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
  }

  #cidade {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
  }

  #uf {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
  }

  input {
    border: none;
    outline: none;
    padding: 0.75rem;
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;
