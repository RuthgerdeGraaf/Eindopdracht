import React, { createContext, useState } from 'react';

export const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const resetAnswers = () => setAnswers([]);

  return (
    <AnswerContext.Provider value={{ answers, setAnswers, resetAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
