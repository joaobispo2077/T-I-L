import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = () => {
  const context = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = context;
  return (
    <h1>
      {title} - {counter}
    </h1>
  );
};
