import './App.css';
import React, { useReducer } from 'react';

const globalInitialState = {
  header: 'titulo legal do header',
  title: 'Titulo do contexto',
  footer: 'rodape da pagina',
  counter: 0,
};

// a reducer function receive old state and return new state
// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      console.log('activated increment');
      return { ...state, counter: state.counter + action.payload.incrementor };
    }
    case 'invertTitle': {
      console.log('activated invertTitle');
      return { ...state, title: state.title.split('').reverse().join('') };
    }
    default: {
      console.log('actions has not called...');
      return { ...state };
    }
  }
};

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, globalInitialState);
  const { counter, title, header } = state;

  const handleIncrementCounter = (incrementor) => {
    dispatch({ type: 'increment', payload: { incrementor } });
  };

  const handleInvertTitle = () => {
    dispatch({ type: 'invertTitle' });
  };
  return (
    <div>
      <header>{header}</header>
      <h1>
        {title} - {counter}
      </h1>
      <button onClick={() => handleIncrementCounter(10)}>+</button>
      <button onClick={handleInvertTitle}>Invert</button>
      <button onClick={dispatch}>dispatch</button>
    </div>
  );
}

export default App;
