import * as Styled from './styles';
import P from 'prop-types';

import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({
	children,
	background = false,
	sectionId = '',
}) => {
	const id = sectionId ? sectionId : '';

	return (
		<Styled.Container id={id} background={background}>
			<SectionContainer>{children}</SectionContainer>
		</Styled.Container>
	);
};

SectionBackground.propTypes = {
	children: P.oneOfType([P.string, P.node, P.element]),
	background: P.bool,
	sectionId: P.string,
};
