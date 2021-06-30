/* eslint-disable react/prop-types */

import React, { Suspense, useState } from 'react';

const loadComponent = () => import('../../components/LazyTitle');

const LazyTitle = React.lazy(loadComponent);
const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <h1>Hello world</h1>
      <button
        onMouseOver={() => loadComponent()}
        onClick={() => setShow((prevShow) => !prevShow)}
      >
        {show ? 'show' : 'hidden'} lazy component
      </button>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyTitle />}
      </Suspense>
    </section>
  );
};
export default Home;
