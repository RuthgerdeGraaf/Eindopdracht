import React, { useContext } from 'react';
import { AnswerContext } from '../../context/AnswerContext';
import './ResultPage.scss';

function ResultPage() {
  const { answers } = useContext(AnswerContext);

  return (
    <div className="result-page">
      <h1>Results</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {answers.map((answer, index) => (
          <img
            key={index}
            src={answer.src}
            alt={answer.alt}
            className="round-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ResultPage;
