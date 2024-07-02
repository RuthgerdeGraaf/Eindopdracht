import React from 'react';
import './Test.scss';
import GameList from '../../components/gameCard/GameList.jsx';

const Test = () => {
    return (
        <div>
            <h1>This is a test page</h1>
            <p>Welcome to the test page!</p>
            <GameList />
        </div>
    );
};

export default Test;