import { themes } from '../styles/themes';

type Theme = typeof themes['default'];

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
