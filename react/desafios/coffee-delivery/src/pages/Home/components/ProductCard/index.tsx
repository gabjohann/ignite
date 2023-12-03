import { ShoppingCart } from '@phosphor-icons/react';

import {
  Buy,
  CartIcon,
  ProductCardContainer,
  ProductDescription,
  ProductPrice,
  ProductType,
} from './styles';
import { ProductAmount } from '../../../../componentes/ProductAmount';
import { useCart } from '../../../../hooks/useCart';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  coffee: {
    id: string;
    name: string;
    description: string;
    type: string[];
    price: number;
    imageSrc: string;
  };
}

export function ProductCard({ coffee }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { addItem } = useCart();

  function handleAddItem() {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <ProductCardContainer>
      <img src={coffee.imageSrc} alt={coffee.name} />
      <ProductType>
        {coffee.type.map((type, index) => (
          <div key={index}>
            <p>{type}</p>
          </div>
        ))}
      </ProductType>
      <h1>{coffee.name}</h1>
      <ProductDescription>{coffee.description}</ProductDescription>

      <Buy>
        <ProductPrice>
          <span>R$ </span>
          {coffee.price}
        </ProductPrice>

        <ProductAmount />

        <CartIcon onClick={handleAddItem}>
          <ShoppingCart size={22} weight='fill' id='cart-icon' />
        </CartIcon>
      </Buy>
    </ProductCardContainer>
  );
}
