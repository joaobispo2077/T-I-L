import { PageData } from '../templates/Home';
import { mapMenu } from './mapMenu';
import { mapSections } from './mapSections';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapData = (data = {} as any): PageData => {
  const {
    footer_text: footer = '',
    slug = '',
    title = '',
    sections = [],
    menu = {},
  } = data;

  return {
    footer,
    slug,
    title,
    sections: mapSections(sections),
    menu: mapMenu(menu),
  };
};
