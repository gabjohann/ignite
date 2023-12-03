import { ProductCard } from '../ProductCard';
import { MenuContainer, MenuTitle, ProductList } from './styles';

import { coffees } from '../../../../../data.json';
export function Menu() {
  return (
    <MenuContainer>
      <MenuTitle>Nossos cafés</MenuTitle>
      <ProductList>
        {coffees.map((coffee) => (
          <ProductCard
            key={coffee.id}
            coffee={{
              id: coffee.id,
              type: coffee.type,
              name: coffee.name,
              price: coffee.price,
              description: coffee.name,
              imageSrc: coffee.imageSrc,
            }}
          />
        ))}
      </ProductList>
    </MenuContainer>
  );
}
