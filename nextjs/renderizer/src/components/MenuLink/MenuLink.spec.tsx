import { render, screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

describe('<MenuLink/>', () => {
  it('should render with target _self', () => {
    render(renderTheme(<MenuLink link="http://localhost" text={'Texto'} />));

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
  });

  it('should render with target _self', () => {
    render(
      renderTheme(
        <MenuLink link="http://google.com.br" newTab text={'Texto'} />,
      ),
    );

    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });

  it('should match with snapshot', () => {
    const { container } = render(
      renderTheme(<MenuLink link="http://google.com.br" text={'Texto'} />),
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  display: block;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 1.6rem;
  color: #0A1128;
  position: relative;
}

.c0::after {
  content: '';
  position: absolute;
  bottom: 0.8rem;
  left: 50%;
  width: 0;
  height: 0.2rem;
  background: #dc143C;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}

.c0:hover::after {
  left: 25%;
  width: 50%;
}

<a
  class="c0"
  href="http://google.com.br"
  target="_self"
>
  Texto
</a>
`);
  });
});
