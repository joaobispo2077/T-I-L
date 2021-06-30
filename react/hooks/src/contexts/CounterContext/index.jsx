import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.element,
  ]),
};

export const useCounter = () => {
  const context = useContext(Context);
  if (typeof context === 'undefined') {
    throw new Error('You must use useCounter inside a CounterContextProvider');
  }
  return [...context];
};
