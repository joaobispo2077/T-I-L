import config from '../config';

export const loadPages = async (slug = '') => {
  const normalizedSlug = slug
    ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}`
    : '';

  const url = `${config.url}/pages/${normalizedSlug}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};