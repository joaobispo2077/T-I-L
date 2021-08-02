import * as Styled from './styles';
import React from 'react';

export type TextProps = {
  children: string;
};

export const Text: React.FC = ({ children }: TextProps) => {
  return (
    <Styled.Container dangerouslySetInnerHTML={{ __html: String(children) }} />
  );
};
