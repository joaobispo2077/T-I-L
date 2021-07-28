import React from 'react';
import { Title } from './styles';
import P from 'prop-types';

export const Heading = ({
	children,
	darken = true,
	as = 'h1',
	size = 'huge',
	uppercase = false,
}) => {
	return (
		<Title as={as} size={size} darken={darken} uppercase={uppercase}>
			{children}
		</Title>
	);
};

Heading.propTypes = {
	darken: P.bool,
	uppercase: P.bool,
	as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	size: P.oneOf(['small', 'medium', 'big', 'huge']),
	children: P.oneOfType([P.string, P.node, P.element]).isRequired,
};
