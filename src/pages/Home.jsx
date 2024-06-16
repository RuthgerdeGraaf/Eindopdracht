import React from 'react';
import { Link } from 'react-router-dom';
import computerImage from '../img/Computer.png';
import playstationImage from '../img/Playstation.png';
import xboxImage from '../img/Xbox.png';
import nintendoImage from '../img/Switch.png';
import mobileImage from '../img/Mobile.png';
import everythingImage from '../img/Everything.png';

const Home = () => {
  return (
    <div>
      <Link to="/playstation">
        <img src={playstationImage} alt="playstation" width="200px" height="200px" />
      </Link>
      <Link to="/xbox">
        <img src={xboxImage} alt="xbox" width="200px" height="200px" />
      </Link>
      <Link to="/nintendo">
        <img src={nintendoImage} alt="nintendo" width="200px" height="200px" />
      </Link>
      <Link to="/mobile">
        <img src={mobileImage} alt="mobile" width="200px" height="200px" />
      </Link>
      <Link to="/everything">
        <img src={everythingImage} alt="everything" width="200px" height="200px" />
      </Link>

      <h2>Ready to play a game?</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptates similique asperiores nesciunt atque molestiae animi nobis nam voluptatem quas officia error delectus, obcaecati autem enim expedita recusandae voluptate fuga?
      </div>
    </div>
  );
};

export default Home;
