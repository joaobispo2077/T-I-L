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

export default App;
