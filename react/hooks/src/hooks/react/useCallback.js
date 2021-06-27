import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// store component into memory to not recreate if not necessary
const Button = React.memo(function Button({ incrementCounter }) {
  console.log('render button');
  return <button onClick={() => incrementCounter(10)}>+</button>;
});

Button.propTypes = {
  incrementCounter: PropTypes.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  // store ***function*** into memory to not recreate when component render
  const handleIncrementCounter = useCallback((number) => {
    setCounter((prevCounter) => prevCounter + number);
  }, []);

  console.log('Render app');
  return (
    <div className="App">
      <h1>Contadores</h1>

      <h2>Counter: {counter}</h2>

      <Button incrementCounter={handleIncrementCounter} />
    </div>
  );
}

export default App;
