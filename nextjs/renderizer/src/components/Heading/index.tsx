import React from 'react';
import { Title } from './styles';

export type HeadingProps = {
  darken?: boolean;
  uppercase?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
  children: React.ReactElement | React.ReactChildren | React.ReactNode | string;
};

export const Heading = ({
  children,
  darken = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Title as={as} size={size} darken={darken} uppercase={uppercase}>
      {children}
    </Title>
  );
};
