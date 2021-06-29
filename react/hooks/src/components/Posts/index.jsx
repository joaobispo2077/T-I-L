import React, { useContext, useEffect } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);
  return (
    <div>
      <h1>Post</h1>
      {postsState.posts.map((post) => {
        <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};
