import React from 'react';
import { Link } from 'react-router-dom';
import onePlayerImage from '../../img/OnePlayer.jpeg';
import twoPlayerImage from '../../img/TwoPlayers.jpeg';
import playstationImage from '../../img/Playstation.jpeg';

const Home = () => {
  return (
    <div>
      <h2>How many players are you joining with ?</h2>
        <div>
          <Link to="/playstationOnePlayer">
            <img src={onePlayerImage} className='round-image' alt="OnePlayer" />
            </Link>
            <Link to="/playstationTwoPlayers">
                <img src={twoPlayerImage} className='round-image' alt="TwoPlayers"/>
            </Link>
        </div>
        <div>
          <img src={playstationImage} className='small-round-image' alt="Playstation"/>
        </div>
    </div>
  );
};

export default Home;