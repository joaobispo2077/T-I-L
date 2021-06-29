/* eslint-disable react/prop-types */
// Compound Components

import { Children, cloneElement, useState } from 'react';

const Parent = ({ children }) => {
  console.log(children);
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { style: { fontSize: '24px' } });
    return newChild;
  });
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((prevIsOn) => !prevIsOn);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { isOn, onTurn: onTurn });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);

const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({ isOn, onTurn }) => (
  <button onClick={onTurn}>{isOn ? 'ON' : 'OFF'}</button>
);

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Parent>
        <p>Testing...</p>
        <p>Testing...</p>
      </Parent>
      <TurnOnOff>
        <TurnedOn>ON THINGS</TurnedOn>
        <TurnedOff>OFF THINGS...</TurnedOff>
        <TurnButton />
      </TurnOnOff>
    </div>
  );
};
export default Home;
