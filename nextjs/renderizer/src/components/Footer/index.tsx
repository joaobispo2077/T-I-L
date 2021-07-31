import * as Styled from './styles';

import { Text } from '../Text';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  html: string;
};

export const Footer = ({ html }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{html}</Text>
      </SectionContainer>
    </Styled.Container>
  );
};
