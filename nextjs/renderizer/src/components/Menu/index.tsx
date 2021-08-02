import { useState } from 'react';
import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';

import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { MenuLinkProps } from '../MenuLink';
import { NavLinks } from '../NavLinks';
import { LogoLinkProps, LogoLink } from '../LogoLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logo: LogoLinkProps;
};

export const Menu = ({ links = [], logo }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  console.log('logoo', logo);

  const toggleMenuVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <Styled.Button
        aria-label="Open/Close menu"
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
