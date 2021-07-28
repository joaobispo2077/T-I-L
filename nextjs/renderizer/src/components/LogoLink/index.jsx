import * as Styled from './styles';
import P from 'prop-types';
import Link from 'next/link';

import { Heading } from '../Heading';

export const LogoLink = ({ text, src = null, link }) => {
  const isNextLink = link.match(/^\//);

  if (isNextLink) {
    return (
      <Heading size="small" uppercase darken>
        <Link href={link} passHref>
          <Styled.Container>
            {src ? <img src={src} alt={text} /> : text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase darken>
      <Styled.Container href={link}>
        {src ? <img src={src} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  src: P.string,
  link: P.string.isRequired,
};
