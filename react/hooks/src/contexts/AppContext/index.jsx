import { createContext, useState } from 'react';
import { globalInitialState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [state, setState] = useState(globalInitialState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
