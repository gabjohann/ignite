import 'styled-components';
import { defaultTheme } from '../styes/themes/defaults';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
