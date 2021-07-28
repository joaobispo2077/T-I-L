import { render, screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import { themes } from '../../styles/themes';

describe('<Heading />', () => {
	it('should render with default values', () => {
		render(renderTheme(<Heading>texto</Heading>));
		expect.assertions(2);

		const heading = screen.getByRole('heading', { name: 'texto' });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveStyle({
			color: themes['default'].colors.primary,
			'font-size': themes['default'].font.sizes.xhuge,
			'text-transform': 'none',
		});
	});

	it('should render with darken color', () => {
		render(renderTheme(<Heading darken>texto</Heading>));

		const heading = screen.getByRole('heading', { name: 'texto' });
		expect(heading).toHaveStyle({
			color: themes['default'].colors.dark,
		});
	});

	it('should render sizes correctly', () => {
		const { rerender } = render(
			renderTheme(<Heading size="small">texto</Heading>),
		);

		const heading = screen.getByRole('heading', { name: 'texto' });
		expect(heading).toHaveStyle({
			'font-size': themes['default'].font.sizes.medium,
		});

		rerender(renderTheme(<Heading size="medium">texto</Heading>));

		expect(heading).toHaveStyle({
			'font-size': themes['default'].font.sizes.large,
		});

		rerender(renderTheme(<Heading size="big">texto</Heading>));

		expect(heading).toHaveStyle({
			'font-size': themes['default'].font.sizes.xlarge,
		});
	});

	it('should adapt font-size when screen is less than 768px', () => {
		render(renderTheme(<Heading size="huge">texto</Heading>));

		expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
			'font-size',
			themes['default'].font.sizes.xlarge,
			{
				media: themes['default'].media.lteMedium,
			},
		);
	});

	it('should render uppercase text', () => {
		render(renderTheme(<Heading uppercase>texto</Heading>));

		const heading = screen.getByRole('heading', { name: 'texto' });
		expect(heading).toHaveStyle({
			'text-transform': 'uppercase',
		});
	});

	it('should render correct element', () => {
		const { container } = render(renderTheme(<Heading as="h6">texto</Heading>));

		const headingSix = container.querySelector('h6');

		expect(headingSix.tagName.toLowerCase()).toBe('h6');
	});

	it('should match with snapshot', () => {
		const { container } = render(renderTheme(<Heading as="h6">texto</Heading>));

		expect(container.firstChild).toMatchSnapshot();
	});
});
