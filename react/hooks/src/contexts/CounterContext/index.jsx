import { createContext, useContext, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { buildActions } from './buid-actions';
import { reducer } from './reducer';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[state, actions.current]}>
      {children}
    </Context.Provider>
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
