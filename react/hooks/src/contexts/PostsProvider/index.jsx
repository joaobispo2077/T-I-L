import { PostsContext } from './context';
import { data } from './data';
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(reducer, data);
  console.log(postState, postDispatch);
  return (
    <PostsContext.Provider value={{ postState, postDispatch }}>
      {' '}
      {children}{' '}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};
