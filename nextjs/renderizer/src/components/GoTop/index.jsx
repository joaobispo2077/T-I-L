import * as Styled from './styles';

import { KeyboardArrowUp } from '@styled-icons/material-outlined';

export const GoTop = () => {
	return (
		<Styled.Container
			title="Go to top"
			aria-label="Button that go to the top of page"
			href="#"
		>
			<KeyboardArrowUp />
		</Styled.Container>
	);
};
