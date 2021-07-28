import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
