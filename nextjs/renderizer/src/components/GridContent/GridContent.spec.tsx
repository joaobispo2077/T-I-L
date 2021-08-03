import { render } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import mock from './mock';

describe('<GridContent/>', () => {
  it('should rendar without brackground', () => {
    const { container } = render(
      renderTheme(<GridContent {...mock} background={false} />),
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should match with snapshot', () => {
    const { container } = render(renderTheme(<GridContent {...mock} />));

    expect(container).toMatchSnapshot();
  });
});
