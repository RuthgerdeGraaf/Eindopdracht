import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (game) => {
    setFavorites((prevFavorites) => [...prevFavorites, game]);
  };

  const removeFavorite = (gameId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(game => game.id !== gameId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
