import { render, screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

describe('<SectionBackground/>', () => {
  it('should render with light background', () => {
    const { container } = render(
      renderTheme(
        <SectionBackground>
          <h1>Texto</h1>
        </SectionBackground>,
      ),
    );

    const sutSectionBackground = screen.getByRole('heading').parentElement;

    expect(sutSectionBackground).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with dark background', () => {
    const { container } = render(
      renderTheme(
        <SectionBackground background>
          <h1>Texto</h1>
        </SectionBackground>,
      ),
    );

    const sutSectionBackground = screen.getByRole('heading').parentElement;

    expect(sutSectionBackground).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
