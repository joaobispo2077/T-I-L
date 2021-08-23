import styled, { CreateStyled } from '@emotion/styled';

import theme from '../styles/theme';

export default styled as CreateStyled<typeof theme>;
// import '@emotion/styled';
// import theme from '../styles/theme';

// type ThemeType = typeof theme;

// declare module '@emotion/styled' {
//   export type Theme = ThemeType;
// }
