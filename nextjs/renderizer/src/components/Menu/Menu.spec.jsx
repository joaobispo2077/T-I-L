import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

import linksMock from '../NavLinks/mock';
import { themes } from '../../styles/themes';

describe('<Menu/>', () => {
	const defaultLogo = {
		text: 'Logo',
		link: '#target',
	};

	it('should render Logo and navigation bar', () => {
		render(renderTheme(<Menu links={linksMock} logo={defaultLogo} />));

		expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('should render menu mobile and buttom for open and close menu', () => {
		render(renderTheme(<Menu links={linksMock} logo={defaultLogo} />));

		const button = screen.getByLabelText('Open/Close menu');
		const menuContainer = button.nextSibling;

		expect(button).toHaveStyleRule('display', 'none');
		expect(button).toHaveStyleRule('display', 'flex', {
			media: themes['default'].media.lteMedium,
		});
		expect(menuContainer).toHaveStyleRule('opacity', '0', {
			media: themes['default'].media.lteMedium,
		});

		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

		fireEvent.click(button);
		expect(menuContainer).toHaveStyleRule('opacity', '1', {
			media: themes['default'].media.lteMedium,
		});

		expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

		fireEvent.click(button);
		expect(menuContainer).toHaveStyleRule('opacity', '0', {
			media: themes['default'].media.lteMedium,
		});

		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
	});

	it('should not render links', () => {
		render(renderTheme(<Menu logo={defaultLogo} />));

		expect(screen.queryByRole('navigation').childElementCount).toBe(0);
	});

	it('should match with snapshot', () => {
		const { container } = render(
			renderTheme(<Menu links={linksMock} logo={defaultLogo} />),
		);

		expect(container).toMatchSnapshot();
	});
});
