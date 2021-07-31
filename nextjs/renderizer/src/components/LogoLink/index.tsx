import * as Styled from './styles';
import Link from 'next/link';

import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  src?: string;
  link: string;
};

export const LogoLink = ({ text, src = null, link }: LogoLinkProps) => {
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
