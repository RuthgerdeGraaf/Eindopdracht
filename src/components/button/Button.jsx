import React from 'react';
import './Button.css';
import Icon from '../../icons/Icon';

const Button = ({ variant, children, disabled, icon, ...props }) => {
  return (
    <button 
      className={`button ${variant}`} 
      disabled={disabled} 
      {...props}
    >
      {icon && <span className="button-icon"><Icon name={icon} /></span>}
      {children}
    </button>
  );
};

export default Button;
