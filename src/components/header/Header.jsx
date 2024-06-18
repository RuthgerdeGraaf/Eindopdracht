import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <header className='header'>
            <div>
                <h1>#WelcomeUser#</h1>
                <div>UserImage</div>
            </div>
            <nav>
                <div 
                    className="dropdown-button" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    Go 2
                    {isOpen && (
                        <ul className="dropdown">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/favorite">Favorite</Link></li>
                            <li><Link to="/collection">Collection</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                        </ul>
                    )}
                </div>
                <button onClick={toggleDarkMode}>
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </nav>
        </header>
    );
};

export default Header;
