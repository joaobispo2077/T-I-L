import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import React from 'react';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  const id = sectionId ? sectionId : '';

  return (
    <Styled.Container id={id} background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
