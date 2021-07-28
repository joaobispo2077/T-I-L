import { render, screen } from '@testing-library/react';
import { NavLinks } from '.';
import mocks from './mock';
import { renderTheme } from '../../styles/themes/renderTheme';
import { themes } from '../../styles/themes';

describe('<NavLink/>', () => {
  it('should render links', () => {
    render(renderTheme(<NavLinks links={mocks} />));

    expect(screen.getAllByRole('link')).toHaveLength(mocks.length);
  });

  it('should not render links', () => {
    render(renderTheme(<NavLinks />));

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render link', () => {
    render(renderTheme(<NavLinks links={mocks} />));
    const element = screen.queryByText(/link 5/i).parentElement;

    expect(element).toHaveStyleRule('flex-flow', 'column wrap', {
      media: themes['default'].media.lteMedium,
    });
  });

  it('should match with snapshot', () => {
    const { container } = render(renderTheme(<NavLinks links={mocks} />));

    expect(container.firstChild).toMatchSnapshot();
  });
});
