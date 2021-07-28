import { mapMenu } from './mapMenu';
import { mapSections } from './mapSections';

export const mapData = (data = {}) => {
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
