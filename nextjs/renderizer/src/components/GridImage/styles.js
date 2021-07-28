import styled, { css } from 'styled-components';

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

		@media ${theme.media.lteMedium} {
			grid-template-columns: 1fr;
		}
	`}
`;

export const GridElement = styled.div`
	${() => css`
		overflow: hidden;
	`}
`;

export const Image = styled.img`
	${() => css`
		width: 100%;
		cursor: pointer;
		transition: transform 0.25s ease-in-out;

		&:hover {
			transform: scale(1.2) rotate(10deg);
		}
	`}
`;
