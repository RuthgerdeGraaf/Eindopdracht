import  React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Assets
import { HomeIcon, FavoriteIcon, CollectionIcon, Profile, SunIcon, MoonIcon, Everything, LogOut } from '../../assets/icons/Icon.jsx';

// Context
import { AuthContext } from '../../context/AuthContext';

// Styles
import './Header.scss';

const Header = ({ darkMode, toggleDarkMode, onHomeClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

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
                            <li><Link to="/login-and-registration" onClick={logout}><LogOut /> Log out </Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
