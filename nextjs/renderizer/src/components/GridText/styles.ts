import styled, { css } from 'styled-components';

import { Title as HeadingTitle } from '../Heading/styles';
import { Container as TextContainer } from '../Text/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextContainer} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${HeadingTitle} {
    position: relative;
    left: 5rem;
  }

  ${HeadingTitle}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;

    top: -2rem;
    left: -5rem;

    transform: rotate(5deg);
  }
`;
