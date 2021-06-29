import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { CounterContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const CounterProvider = ({ children }) => {
  const [counterState, dispatchCounter] = useReducer(reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, dispatchCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};
