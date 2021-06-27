import './App.css';
import React, { useState } from 'react';
import { useInterval } from './hooks/useInterval';

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useInterval(() => setCounter((prevCounter) => prevCounter + 1), delay);
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={() => setDelay((prevDelay) => prevDelay + incrementor)}>
        {' '}
        + {incrementor}
      </button>
      <button onClick={() => setDelay((prevDelay) => prevDelay - incrementor)}>
        {' '}
        - {incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(event) => setIncrementor(Number(event.target.value))}
      />
    </div>
  );
}

export default App;
