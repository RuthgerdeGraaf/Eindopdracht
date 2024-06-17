import React from 'react';
import './Button.css';
import Icon from '../../icons/Icon';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button 
      className={`button ${darkMode ? 'dark-mode' : ''}`} 
      onClick={toggleDarkMode}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      <span className="button-icon">
        <Icon name={darkMode ? 'sun' : 'moon'} />
      </span>
    </button>
  );
};

export default DarkModeButton;
