import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import Image from 'next/image';

import { Handbag } from '@phosphor-icons/react';

import logoImg from '../assets/logo.svg';
import { Container, Header, ProductCounter } from '../styles/pages/app';
import { useState } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [showCounter, setShowCounter] = useState(false);

  const toggleProductCounter = () => {
    setShowCounter(!showCounter); // implementar o contador propriamente dito
  };

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />

        <button onClick={toggleProductCounter}>
          <Handbag color='#8D8D99' width={24} height={24} />

          {showCounter && (
            <ProductCounter>
              <span>1</span>
            </ProductCounter>
          )}
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
