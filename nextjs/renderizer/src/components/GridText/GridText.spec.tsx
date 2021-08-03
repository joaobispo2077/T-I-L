import { render } from '@testing-library/react';
import { GridText } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import mock from './mock';

describe('<GridText/>', () => {
  it('should match with snapshot', () => {
    const { container } = render(renderTheme(<GridText {...mock} />));

    expect(container).toMatchSnapshot();
  });
});
