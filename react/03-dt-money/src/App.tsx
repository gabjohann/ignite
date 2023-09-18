import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styes/themes/defaults';
import { GlobalStyle } from './styes/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>oi</h1>
    </ThemeProvider>
  );
}
