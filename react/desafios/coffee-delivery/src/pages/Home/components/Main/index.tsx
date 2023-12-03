import {
  CharacteristicsContainer,
  DescriptionContainer,
  MainContainer,
} from './styles';
import coffee from '/assets/coffe.png';
import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react';

export function Main() {
  return (
    <MainContainer>
      <DescriptionContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <CharacteristicsContainer>
          <div>
            <div id='cart'>
              <ShoppingCartSimple size={16} weight='fill' />
            </div>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <div id='timer'>
              <Timer size={16} weight='fill' />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <div id='package'>
              <Package size={16} weight='fill' />
            </div>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <div id='coffee'>
              <Coffee size={16} weight='fill' />
            </div>
            <p>O café chega fresquinho até você</p>
          </div>
        </CharacteristicsContainer>
      </DescriptionContainer>
      <img src={coffee} alt='' />
    </MainContainer>
  );
}
