import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

import { useKeenSlider } from 'keen-slider/react';

import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import { HomeContainer, Product, ProductInfo } from '../styles/pages/home';
import { Product as ProductModel } from 'use-shopping-cart/core';

import 'keen-slider/keen-slider.min.css';
import { Handbag } from '@phosphor-icons/react';
import { useShoppingCart } from 'use-shopping-cart';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

interface HomeProps {
  products: ProductModel[];
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();
  const { openShoppingCart } = useContext(CartContext);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  function handleAddProductTShoppingCart(
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductModel
  ) {
    event.preventDefault();
    addItem(product);

    openShoppingCart();
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Product className='keen-slider__slide'>
                <Image
                  src={product.imageUrl}
                  alt=''
                  width={520}
                  height={480}
                  priority={true}
                />

                <footer>
                  <ProductInfo>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </ProductInfo>

                  <button
                    onClick={(event) =>
                      handleAddProductTShoppingCart(event, product)
                    }
                  >
                    <Handbag color='#fff' width={24} height={24} />
                  </button>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

// GetStaticProps (SSG) -> cria um cache dos dados
// não se tem acesso ao contexto da requisição
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
