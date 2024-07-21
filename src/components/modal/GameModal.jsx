import React from 'react';
import './GameModal.scss';
import { useFavorites } from '../../context/FavoriteContext';
import { useCollection } from '../../context/CollectionContext';
import { Like, Liked, Add, Added } from '../../assets/icons/Icon';

const GameModal = ({ isOpen, onClose, game }) => {
    const { addFavorite, removeFavorite, favorites } = useFavorites();
    const isFavorite = favorites.some(fav => fav.id === game.id);

    const { addCollection, removeCollection, collection } = useCollection();
    const isInCollection = collection.some(col => col.id === game.id);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        if (isFavorite) {
            removeFavorite(game.id);
        } else {
            addFavorite(game);
        }
    };

    const handleCollectionClick = (e) => {
        e.stopPropagation();
        if (isInCollection) {
            removeCollection(game.id);
        } else {
            addCollection(game);
        }
    };

    if (!isOpen || !game) {
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{game.name}</h2>
                <div className="modal-image-container">
                    <img src={game.background_image} alt={game.name} />
                    <div className="modal-buttons">
                        <button className="favorite-button" onClick={handleFavoriteClick}>
                            {isFavorite ? <Liked /> : <Like />}
                        </button>
                        <button className="collection-button" onClick={handleCollectionClick}>
                            {isInCollection ? <Added /> : <Add />}
                        </button>
                    </div>
                </div>
                <div className="modal-bottom">
                    <p>Released: {game.released}</p>
                    <p>Rating: {game.rating} out of 5</p>
                    <p>Genres: {game.genres.map(genre => genre.name).join(', ')}</p>
                    <p>Platforms: {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
                    {game.stores && game.stores.length > 0 && (
                        <div className="where-to-buy">
                            <h3>Where to buy:</h3>
                            <ul>
                                {game.stores.map(store => (
                                    <li key={store.id}>
                                        <a href={store.url} target="_blank" rel="noopener noreferrer">{store.store.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameModal;
