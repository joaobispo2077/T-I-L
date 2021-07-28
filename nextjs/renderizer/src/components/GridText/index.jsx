import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridText = ({
  title,
  description,
  grid,
  hasBackground = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={hasBackground} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase darken={!hasBackground} as="h2">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.title}>
              <Heading size="medium" darken={!hasBackground} as="h3">
                {element.title}
              </Heading>
              <Text>{element.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  hasBackground: P.bool,
  sectionId: P.string,
};
