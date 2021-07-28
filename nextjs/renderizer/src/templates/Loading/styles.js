import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
0% {
	transform:translate(-50%, -50%) rotate(0deg);
}

100% {
	transform:translate(-50%, -50%) rotate(360deg);
}

`;

export const Container = styled.div`
	${({ theme }) => css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		z-index: 10;

		background-color: ${theme.colors.primary};

		&:after,
		&:before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-width: 0.5rem;
			border-style: solid;
			/* border-color: ${theme.colors.primary}; */
			border-color: transparent;
			border-radius: 50%;
		}

		&:after {
			width: 6rem;
			height: 6rem;
			border-left: 0.5rem solid ${theme.colors.secondary};
			border-top: 0.5rem solid ${theme.colors.secondary};
			animation: ${rotate()} 600ms linear infinite;
		}

		&:before {
			width: 2rem;
			height: 2rem;
			border-left: 0.5rem solid ${theme.colors.secondary};
			border-top: 0.5rem solid ${theme.colors.secondary};
			animation: ${rotate()} 1s linear reverse infinite;
		}
	`}
`;
