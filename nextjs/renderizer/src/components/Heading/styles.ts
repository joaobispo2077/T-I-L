import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const getTitleSize = {
  small: (theme: DefaultTheme) => theme.font.sizes.medium,
  medium: (theme: DefaultTheme) => theme.font.sizes.large,
  big: (theme: DefaultTheme) => theme.font.sizes.xlarge,
  huge: (theme: DefaultTheme) => theme.font.sizes.xhuge,
};

const getMediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const getTitleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  color: ${({ theme, darken }) =>
    darken ? theme.colors.dark : theme.colors.light};
  font-size: ${({ size, theme }) => getTitleSize[size](theme)};

  ${({ uppercase, theme }) => css`
    ${getTitleCase(uppercase)}
    ${getMediaFont(theme)}
  `};
`;
