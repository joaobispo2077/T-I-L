import styled, { css } from 'styled-components';

import { Container as TextContainer } from '../Text/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
	${({ theme }) => css`
		text-align: center;
		border-top: 0.1rem solid ${theme.colors.mediumGray};
		font-size: ${theme.font.sizes.small};

		a {
			color: inherit;
			text-decoration: none;
		}

		${TextContainer} {
			font-size: ${theme.font.sizes.small};
		}

		${SectionContainer} {
			padding-top: 0;
			padding-bottom: 0;
		}
	`}
`;
