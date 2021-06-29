import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoading, setShouldLoading] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    const isChangedUrl = url !== urlRef.current;
    const isChangedOptions = !isObjectEqual(options, optionsRef.current);

    if (isChangedUrl || isChangedOptions) {
      urlRef.current = url;
      optionsRef.current = options;
      setShouldLoading((prevShouldLoading) => !prevShouldLoading);
    }
  }, [url, options]);

  console.log('useFetch initiating....');
  console.log('url: ', urlRef.current);
  console.log('options: ', optionsRef.current);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;

    console.log('EFFECT');
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optionsRef.current,
        });
        const data = await response.json();

        if (!wait) {
          setResult(data);
          setLoading(false);
        }
      } catch (err) {
        if (!wait) {
          setLoading(false);
        }
        throw err;
      }
    };

    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoading]);

  return [result, loading];
};

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
