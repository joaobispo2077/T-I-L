import logo from './logo.svg';
import './App.css';
import React, { useCallback, useState, useEffect } from 'react';
// import { Component } from 'react';

import Proptypes from 'prop-types';

const Button = React.memo(({ incrementButton }) => {
  console.log('Render button');

  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.displayName = 'Button';

Button.propTypes = {
  incrementButton: Proptypes.func,
};

const handleClicked = () => {
  console.log('h1 clicado');
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleChangeRotation = () => {
    setReverse(!reverse);
  };

  const handleIncrementCounter = useCallback((number) => {
    setCounter((counter) => counter + number);
  }, []);

  useEffect(() => {
    console.log(`counter atualizou para: ${counter} [componentDidUpdate]`);
  }, [counter]);
  useEffect(() => console.log('componentDidUpdate'));

  useEffect(() => {
    console.log('componentDidMount');
    /*trash in component*/
    document.querySelector('h1')?.addEventListener('click', handleClicked);

    //component will unmount
    return () => {
      document.querySelector('h1')?.removeEventListener('click', handleClicked);
    };
  }, []);

  console.log('Render app');
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={`App-logo ${reverse ? 'reverse' : ''}`}
          alt="logo"
        />

        <h1>Contador: {counter}</h1>
        <Button incrementButton={handleIncrementCounter} />
        <p onClick={handleChangeRotation}>
          {reverse
            ? 'Rodando no sentido Horário'
            : 'Rodando no sentido anti-horário'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.handleChangeRotation = this.handleChangeRotation.bind(this);

//     this.state = {
//       reverse: false,
//     };
//   }

//   handleChangeRotation() {
//     this.setState({ reverse: !this.state.reverse });
//   }

//   render() {
//     const { reverse } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img
//             src={logo}
//             className={`App-logo ${reverse ? 'reverse' : ''}`}
//             alt="logo"
//           />
//           <p onClick={this.handleChangeRotation}>
//             {reverse
//               ? 'Rodando no sentido Horário'
//               : 'Rodando no sentido anti-horário'}
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
