import styled, { css } from 'styled-components';

export const Container = styled.section`
	${({ theme }) => css`
		max-width: 120rem;
		margin: 0 auto;
		padding: ${theme.spacings.large};
		width: 100%;
	`}
`;
