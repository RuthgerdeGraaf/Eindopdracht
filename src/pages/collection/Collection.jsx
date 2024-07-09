import React from 'react';
import { useCollection } from '../../context/CollectionContext';
import GameCard from '../../components/gameCard/GameCard';

const Collection = () => {
    const { collection } = useCollection();

    return (
        <div>
            <h2>Your Game Collection</h2>
            <div className="game-list">
                {collection.length === 0 ? (
                    <p>No games in your collection.</p>
                ) : (
                    collection.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Collection;
