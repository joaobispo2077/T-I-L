import styled, { css } from 'styled-components';

const getContainerBackground = (theme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
`;

export const Container = styled.section`
  ${({ theme, background }) => css`
    background: ${theme.colors.light};
    color: ${theme.colors.primary};
    min-height: 100vh;

    display: flex;
    align-items: center;

    ${background && getContainerBackground(theme)};
  `}
`;
