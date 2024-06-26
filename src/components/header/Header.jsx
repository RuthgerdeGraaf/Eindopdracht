import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, FavoriteIcon, CollectionIcon, SettingsIcon, SunIcon, MoonIcon } from '../../icons/Icon';
import './Header.scss';
import Avatar from '../avatar/Avatar';

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
                <Avatar className='avatar-small'/>
                <h1>#WelcomeUser#</h1>
            </div>
            <button className="dark-mode-button" onClick={toggleDarkMode}>
                {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <nav>
                <div 
                    className="dropdown-button" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    Go 2
                    {isOpen && (
                        <ul className="dropdown">
                            <li><Link to="/home"><HomeIcon />Home</Link></li>
                            <li><Link to="/favorite"><FavoriteIcon />Favorite</Link></li>
                            <li><Link to="/collection"><CollectionIcon />Collection</Link></li>
                            <li><Link to="/settings"><SettingsIcon />Settings</Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
