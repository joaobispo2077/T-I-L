import './App.css';
import React, { useContext, useState } from 'react';

const globalInitialState = {
  header: 'titulo legal do header',
  title: 'Titulo do contexto',
  footer: 'rodape da pagina',
  counter: 0,
};

const GlobalContext = React.createContext();

const Header = () => {
  const context = useContext(GlobalContext);
  const {
    contextState: { header, counter },
    contextState,
    setContextState,
  } = context;
  return (
    <header
      onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
    >
      {header} - {counter}
    </header>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const context = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = context;
  return (
    <h1>
      {title} - {counter}
    </h1>
  );
};

// eslint-disable-next-line
const Box = () => {
  return (
    <>
      <Header />
      <H1 text="Hello world" />
      <Footer />
    </>
  );
};

const Footer = () => {
  const context = useContext(GlobalContext);
  const { contextState, setContextState } = context;

  const handleChangeFooter = () => {
    console.log(contextState);
    const newContext = { ...contextState, footer: contextState.footer + '!' };

    setContextState(newContext);
  };

  return <footer onClick={handleChangeFooter}>{contextState.footer}</footer>;
};

function App() {
  const [contextState, setContextState] = useState(globalInitialState);

  console.log('Render app');
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Box />
    </GlobalContext.Provider>
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
