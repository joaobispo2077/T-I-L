import Home, { HomeProps } from '../templates/Home';
import { loadPages } from '../api/loadPages';
import { mapData } from '../api';
import { GetStaticPaths } from 'next';

export default function Slug({ pageData = null }: HomeProps) {
  console.log(pageData);
  return <Home pageData={pageData} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
export const getStaticProps = async (context) => {
  console.log(context);
  const data = await loadPages(context.params.slug as string);
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
