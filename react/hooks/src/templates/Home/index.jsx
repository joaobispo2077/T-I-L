/* eslint-disable no-unused-vars */
import { useCounter } from '../../contexts/CounterContext';

const Home = () => {
  const [state, dispach] = useCounter();
  return (
    <section>
      <h1>Hello world</h1>
    </section>
  );
};

export default Home;
