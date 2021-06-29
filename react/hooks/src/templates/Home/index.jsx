/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
  const [random, setRandom] = useState(0.18);
  const divRef = useRef();

  const handleGenerateRandom = () => {
    setRandom(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    divRef: divRef.current,
    handleGenerateRandom,
  }));

  return (
    <div
      ref={divRef}
      style={{ height: '100px', width: '100px', overflowY: 'scroll' }}
    >
      {Array.isArray(counted) &&
        counted.map((count) => (
          <p onClick={handleGenerateRandom} key={`c-${count}`}>
            {count} +++ {random}
          </p>
        ))}
    </div>
  );
});

const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3]);
  const divRef = useRef();

  // this hook is blockant with navigator
  useLayoutEffect(() => {
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleIncrementCounted = () => {
    setCounted((prevCounted) =>
      prevCounted.concat(Number(prevCounted.slice(-1)) + 1),
    );
    divRef.current.handleGenerateRandom();
  };

  return (
    <div onClick={handleIncrementCounted}>
      <h1>Home</h1>
      <button>add {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </div>
  );
};

export default Home;
