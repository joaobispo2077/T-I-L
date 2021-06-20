import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Header = () => {
  const context = useContext(GlobalContext);
  const {
    state: { header, counter },
    setState,
  } = context;
  return (
    <header
      onClick={() =>
        setState((prevState) => ({ ...prevState, counter: counter + 1 }))
      }
    >
      {header} - {counter}
    </header>
  );
};
