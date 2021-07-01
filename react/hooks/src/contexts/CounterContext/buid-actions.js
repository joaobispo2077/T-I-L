import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) =>
      dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncrease(dispatch),
    asyncError: () => asyncError(dispatch),
  };
};

const asyncIncrease = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((resolve) =>
    setTimeout(() => {
      dispatch({
        type: actionTypes.ASYNC_INCREASE_END,
      });
      resolve(true);
    }, 2000),
  );
};

const asyncError = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((_, reject) =>
    setTimeout(() => {
      dispatch({
        type: actionTypes.ASYNC_INCREASE_ERROR,
      });
      reject(false);
    }, 2000),
  );
};
