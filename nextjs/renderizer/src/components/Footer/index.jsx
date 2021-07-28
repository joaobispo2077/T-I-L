import * as Styled from './styles';
import P from 'prop-types';

import { Text } from '../Text';
import { SectionContainer } from '../SectionContainer';
export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{html}</Text>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: P.oneOfType([P.node, P.element]),
};
