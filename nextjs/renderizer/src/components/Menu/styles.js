import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;

    width: 100%;

    background: ${theme.colors.light};
    border-bottom: ${theme.colors.mediumGray};
    transition: all 300ms ease-out;

    & > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: ${visible ? 'visible' : 'hidden'};
      opacity: ${visible ? 1 : 0};

      & > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

        height: 100vh;
        align-items: center;

        overflow-y: auto;
      }

      & ${Heading} {
        display: flex;
        justify-content: center;
        padding-bottom: ${theme.spacings.large};
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    cursor: pointer;
    border: none;
    display: none;

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
