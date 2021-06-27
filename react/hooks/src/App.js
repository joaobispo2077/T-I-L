import './App.css';
import React, { createContext, useContext, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';

// actions.js
const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
const globalInitialState = {
  header: 'titulo legal do header',
  title: 'Titulo do contexto',
  footer: 'rodape da pagina',
  counter: 0,
};

// reducer.js
// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  console.log('action called', action);

  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Title will be changed');
      return { ...state, title: action.payload };
    }
  }
};

// AppContext.jsx
const Context = createContext();
const AppContext = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, globalInitialState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };
  return (
    <Context.Provider value={{ state, changeTitle }}>
      {' '}
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

// title.jsx

const Title = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context?.state?.title}
      </h1>
      <input ref={inputRef} type="text" />
    </>
  );
};

function App() {
  // eslint-disable-next-line no-unused-vars
  // const [state, dispatch] = useReducer(reducer, globalInitialState);
  // eslint-disable-next-line no-unused-vars
  // const { counter, title, header } = state;

  return (
    <AppContext>
      <Title />
    </AppContext>
  );
}

export default App;
