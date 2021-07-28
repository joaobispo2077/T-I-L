import P from 'prop-types';

import config from '../config';
import { mapData } from '../api';
import Home from '../templates/Home';

export default function Index({ pageData = null }) {
  console.log(pageData);
  return <Home pageData={pageData} />;
}

export const getStaticProps = async () => {
  const response = await fetch(`${config.url}${config.defaultSlug}`);
  const data = await response.json();

  const payload = data.length > 0 ? mapData(data[0]) : null;
  return {
    props: {
      pageData: payload,
    },
  };
};

Index.propTypes = {
  pageData: P.object,
};
