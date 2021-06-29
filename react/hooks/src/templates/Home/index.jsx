import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      method: 'GET',
      headers: {
        abc: '1' + postId,
      },
    },
  );

  useEffect(() => {
    console.log('id do post:', postId);
  }, [postId]);

  if (!loading && result) {
    console.log('RESULT', result);
  }

  const handleGetPostDetails = (postID) => {
    setPostId(postID);
  };

  return (
    <div>
      <h1 onClick={() => handleGetPostDetails('')}>Posts</h1>
      {loading && <div>Loading....</div>}
      {!loading &&
        result &&
        Array.isArray(result) &&
        result.map((post) => (
          <div key={post.id} onClick={() => handleGetPostDetails(post.id)}>
            <p>{post.title}</p>
          </div>
        ))}
      {!loading && result && !Array.isArray(result) && (
        <div>
          <h2>{result.title}</h2>
          <p>{result.body}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
