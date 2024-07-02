// GameCard.jsx

import React, { useState } from 'react';
import './GameCard.scss';
import Modal from '../../components/modal/Modal.jsx';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='card'>
            <h2 className='card-title'>{game.name}</h2>
            <img className='card-image' src={game.background_image} alt={game.name} />
            <p className='card-description'>{game.released}</p>
            <button className='card-button' onClick={openModal}>Details</button>
            <Modal isOpen={modalOpen} onClose={closeModal} game={game} />
        </div>
    );
};

export default GameCard;
