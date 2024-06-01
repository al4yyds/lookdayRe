import React from 'react';
import './SearchResults.scss';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map(result => (
        <div key={result.id} className="search-result-item">
          <img src={result.image} alt={result.title} />
          <div className="result-details">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            <div className="result-meta">
              <span className="price">NT$ {result.price}</span>
              <span className="rating">{result.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
