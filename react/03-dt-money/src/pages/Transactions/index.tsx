import { useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import { Summary } from '../../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

interface TransactionsProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}
export function Transactions() {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  // useEffect -> não pode ser assíncrono
  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <main>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHightLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHightLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </main>
  );
}