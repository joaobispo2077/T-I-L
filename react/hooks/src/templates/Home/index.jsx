/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useCounter } from '../../contexts/CounterContext';

const Home = () => {
  const [state, actions] = useCounter();

  useEffect(() => {
    actions.increase();
  }, [actions]);
  console.log(state, actions);
  return (
    <section>
      <h1 onClick={() => actions.increase()}>Hello world</h1>
    </section>
  );
};

export default Home;
