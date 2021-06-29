/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun = false) => {
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

const fetchData = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }

  if (status === 'pending') {
    return <pre>Loading...</pre>;
  }

  if (status === 'error') {
    return <pre>{error.message}</pre>;
  }

  if (status === 'settled') {
    return (
      <div>
        <h1>Posts</h1>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  }

  return <div>Home</div>;
};

export default Home;
