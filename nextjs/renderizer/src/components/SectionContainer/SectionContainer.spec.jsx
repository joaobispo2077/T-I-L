import { render, screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
// import { themes } from '../../styles/themes';

describe('<SectionContainer/>', () => {
  it('should render', () => {
    const { container } = render(
      renderTheme(
        <SectionContainer>
          {' '}
          <h1>Texto</h1>
        </SectionContainer>,
      ),
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
