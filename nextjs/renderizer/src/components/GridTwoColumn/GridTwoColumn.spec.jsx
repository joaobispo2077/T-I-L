import { render } from '@testing-library/react';
import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import mock from './mock';

describe('<GridTwoColumn/>', () => {
  it('should match with snapshot', () => {
    const { container } = render(renderTheme(<GridTwoColumn {...mock} />));

    expect(container).toMatchSnapshot();
  });
});
