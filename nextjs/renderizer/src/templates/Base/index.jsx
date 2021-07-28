import * as Styled from './styles';
import P from 'prop-types';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

// eslint-disable-next-line no-unused-vars
export const Base = ({ links = [], logo, footer, children }) => {
	return (
		<>
			<Menu logo={logo} links={links} />
			<Styled.Container>
				{children}
				<Footer html={footer} />
			</Styled.Container>
			<GoTop />
		</>
	);
};

Base.propTypes = {
	...Menu.propTypes,
	footer: P.oneOfType([P.node, P.element]),
	children: P.oneOfType([P.string, P.node, P.element]),
};
