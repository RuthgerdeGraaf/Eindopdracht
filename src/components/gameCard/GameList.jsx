import React, { useEffect, useState } from 'react';
import { fetchGames } from '../../api/rawgApi.js';
import GameCard from './GameCard.jsx';
// import GameModal from '../modal/GameModal.jsx';
import './GameList.scss';
import '../../../src/components/button/Button.scss';


const GameList = () => {
    const [games, setGames] = useState([]);
    const [filters, setFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 9;

useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetchGames({ ...filters, page: currentPage });
            setGames(data.results.slice(0, gamesPerPage));
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    fetchData();
}, [filters, currentPage]);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
        setCurrentPage(1);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    

    return (
        <div>
            <div className="filters">
                <input
                    type="text"
                    name="search"
                    placeholder="Search games"
                    onChange={handleFilterChange}
                />
                <select name="platforms" onChange={handleFilterChange}>
                    <option value="">All Platforms</option>
                    <option value="4">PC</option>
                    <option value="18">PlayStation</option>
                    <option value="1">Xbox One</option>
                    <option value="7">Nintendo Switch</option>
                    <option value="3">iOS</option>
                    <option value="21">Android</option>
                </select>
                <select name="genres" onChange={handleFilterChange}>
                    <option value="">All Genres</option>
                    <option value="action">Action</option>
                    <option value="indie">Indie</option>
                    <option value="adventure">Adventure</option>
                    <option value="strategy">Strategy</option>
                    <option value="shooter">Shooter</option>
                    <option value="casual">Casual</option>
                    <option value="simulation">Simulation</option>
                    <option value="puzzle">Puzzle</option>
                    <option value="arcade">Arcade</option>
                    <option value="platformer">Platformer</option>
                    <option value="racing">Racing</option>
                    <option value="sports">Sports</option>
                    <option value="massively-multiplayer">Massively Multiplayer</option>
                    <option value="family">Family</option>
                    <option value="fighting">Fighting</option> 
                    <option value="board-games">Board Games</option>
                    <option value="educational">Educational</option>
                    <option value="card">Card</option>
                </select>
                <select name="tags" onChange={handleFilterChange}>
                    <option value="">All Modes</option>
                    <option value="singleplayer">Singleplayer</option>
                    <option value="online-multiplayer">Multiplayer</option>
                    <option value="co-op">Co-op</option>
                    <option value="cross-platform-multiplayer">Cross-platform multiplayer</option>
                    <option value="local-multiplayer">Local multiplayer</option>
                </select>
                <select name="metacritic" onChange={handleFilterChange}>
                    <option value="">Any Metacritic Score</option>
                    <option value="80,100">80+</option>
                    <option value="70,79">70-79</option>
                    <option value="60,69">60-69</option>
                    <option value="50,59">50-59</option>
                    <option value="0,49">0-49</option>
                </select>
            </div>
            <div className="game-list">
                {games.map((game, index) => (
                    <GameCard key={index} game={game} />
                    ))}
            </div>
            <div className="pagination">
                <button className="previous" onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
                <button className="next" onClick={nextPage} disabled={games.length < gamesPerPage}>Next Page</button>
            </div>
        </div>
    );
};

export default GameList;
