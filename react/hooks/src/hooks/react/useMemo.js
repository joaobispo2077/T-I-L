import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Post = ({ post }) => {
  console.log('render post');
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

const Posts = ({ posts = [] }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Render app');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => setPosts(posts));
    }, 1000);
  }, []);

  const MemorizedPosts = useMemo(() => <Posts posts={posts} />, [posts]);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </p>

      {MemorizedPosts}

      {posts.length <= 0 && <p>Ainda não carregaram os posts</p>}
    </div>
  );
}

export default App;

// simple
// import React, { useCallback, useMemo, useState } from 'react';
// import PropTypes from 'prop-types';
// import './App.css';

// const Button = ({ incrementCounter }) => {
//   console.log('render button');
//   return <button onClick={() => incrementCounter(10)}>+</button>;
// };

// Button.propTypes = {
//   incrementCounter: PropTypes.func,
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handleIncrementCounter = useCallback((number) => {
//     setCounter((prevCounter) => prevCounter + number);
//   }, []);

//   const MemorizedButton = useMemo(
//     () => <Button incrementCounter={handleIncrementCounter} />,
//     [handleIncrementCounter],
//   );

//   console.log('Render app');
//   return (
//     <div className="App">
//       <h1>Contadores</h1>

//       <h2>Counter: {counter}</h2>

//       {MemorizedButton}
//     </div>
//   );
// }

// export default App;
