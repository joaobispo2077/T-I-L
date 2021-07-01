/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { HeadingCounter } from '../../components/HeadingCounter';
import { useCounter } from '../../contexts/CounterContext';

const Home = () => {
  const [state, actions] = useCounter();

  useEffect(() => {
    actions.increase();
  }, [actions]);
  console.log(state, actions);
  return (
    <section>
      <HeadingCounter />
      <div>
        <Button onButtonClicked={() => actions.increase()}>Increase</Button>
      </div>
    </section>
  );
};

export default Home;
