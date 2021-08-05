import Head from 'next/head';

import { Base } from '../Base';

import {
  GridTwoColumn,
  GridTwoColumnProps,
} from '../../components/GridTwoColumn';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';

import config from '../../config';
import { MenuProps } from '../../components/Menu';
import { LogoLinkProps } from '../../components/LogoLink';

export type SectionsProps =
  | GridImageProps
  | GridTextProps
  | GridTwoColumnProps
  | GridContentProps;

export type PageData = {
  menu: MenuProps & LogoLinkProps;
  slug: string;
  title: string;
  footer: string;
  sections: SectionsProps[];
};

export type HomeProps = {
  pageData: PageData;
};

function Home({ pageData }: HomeProps) {
  const { menu, sections, footer, slug, title } = pageData;
  const { links, text, link, src } = menu;

  return (
    <>
      <Head>
        <title>{title || config.site}</title>

        <meta name="theme-color" content="#42f48c" />
        <meta name="description" content="Landing page top demais" />
      </Head>
      <Base links={links} logo={{ text, link, src }} footer={footer}>
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumn key={key} {...(section as GridTwoColumnProps)} />
            );
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...(section as GridContentProps)} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...(section as GridTextProps)} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...(section as GridImageProps)} />;
          }

          return <h1 key={index}>a</h1>;
        })}
      </Base>
    </>
  );
}

export default Home;
