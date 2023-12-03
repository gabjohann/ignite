import { Trash } from '@phosphor-icons/react';
import { ProductAmount } from '../../../../componentes/ProductAmount';
import {
  ProductInfo,
  RemoveProduct,
  SelectedCoffeeContainer,
  Actions,
  ProductTitle,
  ProductPrice,
} from './styles';

interface SelectedCoffeeProps {
  imageSrc: string;
  title: string;
}

export function SelectedCoffee({ imageSrc, title }: SelectedCoffeeProps) {
  return (
    <SelectedCoffeeContainer>
      <img src={imageSrc} alt='' width={64} height={64} />
      <div>
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>R$ 9,99</ProductPrice>
        </ProductInfo>
        <Actions>
          <ProductAmount />
          <RemoveProduct>
            <Trash width={16} color='#8047F8' />
            <p>Remover</p>
          </RemoveProduct>
        </Actions>
      </div>
    </SelectedCoffeeContainer>
  );
}
