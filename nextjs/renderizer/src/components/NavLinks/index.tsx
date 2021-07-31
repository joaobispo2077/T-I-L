import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export interface NavLink {
  id: string | number;
  text: string;
  link: string;
  newTab?: boolean;
}

export type NavLinksProps = {
  links?: NavLink[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Styled.Container>
      {links.map((link) => (
        <MenuLink key={link.id} {...link} />
      ))}
    </Styled.Container>
  );
};
