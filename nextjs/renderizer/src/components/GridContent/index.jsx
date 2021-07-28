import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridContent = ({
	title,
	html,
	background = false,
	sectionId = '',
}) => {
	return (
		<SectionBackground background={background} sectionId={sectionId}>
			<Styled.Container>
				<Heading uppercase darken={!background} as="h2">
					{title}
				</Heading>
				<Styled.Html>
					<Text>{html}</Text>
				</Styled.Html>
			</Styled.Container>
		</SectionBackground>
	);
};

GridContent.propTypes = {
	title: P.string,
	html: P.oneOfType([P.node, P.element, P.string]),
	background: P.bool,
	sectionId: P.string,
};
