import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const titleEvent = () => {
  console.log('h1 clicked');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  // execute every single time that state into component change
  useEffect(() => console.log('ComponentDidUpdate'));

  // execute 1x (when component load for first time)
  useEffect(() => {
    console.log('ComponentDidMount');

    document.querySelector('h1')?.addEventListener('click', titleEvent);

    // componentWillUnmount
    return () => {
      document.querySelector('h1')?.removeEventListener('click', titleEvent);
    };
  }, []);

  // execute when state into array dependencies change
  useEffect(() => {
    console.log(`C1: ${counter}`, `C2: ${otherCounter}`);
  }, [counter, otherCounter]);

  return (
    <div className="App">
      <h1>Contadores</h1>

      <h2>Counter 1: {counter}</h2>
      <h2>Counter 2: {otherCounter}</h2>

      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setOtherCounter(otherCounter + 1)}>
        + (other counter)
      </button>
    </div>
  );
}

export default App;
