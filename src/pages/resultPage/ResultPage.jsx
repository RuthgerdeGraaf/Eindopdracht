import React, { useContext, useEffect, useState } from 'react';
import { fetchGames } from '../../api/rawgApi';

// Context
import { AnswerContext } from '../../context/AnswerContext';

// Components
import GameCard from '../../components/gameCard/GameCard';

function ResultPage() {
    const { answers } = useContext(AnswerContext);
    const [games, setGames] = useState([]);
    const [fallbackGames, setFallbackGames] = useState([]);
    const [isFallback, setIsFallback] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 9;

    useEffect(() => {
        const getFiltersFromAnswers = () => {
            const filters = {
                platforms: [],
                tags: [],
                genres: [],
                price: '',
            };

            answers.forEach(answer => {
                if (answer.platforms) filters.platforms.push(answer.platforms);
                if (answer.tags) filters.tags.push(answer.tags);
                if (answer.genres) filters.genres.push(answer.genres);
                if (answer.price) filters.price = answer.price;
            });

            if (filters.platforms.length) filters.platforms = filters.platforms.join(',');
            if (filters.tags.length) filters.tags = filters.tags.join(',');
            if (filters.genres.length) filters.genres = filters.genres.join(',');

            return filters;
        };

        const fetchFilteredGames = async () => {
            const filters = getFiltersFromAnswers();
            try {
                const data = await fetchGames(filters);
                if (data.results.length === 0) {
                    setIsFallback(true);
                    const platform = filters.platforms;
                    const fallbackData = await fetchGames({ platforms: platform });
                    setFallbackGames(fallbackData.results);
                } else {
                    setGames(data.results);
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchFilteredGames();
    }, [answers]);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = isFallback ? fallbackGames.slice(indexOfFirstGame, indexOfLastGame) : games.slice(indexOfFirstGame, indexOfLastGame);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className="result-page">
                <h1>Results</h1>
                {isFallback && <h2>No results found based on your preferences. Maybe you like these games:</h2>}
                <div className="game-list">
                    {currentGames.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
                <div className="pagination">
                    <button className="previous" onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
                    <button className="next" onClick={nextPage} disabled={isFallback ? currentPage * gamesPerPage >= fallbackGames.length : currentPage * gamesPerPage >= games.length}>Next Page</button>
                </div>
            </div>
        </>
    );
}

export default ResultPage;
