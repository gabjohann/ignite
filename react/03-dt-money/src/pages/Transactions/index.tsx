import { Header } from '../../../components/Header';
import { Summary } from '../../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  return (
    <main>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <td width='50%'>Desenvolvimento de site</td>
            <td>
              <PriceHightLight variant='income'>R$ 12.000,00</PriceHightLight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tbody>

          <tbody>
            <td width='50%'>Hambúrguer</td>
            <td>
              <PriceHightLight variant='outcome'>- R$ 59,00</PriceHightLight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </main>
  );
}
