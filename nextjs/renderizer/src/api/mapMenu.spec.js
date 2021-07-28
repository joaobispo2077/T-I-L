import { mapMenu } from './mapMenu';

describe('Map menu', () => {
	it('should return a predefined object if no data is provided', () => {
		const menu = mapMenu();

		expect(menu).toEqual(
			expect.objectContaining({
				newTab: false,
				text: '',
				src: '',
				link: '',
				links: [],
			}),
		);
	});

	it('should map menu to match keys and values', () => {
		const menu = mapMenu({
			open_in_new_tab: false,
			logo_text: 'Landing Page',
			logo_link: '#home',
			menu_link: [
				{
					link_text: 'intro',
					url: '#intro',
					id: '60df2f0ab90cfa3918d45079',
				},
				{
					link_text: 'grid-one',
					url: '#grid-one',
					id: '60df2f0ab90cfa3918d4507a',
				},
			],
			logo: {
				name: 'landing-page.svg',
				alternativeText: 'Landing Page',
				url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238123/landing_page_ef0eb1',
			},
		});

		expect(menu).toEqual(
			expect.objectContaining({
				newTab: false,
				text: 'Landing Page',
				src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238123/landing_page_ef0eb1',
				link: '#home',
				links: [
					{
						text: 'intro',
						link: '#intro',
						id: '60df2f0ab90cfa3918d45079',
					},
					{
						text: 'grid-one',
						link: '#grid-one',
						id: '60df2f0ab90cfa3918d4507a',
					},
				],
			}),
		);
	});

	it('should return an empty array if there is no links', () => {
		const menu = mapMenu({
			open_in_new_tab: false,
			_id: '60df2b4e0e4e5c0984594aff',
			logo_text: 'Landing Page',
			logo_link: '#home',
			logo: {
				name: 'landing-page.svg',
				alternativeText: 'Landing Page',
				url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238123/landing_page_ef0eb1',
			},
		});

		expect(menu).toEqual(
			expect.objectContaining({
				newTab: false,
				text: 'Landing Page',
				src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238123/landing_page_ef0eb1',
				link: '#home',
				links: [],
			}),
		);
	});
});
