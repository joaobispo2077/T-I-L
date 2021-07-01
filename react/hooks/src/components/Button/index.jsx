import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, onButtonClicked }) => {
  return <button onClick={onButtonClicked}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};
