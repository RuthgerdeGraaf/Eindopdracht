// Modal.jsx
import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, game }) => {
    if (!isOpen || !game) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>Close</button>
                <h2>{game.name}</h2>
                <div className="modal-content">
                    <div className="modal-left">
                        <img src={game.background_image} alt={game.name} />
                        <p>Released: {game.released}</p>
                        <p>Rating: {game.rating}</p>
                        <p>Genres: {game.genres.map(genre => genre.name).join(', ')}</p>
                        <p>Platforms: {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
                    </div>
                    <div className="modal-right">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
