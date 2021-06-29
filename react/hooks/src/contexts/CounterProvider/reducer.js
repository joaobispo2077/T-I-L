import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      console.log(action);
      return { ...state, counter: state.counter + action.payload };
    }
    case types.DECREMENT_COUNTER: {
      console.log(action);
      return { ...state, counter: state.counter - action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
