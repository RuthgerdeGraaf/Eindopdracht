import React from 'react';
import { Link } from 'react-router-dom';
import computerImage from '../img/Computer.jpeg';
import playstationImage from '../img/Playstation.jpeg';
import xboxImage from '../img/Xbox.jpeg';
import nintendoImage from '../img/Switch.jpeg';
import mobileImage from '../img/Mobile.jpeg';
import everythingImage from '../img/Everything.jpeg';

const Home = () => {
  return (
    <div>
      <h2>Ready to play a game?</h2>
        <div>
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
    </div>
  );
};

export default Home;
