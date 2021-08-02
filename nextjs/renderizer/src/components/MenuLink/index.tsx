import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinkProps = {
  id?: string | number;
  text: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ text, link, newTab = false }: MenuLinkProps) => {
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
