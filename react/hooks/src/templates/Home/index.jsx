/* eslint-disable react/prop-types */
// Compound Components

import { createContext, useContext, useState } from 'react';

const TurnOnOffContext = createContext();

const TurnOnOffProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((prevIsOn) => !prevIsOn);

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = () => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return <button onClick={onTurn}>{isOn ? 'ON' : 'OFF'}</button>;
};

const Home = () => {
  return (
    <TurnOnOffProvider>
      <div>
        <h1>Hello world</h1>
        <p>Testing...</p>
        <p>Testing...</p>
        <section>
          <TurnedOn>ON THINGS</TurnedOn>
          <TurnedOff>OFF THINGS...</TurnedOff>
        </section>
        <TurnButton />
      </div>
    </TurnOnOffProvider>
  );
};
export default Home;
