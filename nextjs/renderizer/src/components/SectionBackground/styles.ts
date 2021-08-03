import styled, { css, DefaultTheme } from 'styled-components';
import { SectionBackgroundProps } from '.';

const getContainerBackground = (theme: DefaultTheme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
`;

export const Container = styled.section<
  Pick<SectionBackgroundProps, 'background'>
>`
  ${({ theme, background }) => css`
    background: ${theme.colors.light};
    color: ${theme.colors.primary};
    min-height: 100vh;

    display: flex;
    align-items: center;

    ${background && getContainerBackground(theme)};
  `}
`;
