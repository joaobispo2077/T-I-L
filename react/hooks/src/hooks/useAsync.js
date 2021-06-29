import { useCallback, useEffect, useState } from 'react';

export const useAsync = (asyncFunction, shouldRun = false) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'iddle',
  });

  const run = useCallback(() => {
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) run();
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};
