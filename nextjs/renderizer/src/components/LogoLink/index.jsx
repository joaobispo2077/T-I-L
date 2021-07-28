import * as Styled from './styles';
import P from 'prop-types';

import { Heading } from '../Heading';

export const LogoLink = ({ text, src = null, link }) => {
	console.log('logo link', text, src, link);
	return (
		<Heading size="small" uppercase darken>
			<Styled.Container href={link}>
				{src ? <img src={src} alt={text} /> : text}
			</Styled.Container>
		</Heading>
	);
};

LogoLink.propTypes = {
	text: P.string.isRequired,
	src: P.string,
	link: P.string.isRequired,
};
