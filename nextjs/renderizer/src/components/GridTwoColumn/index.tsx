import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridTwoColumnProps = {
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText: string;
  };
  background: boolean;
  sectionId?: string;
};

export const GridTwoColumn = ({
  title,
  description,
  image,
  background,
  sectionId = '',
}: GridTwoColumnProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading darken={!background} uppercase as="h2">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={image.url} alt={image.alternativeText} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
