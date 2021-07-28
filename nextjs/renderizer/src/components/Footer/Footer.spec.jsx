import { render, screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

describe('<Footer/>', () => {
	it('should render footer', () => {
		render(renderTheme(<Footer html={'<h1>Hello world</h1>'} />));

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('should match with snapshot', () => {
		const { container } = render(
			renderTheme(<Footer html={'<h1>Hello world</h1>'} />),
		);

		expect(container).toMatchSnapshot();
	});
});
