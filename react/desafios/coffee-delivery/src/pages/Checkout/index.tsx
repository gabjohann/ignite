import { AdressForm } from './components/AdressForm';
import { SelectedCoffee } from './components/SelectedCoffee';
import { CheckoutContainer, Divider, SelectedCoffeesContainer } from './styles';

import expressoTradicional from '/assets/expresso-tradicional.png';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <AdressForm />
        {/*  PaymentMethod */}
        <div>
          <h1>Pagamento</h1>
        </div>
      </div>
      <div>
        <h1>Cafés Selecionados</h1>
        <SelectedCoffeesContainer>
          <SelectedCoffee
            imageSrc={expressoTradicional}
            title={'Expresso Tradicional'}
          />
          <Divider>
            <hr />
          </Divider>
          <SelectedCoffee
            imageSrc={expressoTradicional}
            title={'Expresso Tradicional'}
          />
        </SelectedCoffeesContainer>
      </div>
    </CheckoutContainer>
  );
}
