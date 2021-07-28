import { useState } from 'react';
import P from 'prop-types';
import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';

import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

export const Menu = ({ links = [], logo }) => {
	const [visible, setVisible] = useState(false);

	console.log('logoo', logo);

	const toggleMenuVisibility = () => {
		setVisible((prevVisible) => !prevVisible);
	};

	return (
		<>
			<Styled.Button
				aria-label="Open/Close menu"
				visible={visible}
				onClick={toggleMenuVisibility}
			>
				{visible ? (
					<CloseIcon aria-label="Close menu" />
				) : (
					<MenuIcon aria-label="Open menu" />
				)}
			</Styled.Button>
			<Styled.Container visible={visible} onClick={toggleMenuVisibility}>
				<SectionContainer>
					<Styled.MenuContainer>
						<LogoLink {...logo} />
						<NavLinks links={links} />
					</Styled.MenuContainer>
				</SectionContainer>
			</Styled.Container>
		</>
	);
};

Menu.propTypes = {
	...NavLinks.propTypes,
	logo: P.shape(LogoLink.propTypes).isRequired,
};
