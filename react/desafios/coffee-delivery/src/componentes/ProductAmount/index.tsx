import { Minus, Plus } from '@phosphor-icons/react';
import { CounterButton, ProductAmountContainer } from './styles';
import { useState } from 'react';

export function ProductAmount() {
  const [counter, setCounter] = useState(1);

  function handleAddProduct() {
    setCounter(counter + 1);
  }
  function handleRemoveProduct() {
    setCounter(counter - 1);
  }

  return (
    <ProductAmountContainer>
      <CounterButton onClick={handleRemoveProduct} disabled={counter <= 1}>
        <Minus width={14} weight='bold' />
      </CounterButton>
      <p>{counter}</p>
      <CounterButton onClick={handleAddProduct}>
        <Plus width={14} weight='bold' />
      </CounterButton>
    </ProductAmountContainer>
  );
}
