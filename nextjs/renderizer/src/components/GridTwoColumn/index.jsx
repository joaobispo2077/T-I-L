import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridTwoColumn = ({
  title,
  description,
  image,
  background,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
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

GridTwoColumn.propTypes = {
  title: P.string,
  description: P.string,
  image: P.shape({
    url: P.string,
    alternativeText: P.string,
  }),
  background: P.bool,
  sectionId: P.string,
};
