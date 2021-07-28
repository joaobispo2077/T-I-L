import * as Styled from './styles';
import P from 'prop-types';

export const MenuLink = ({ text, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {text}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  text: P.oneOfType([P.string, P.node, P.element]).isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
