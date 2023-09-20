import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styes/themes/defaults';
import { GlobalStyle } from './styes/global';
import { Transactions } from './pages/Transactions';
import { TransactionsProvider } from './contexts/TransactionsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
