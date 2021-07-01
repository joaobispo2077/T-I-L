import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/app">App</Link>
    </nav>
  );
};
