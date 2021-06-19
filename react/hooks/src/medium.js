import './App.css';
import { useState } from 'react';

function Medium() {
  const [text, setText] = useState('Usando hooks');

  const handleAddEmphasis = () => {
    setText((prevText) => prevText + '!');
  };

  return (
    <div onClick={handleAddEmphasis} className="App">
      {text}
    </div>
  );
}
export default Medium;
