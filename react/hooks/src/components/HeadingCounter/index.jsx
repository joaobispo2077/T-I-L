import React from 'react';
import { useCounter } from '../../contexts/CounterContext';

export const HeadingCounter = () => {
  const [state] = useCounter();
  return <h1>Counter: {state.counter}</h1>;
};
