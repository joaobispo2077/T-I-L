import P from 'prop-types';

import config from '../config';
import Home from '../templates/Home';
import { loadPages } from '../api/loadPages';

export default function Index({ pageData = null }) {
  console.log(pageData);
  return <Home pageData={pageData} />;
}

export const getStaticProps = async () => {
  const payload = await loadPages(config.defaultSlug);

  if (!payload) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData: payload,
    },
  };
};

Index.propTypes = {
  pageData: P.object,
};
