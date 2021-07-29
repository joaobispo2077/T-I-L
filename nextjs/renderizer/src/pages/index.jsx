import P from 'prop-types';

import { mapData } from '../api';
import config from '../config';
import Home from '../templates/Home';
import { loadPages } from '../api/loadPages';
import { useRouter } from 'next/router';
import { Loading } from '../templates/Loading';
export default function Index({ pageData = null }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  console.log(pageData);
  return <Home pageData={pageData} />;
}

export const getStaticProps = async () => {
  const data = await loadPages(config.defaultSlug);
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

Index.propTypes = {
  pageData: P.object,
};
