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
        <Button onButtonClicked={() => actions.decrease()}>Decrease</Button>
        <Button onButtonClicked={() => actions.reset()}>Reset</Button>
        <Button onButtonClicked={() => actions.setCounter(10)}>set 10</Button>
        <Button onButtonClicked={() => actions.setCounter(100)}>set 100</Button>
        <Button
          disabled={state.loading}
          onButtonClicked={() => actions.asyncIncrease()}
        >
          Async Increase
        </Button>
        <Button
          disabled={state.loading}
          onButtonClicked={() => actions.asyncError()}
        >
          Async Error
        </Button>
      </div>
    </section>
  );
};

export default Home;
