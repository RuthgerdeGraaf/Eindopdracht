import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import computerImage from '../../img/Computer.jpeg';
import playstationImage from '../../img/Playstation.jpeg';
import xboxImage from '../../img/Xbox.jpeg';
import nintendoImage from '../../img/Switch.jpeg';
import mobileImage from '../../img/Mobile.jpeg';
import everythingImage from '../../img/Everything.jpeg';
import './Home.scss';
import { Return } from '../../icons/Icon';

const Home = () => {
  const [message, setMessage] = useState('At any moment you can press this button, to get back to the start!');

  const handleClick = () => {
    setMessage('Nothing happens, you are already at the start. But it works!');
  };

  return (
    <div>
      <h1>Ready to play a game?</h1>
      <h2>Choose your platform:</h2>
      <div className='home-container'>
        <Link to="/playstation">
          <img src={playstationImage} className='round-image' alt="playstation" />
        </Link>
        <Link to="/xbox">
          <img src={xboxImage} className='round-image' alt="xbox"/>
        </Link>
        <Link to="/nintendo">
          <img src={nintendoImage} className='round-image' alt="nintendo"/>
        </Link>
        <Link to="/computer">
          <img src={computerImage} className='round-image' alt="computer"/>
        </Link>
        <Link to="/mobile">
          <img src={mobileImage} className='round-image' alt="mobile"/>
        </Link>
        <Link to="/everything">
          <img src={everythingImage} className='round-image' alt="everything"/>
        </Link>
      </div>
      <h3>{message}</h3>
      <button className='return-button' onClick={handleClick}>
        <Return />
      </button>
    </div>
  );
};

export default Home;
