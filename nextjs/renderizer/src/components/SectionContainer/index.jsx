import * as Styled from './styles';
import P from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.oneOfType([P.string, P.node, P.element]),
};
