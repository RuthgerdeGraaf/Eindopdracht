import React from 'react';

function ResultPage({ answers }) {
  return (
    <div>
      <h1>Resultaten</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {answers.map((answer, index) => (
          <img
            key={index}
            src={answer.src}
            alt={answer.alt}
            className='small-round-image'
          />
        ))}
      </div>
    </div>
  );
}

export default ResultPage;
