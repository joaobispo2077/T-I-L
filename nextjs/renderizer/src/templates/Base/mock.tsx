import linksMock from '../../components/NavLinks/mock';

import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import { BaseProps } from '.';

export default {
  links: linksMock,
  logo: {
    text: 'Logo',
    link: '#',
  },
  footer: '<p>testando footer</p>',
  children: (
    <div>
      <GridText {...gridMock} hasBackground />
      <GridText {...gridMock} />
      <GridText {...gridMock} hasBackground />
      <GridText {...gridMock} />
    </div>
  ),
} as BaseProps;
