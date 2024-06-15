import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div>
            <div>#WelcomeUser#</div>
            <div>UserImage</div>
            </div>
            <nav>
                <ul>
                    <ul>Home</ul>
                    <ul>Favorite</ul>
                    <ul>Collection</ul>
                    <ul>Settings</ul>
                </ul>
            </nav>
        </header>
    );
};

export default Header;