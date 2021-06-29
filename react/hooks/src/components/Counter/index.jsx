import { useContext } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';

export const Counter = () => {
  const { counterState, dispatchCounter } = useContext(CounterContext);

  const handleIncrementCounter = (number = 1) => {
    incrementCounter(dispatchCounter, number);
  };

  const handleDecrementCounter = (number = 1) => {
    decrementCounter(dispatchCounter, number);
  };
  return (
    <div>
      <h1>Contador: {counterState.counter} </h1>
      <button onClick={() => handleIncrementCounter()}>Increment</button>
      <button onClick={() => handleDecrementCounter()}>Decrement</button>
    </div>
  );
};
