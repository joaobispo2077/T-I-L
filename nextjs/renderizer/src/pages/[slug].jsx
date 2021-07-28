import P from 'prop-types';

import Home from '../templates/Home';
import { loadPages } from '../api/loadPages';
import { mapData } from '../api';

export default function Slug({ pageData = null }) {
  console.log(pageData);
  return <Home pageData={pageData} />;
}

export const getStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const data = await loadPages(context.slug);
  const payload = data.length > 0 ? mapData(data[0]) : null;

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

Slug.propTypes = {
  pageData: P.object,
};
