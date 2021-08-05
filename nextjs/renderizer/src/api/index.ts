import { PageData } from '../templates/Home';
import { mapMenu } from './mapMenu';
import { mapSections } from './mapSections';

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
