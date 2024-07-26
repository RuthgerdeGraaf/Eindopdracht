import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameById } from '../../api/rawgApi'; 

const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const data = await fetchGameById(id);
                setGame(data);
            } catch (error) {
                console.error('Error fetching game details:', error);
            }
        };

        fetchGame();
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{game.name}</h1>
            <img src={game.background_image} alt={game.name} />
            <p>Released: {game.released}</p>
        </div>
    );
};

export default GameDetail;
