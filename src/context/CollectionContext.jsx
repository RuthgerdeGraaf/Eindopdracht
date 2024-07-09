import React, { createContext, useState, useContext } from 'react';

const CollectionContext = createContext();

export const useCollection = () => useContext(CollectionContext);

export const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);

  const addCollection = (game) => {
    setCollection((prevCollection) => [...prevCollection, game]);
  };

  const removeCollection = (gameId) => {
    setCollection((prevCollection) => prevCollection.filter(game => game.id !== gameId));
  };

  return (
    <CollectionContext.Provider value={{ collection, addCollection, removeCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};
