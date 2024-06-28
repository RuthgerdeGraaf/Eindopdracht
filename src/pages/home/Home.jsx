import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import startButton from '../../img/StartButton.jpeg';
import './Home.scss';
import { Return } from '../../icons/Icon';

const Home = () => {
  const [message, setMessage] = useState('At any moment you can press this button, to get back to the start!');

  const handleClick = () => {
    setMessage('Nothing happens, you are already at the start. But it works!');
  };

  return (
    <div>
      <div>
        <h1> Welcome! </h1>
        <h2>So you don't know what to play ? Enter these questions, and I will suggest games for you </h2>
        <Link to="/quiz">
          <img src={startButton} className='round-image' alt="Start quiz" />
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
