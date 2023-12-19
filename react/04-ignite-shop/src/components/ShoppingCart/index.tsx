import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { X } from '@phosphor-icons/react';
import { CartContext } from '../../contexts/CartContext';
import {
  AmountLabel,
  AmountNumber,
  IconButton,
  ImageCard,
  OrderSummary,
  ProdctInfo,
  QuantityLabel,
  QuantityNumber,
  ShoppingCartContainer,
  ShoppingCartList,
} from '../../styles/pages/shoppingCart';

export function ShoppingCart() {
  const { cartCount, cartDetails, removeItem, redirectToCheckout } =
    useShoppingCart();

  const [status, setStatus] = useState('idle');

  const { shoppingCartState, handleOpenShoppingCart } = useContext(CartContext);

  const toggleShoppingList = () => {
    handleOpenShoppingCart(!shoppingCartState);
  };

  function handleRemoveProductTShoppingCart(productId: string) {
    removeItem(productId);
  }

  async function handleGoToCheckout(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    if (cartCount && cartCount > 0) {
      setStatus('idle');
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus('redirect-error');
        }
      } catch (error) {
        console.error(error);
        setStatus('redirect-error');
      }
    } else {
      setStatus('missing-items');
    }
  }

  const totalPrice = Object.values(cartDetails).reduce((total, product) => {
    const numericPrice = parseFloat(
      product.price.toString().slice(3).replace(',', '.')
    );

    if (!isNaN(numericPrice)) {
      return total + numericPrice * product.quantity;
    }

    return total;
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <ShoppingCartContainer>
      <IconButton onClick={toggleShoppingList}>
        <X width={24} height={24} weight='bold' />
      </IconButton>

      <ShoppingCartList>
        <h1>Sacola de compras</h1>
        {Object.values(cartDetails ?? {}).map((product) => {
          return (
            <>
              <ul key={product.id}>
                <li>
                  <ImageCard>
                    <Image
                      src={product.imageUrl}
                      alt=''
                      width={102}
                      height={93}
                    />
                  </ImageCard>
                  <ProdctInfo>
                    <p>{product.name}</p>
                    <strong>{product.price}</strong>
                    <button
                      onClick={() =>
                        handleRemoveProductTShoppingCart(product.id)
                      }
                    >
                      Remover
                    </button>
                  </ProdctInfo>
                </li>
              </ul>

              <OrderSummary>
                <div>
                  <div>
                    <QuantityLabel>Quantidade</QuantityLabel>
                  </div>
                  <div>
                    <QuantityNumber>
                      {cartCount === 1
                        ? cartCount + ' item'
                        : cartCount + ' itens'}
                    </QuantityNumber>
                  </div>
                </div>
                <div>
                  <div>
                    <AmountLabel>Valor total</AmountLabel>
                  </div>
                  <div>
                    <AmountNumber>{formattedTotalPrice}</AmountNumber>
                  </div>
                </div>
                <div>
                  <button onClick={handleGoToCheckout}>Finalizar compra</button>
                </div>
              </OrderSummary>
            </>
          );
        })}
      </ShoppingCartList>
    </ShoppingCartContainer>
  );
}
