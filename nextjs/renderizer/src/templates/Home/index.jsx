import P from 'prop-types';
import Head from 'next/head';
import { Base } from '../Base';

import { NotFound } from '../NotFound';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import config from '../../config';
function Home({ pageData }) {
  if (!pageData) {
    return <NotFound />;
  }

  // eslint-disable-next-line no-unused-vars
  const { menu, sections, footer, slug, title } = pageData;
  // eslint-disable-next-line no-unused-vars
  const { links, text, link, src } = menu;

  return (
    <>
      <Head>
        <title>{title || config.title}</title>
      </Head>
      <Base links={links} logo={{ text, link, src }} footer={footer}>
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return <GridTwoColumn key={key} {...section} />;
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }

          return <h1 key={index}>a</h1>;
        })}
      </Base>
    </>
  );
}

Home.propTypes = {
  pageData: P.object,
};

export default Home;
