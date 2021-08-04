import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type BaseProps = {
  links: MenuLinkProps[];
  footer: string;
  children: React.ReactNode;
  logo: LogoLinkProps;
};

// eslint-disable-next-line no-unused-vars
export const Base = ({ links = [], logo, footer, children }: BaseProps) => {
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
