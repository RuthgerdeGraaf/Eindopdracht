import React, { useState } from 'react';

const Filters = ({ onApplyFilters }) => {
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
    const [dateRange, setDateRange] = useState('');

    const handleApplyFilters = () => {
        const filters = {};
        if (platform) filters.platforms = platform;
        if (genre) filters.genres = genre;
        if (dateRange) filters.dates = dateRange;
        onApplyFilters(filters);
    };

    return (
        <div className="filters">
            <label>
                Platform:
                <input
                    type="text"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                />
            </label>
            <label>
                Genre:
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </label>
            <label>
                Date Range:
                <input
                    type="text"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                />
            </label>
            <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filters;
