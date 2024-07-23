import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeIcon, FavoriteIcon, CollectionIcon, Profile, SunIcon, MoonIcon, Everything } from '../../assets/icons/Icon.jsx';
import './Header.scss';

const Header = ({ darkMode, toggleDarkMode, onHomeClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <header className='header'>
            <div>
                <h1>What to play</h1>
            </div>
            <button className="dark-mode-button" onClick={toggleDarkMode}>
                {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <nav>
                <div 
                    className="dropdown-menu" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    Go 2
                    {isOpen && (
                        <ul className="dropdown">
                            <li><Link to="/home" onClick={onHomeClick}><HomeIcon />Home</Link></li>
                            <li><Link to="/favorite"><FavoriteIcon />Favorite</Link></li>
                            <li><Link to="/collection"><CollectionIcon />Collection</Link></li>
                            <li><Link to="/everything"><Everything />Everything</Link></li>
                            <li><Link to="/profile"><Profile /> Profile </Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
