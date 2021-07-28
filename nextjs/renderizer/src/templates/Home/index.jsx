// import { Menu } from '../../components/Menu';
// import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import config from '../../config';

import { Base } from '../Base';

import { NotFound } from '../NotFound';
import { Loading } from '../Loading';
import { mapData } from '../../api/index';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function Home() {
	const [pageData, setPageData] = useState([]);
	const location = useLocation();

	const fetchPageData = async (slug) => {
		console.log('fetching...', slug);
		try {
			const response = await fetch(`${config.url}${slug}`);
			const data = await response.json();

			const page = mapData(data[0]);

			setPageData(page);
			console.log(page);
		} catch (error) {
			console.error(error);
			setPageData(undefined);
		}
	};

	useEffect(() => {
		const pathname = location.pathname
			.replace(/[^a-z0-9]-_/gi, '')
			.replace('/', '');

		const slug = pathname ? pathname : config.defaultSlug;
		console.log('slug is ', slug);
		fetchPageData(slug);
	}, [location]);

	useEffect(() => {
		const baseName = config.site;

		if (pageData === undefined) {
			document.title = `Página não encontrada | ${baseName}`;
		}

		if (pageData && !pageData.slug) {
			document.title = `Carregando... | ${baseName}`;
		}

		if (pageData && pageData.title) {
			document.title = `${pageData.title} | ${baseName}`;
		}
	}, [pageData]);

	if (pageData === undefined) {
		return <NotFound />;
	}

	if (pageData && !pageData.slug) {
		return <Loading />;
	}

	// eslint-disable-next-line no-unused-vars
	const { menu, sections, footer, slug } = pageData;
	// eslint-disable-next-line no-unused-vars
	const { links, text, link, src } = menu;

	return (
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
	);
}

export default Home;
