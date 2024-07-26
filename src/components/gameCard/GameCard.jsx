import React, { useState } from 'react';

// Components
import GameModal from '../../components/modal/GameModal.jsx';

// Styles
import './GameCard.scss';

const GameCard = ({ game }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleMouseEnter = () => {
        setModalOpen(true);
    };

    const handleMouseLeave = () => {
        setModalOpen(false);
    };

    return (
        <div
            className='card'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='card-title'>{game.name}</h2>
            <img className='card-image' src={game.background_image} alt={game.name} />
            <p className='card-description'>{game.released}</p>
            {modalOpen && <GameModal isOpen={modalOpen} onClose={handleMouseLeave} game={game} />}
        </div>
    );
};

export default GameCard;
