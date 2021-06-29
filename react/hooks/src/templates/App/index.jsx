import './styles.css';
import React from 'react';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Counter } from '../../components/Counter';

function App() {
  return (
    <PostsProvider>
      <CounterProvider>
        <Counter />
        <Posts />
      </CounterProvider>
    </PostsProvider>
  );
}

export default App;
