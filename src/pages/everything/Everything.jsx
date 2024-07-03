import React from 'react';
import './Everything.scss';
import GameList from '../../components/gameCard/GameList.jsx';

const Everything = () => {
    return (
        <div>
            <h1>Everything</h1>
            <p> Until you filter it</p>
            <GameList />
        </div>
    );
};

export default Everything;