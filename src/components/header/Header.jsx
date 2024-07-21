import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeIcon, FavoriteIcon, CollectionIcon, SettingsIcon, SunIcon, MoonIcon, Everything } from '../../icons/Icon';
import './Header.scss';
import Avatar from '../avatar/Avatar';
import { useUser } from '../../context/UserContext';
import { getUser } from '../../api/userApi';

const Header = ({ darkMode, toggleDarkMode, onHomeClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { username } = useUser();
    const [avatarUrl, setAvatarUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (username) {
                const userData = await getUser(username);
                setAvatarUrl(userData.avatarUrl);
            }
        };
        fetchUserData();
    }, [username]);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className='header'>
            <div>
                <Avatar className='avatar-small' src={avatarUrl} />
                <h1>Welcome {username}</h1>
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
                            <li><Link to="/settings"><SettingsIcon />Settings</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
