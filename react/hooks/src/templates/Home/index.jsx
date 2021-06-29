/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import { useAsync } from '../../hooks/useAsync';

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
