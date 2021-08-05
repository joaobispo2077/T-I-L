import config from '../config';
import { PageData } from '../templates/Home';

export const loadPages = async (slug = ''): Promise<PageData> => {
  const normalizedSlug = slug
    ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}`
    : '';

  const url = `${config.url}/pages/${normalizedSlug}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
