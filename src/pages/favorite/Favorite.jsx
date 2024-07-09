import React from 'react';
import { useFavorites } from '../../context/FavoriteContext';
import GameCard from '../../components/gameCard/GameCard';

const Favorite = () => {
    const { favorites } = useFavorites();

    return (
        <div>
            <h2>Your Favorite Games</h2>
            <div className="game-list">
                {favorites.length === 0 ? (
                    <p>No favorite games found.</p>
                ) : (
                    favorites.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Favorite;
