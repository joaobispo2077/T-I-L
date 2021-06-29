/* eslint-disable no-unused-vars */

import { useLayoutEffect, useRef, useState } from 'react';

const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3]);
  const divRef = useRef();

  // this hook is blockant with navigator
  useLayoutEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleIncrementCounted = () => {
    setCounted((prevCounted) =>
      prevCounted.concat(Number(prevCounted.slice(-1)) + 1),
    );
  };

  return (
    <div onClick={handleIncrementCounted}>
      <h1>Home</h1>
      <button>add {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '100px', width: '100px', overflowY: 'scroll' }}
      >
        {Array.isArray(counted) &&
          counted.map((count) => <p key={`c-${count}`}>{count}</p>)}
      </div>
    </div>
  );
};

export default Home;
