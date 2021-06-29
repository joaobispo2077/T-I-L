import * as types from './types';

export const incrementCounter = (dispatch, incrementor) => {
  dispatch({ type: types.INCREMENT_COUNTER, payload: incrementor });
};

export const decrementCounter = (dispatch, decrementor) => {
  dispatch({ type: types.DECREMENT_COUNTER, payload: decrementor });
};
