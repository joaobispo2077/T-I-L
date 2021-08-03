import { render } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import mock from './mock';

describe('<GridImage/>', () => {
  it('should match with snapshot', () => {
    const { container } = render(renderTheme(<GridImage {...mock} />));

    expect(container).toMatchSnapshot();
  });
});
