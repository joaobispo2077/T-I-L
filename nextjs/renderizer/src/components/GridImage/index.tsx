import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridImageElementProps = {
  altText: string;
  src: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  grid: GridImageElementProps[];
  hasBackground?: boolean;
  sectionId: string;
  component?: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  hasBackground = false,
  sectionId = '',
}: GridImageProps) => {
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
