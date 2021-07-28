import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridImage = ({
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
            <Styled.GridElement key={element.altText}>
              <Styled.Image alt={element.altText} src={element.src} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      src: P.string.isRequired,
    }),
  ).isRequired,
  hasBackground: P.bool,
  sectionId: P.string,
};
