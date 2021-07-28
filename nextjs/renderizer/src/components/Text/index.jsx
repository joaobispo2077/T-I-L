import * as Styled from './styles';
import P from 'prop-types';

export const Text = ({ children }) => {
	return (
		<Styled.Container dangerouslySetInnerHTML={{ __html: String(children) }} />
	);
};

Text.propTypes = {
	children: P.oneOfType([P.node, P.element]),
};
