import React from 'react';
import Header from '../Header';

// import { Container } from './styles';

export const Layout: React.FC = ({children}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      {children}
    </div>
  );
}

