import { MapPinLine } from '@phosphor-icons/react';
import {
  FormContainer,
  FormLabel,
  FormSubtitle,
  FormText,
  AdressFormContainer,
} from './styles';

export function AdressForm() {
  return (
    <>
      <FormContainer>
        <FormLabel>
          <MapPinLine size={22} color='#C47F17' />

          <div>
            <FormSubtitle>Endereço de Entrega</FormSubtitle>
            <FormText>Informe o endereço onde deseja receber o pedido</FormText>
          </div>
        </FormLabel>

        <form action=''>
          <AdressFormContainer>
            <input type='number' placeholder='CEP' id='cep' />
            <input type='text' placeholder='Rua' id='rua' />
            <input type='number' placeholder='Número' id='numero' />
            <input type='text' placeholder='Complemento' id='complemento' />
            <input type='text' placeholder='Bairro' id='bairro' />
            <input type='text' placeholder='Cidade' id='cidade' />
            <input type='text' placeholder='UF' id='uf' />
          </AdressFormContainer>
        </form>
      </FormContainer>
    </>
  );
}
