import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/Home';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { url: src = '' } = {},
    menu_link: links = [],
  } = menu;

  return {
    text,
    src,
    link,
    newTab,
    logo: { text, src, link, newTab },
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []): MenuLinkProps[] => {
  return links.map(
    ({ id = '', link_text = '', url = '' }): MenuLinkProps => ({
      id,
      text: link_text,
      link: url,
    }),
  );
};
