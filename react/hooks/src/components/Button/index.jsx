import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, onButtonClicked, disabled }) => {
  return (
    <button disabled={disabled} onClick={onButtonClicked}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
