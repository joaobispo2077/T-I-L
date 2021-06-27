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

// simple
// import './App.css';
// import React, { useReducer } from 'react';

// const globalInitialState = {
//   header: 'titulo legal do header',
//   title: 'Titulo do contexto',
//   footer: 'rodape da pagina',
//   counter: 0,
// };

// // a reducer function receive old state and return new state
// // eslint-disable-next-line no-unused-vars
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment': {
//       console.log('activated increment');
//       return { ...state, counter: state.counter + action.payload.incrementor };
//     }
//     case 'invertTitle': {
//       console.log('activated invertTitle');
//       return { ...state, title: state.title.split('').reverse().join('') };
//     }
//     default: {
//       console.log('actions has not called...');
//       return { ...state };
//     }
//   }
// };

// function App() {
//   // eslint-disable-next-line no-unused-vars
//   const [state, dispatch] = useReducer(reducer, globalInitialState);
//   const { counter, title, header } = state;

//   const handleIncrementCounter = (incrementor) => {
//     dispatch({ type: 'increment', payload: { incrementor } });
//   };

//   const handleInvertTitle = () => {
//     dispatch({ type: 'invertTitle' });
//   };
//   return (
//     <div>
//       <header>{header}</header>
//       <h1>
//         {title} - {counter}
//       </h1>
//       <button onClick={() => handleIncrementCounter(10)}>+</button>
//       <button onClick={handleInvertTitle}>Invert</button>
//       <button onClick={dispatch}>dispatch</button>
//     </div>
//   );
// }

// export default App;
