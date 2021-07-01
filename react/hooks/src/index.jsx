import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import { PostsProvider } from './contexts/PostsProvider';
import './index.css';
import Home from './templates/Home';
import App from './templates/App';
import { Menu } from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/app" component={App} exact />
          </Switch>
        </BrowserRouter>
      </CounterContextProvider>
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
