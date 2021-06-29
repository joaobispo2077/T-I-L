import React, { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const { postState, postDispatch } = useContext(PostsContext);

  useEffect(() => {
    loadPosts(postDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => (isMounted.current = false);
  }, [postDispatch]);

  return (
    <div>
      <h1>Post</h1>
      {postState.loading && (
        <p>
          <strong>Carregando...</strong>
        </p>
      )}
      {postState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
