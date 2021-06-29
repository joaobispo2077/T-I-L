/* eslint-disable */

import React, { useEffect, useState } from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}
const ComponentError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Grr que chato');
    }
  });

  return (
    <div>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Click to increase counter: {counter}
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <ErrorBoundary>
        <ComponentError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ComponentError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ComponentError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ComponentError />
      </ErrorBoundary>
    </div>
  );
};
export default Home;
