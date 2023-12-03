import styled from 'styled-components';

export const ProductAmountContainer = styled.div`
  margin-right: 0.5rem;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  color: ${(props) => props.theme['purple']};

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  p {
    color: ${(props) => props.theme['base-title']};
  }
`;

export const CounterButton = styled.button`
  border: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${(props) => props.theme['purple']};
  background: transparent;

  &:disabled {
    opacity: 0.5;
    color: ${(props) => props.theme['base-text']};
    cursor: not-allowed;
  }
`;
