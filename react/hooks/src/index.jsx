import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import { PostsProvider } from './contexts/PostsProvider';
import './index.css';
import App from './templates/App';
import { Test } from './templates/Test';
import { Menu } from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/test/:slug?/:id?" component={Test} exact />
          </Switch>
        </BrowserRouter>
      </CounterContextProvider>
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
