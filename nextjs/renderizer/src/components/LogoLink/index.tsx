import * as Styled from './styles';
import Link from 'next/link';

import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  src?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  src = null,
  link,
  newTab = false,
}: LogoLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  const isNextLink = link.match(/^\//);

  if (isNextLink) {
    return (
      <Heading size="small" uppercase darken>
        <Link href={link} passHref>
          <Styled.Container target={target}>
            {src ? <img src={src} alt={text} /> : text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase darken>
      <Styled.Container target={target} href={link}>
        {src ? <img src={src} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};
