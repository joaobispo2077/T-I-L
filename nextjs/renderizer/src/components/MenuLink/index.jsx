import * as Styled from './styles';
import P from 'prop-types';
import Link from 'next/link';

export const MenuLink = ({ text, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';

  const isNextLink = link.match(/^\//);

  if (isNextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target}>{text}</Styled.Container>
      </Link>
    );
  }

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
