import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('render post');
  return (
    <div className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: PropTypes.func,
};

const Posts = ({ posts = [], handleClick }) => {
  return (
    <>
      {posts.map((post) => (
        <Post handleClick={handleClick} key={post.id} post={post} />
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
  handleClick: PropTypes.func,
};

function App() {
  // allow to manipulate HTML tag reference corretcly
  const inputRef = useRef(null);

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Render app');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const handleClickTitle = (text) => {
    setValue(text);
  };

  const MemorizedPosts = useMemo(
    () => <Posts handleClick={handleClickTitle} posts={posts} />,
    [posts],
  );

  useEffect(() => {
    console.log('state from input is:', value);
    inputRef.current.focus();
  }, [value]);

  return (
    <div className="App">
      <p>
        <input
          // vinculate ref with tag
          ref={inputRef}
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
