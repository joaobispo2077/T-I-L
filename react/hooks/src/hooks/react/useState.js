import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [reverse, setReverse] = useState(false);

  const handleChangeRotation = () => {
    setReverse(!reverse);
  };

  const handleIncrementCounter = () => {
    // when pass a callback, always get the most recent value from state
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={`App-logo ${reverse ? 'reverse' : ''}`}
          alt="logo"
        />
        <h1>Counter: {counter}</h1>
        <p>
          {reverse
            ? 'Rodando no sentido Horário'
            : 'Rodando no sentido anti-horário'}
        </p>
        <button onClick={handleChangeRotation}>Reverse</button>
        <button onClick={handleIncrementCounter}>Increment Counter</button>
        <a
          className="ComponentUseRef-link"
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
