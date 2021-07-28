import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr 2fr;

		align-items: center;
		gap: ${theme.spacings.large};

		${Title} {
			margin-bottom: ${theme.spacings.large};
		}

		@media ${theme.media.lteMedium} {
			grid-template-columns: 1fr;
		}
	`}
`;

export const TextContainer = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			margin-bottom: ${theme.spacings.large};
			text-align: center;
		}
	`}
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
	width: 100%;
`;
