import { render, screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

describe('<LogoLink/>', () => {
  it('should render text logo', () => {
    render(renderTheme(<LogoLink link="#target" text="Hello World" />));

    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading).toBeInTheDocument();
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render internal link', () => {
    render(renderTheme(<LogoLink link="/target" text="Hello World" />));

    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading).toBeInTheDocument();
    expect(heading.firstChild).toHaveAttribute('href', '/target');
  });

  it('should render image logo', () => {
    render(
      renderTheme(
        <LogoLink link="#target" text="Hello World" src="image.jpg" />,
      ),
    );

    const img = screen.getByRole('img', {
      name: 'Hello World',
    });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'image.jpg');
  });

  it('should match with snapshot', () => {
    const { container } = render(
      renderTheme(
        <LogoLink link="#target" text="Hello World" src="image.jpg" />,
      ),
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
