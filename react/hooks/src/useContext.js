import './App.css';
import React from 'react';
import { Box } from './components/Box';
import { AppContext } from './contexts/AppContext';

function App() {
  console.log('Render app');
  return (
    <AppContext>
      <Box />
    </AppContext>
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
