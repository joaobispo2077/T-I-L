import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridElementProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  title: string;
  description: string;
  grid: GridElementProps[];
  hasBackground?: boolean;
  sectionId: string;
  component?: string;
};

export const GridText = ({
  title,
  description,
  grid,
  hasBackground = false,
  sectionId = '',
}: GridTextProps) => {
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
