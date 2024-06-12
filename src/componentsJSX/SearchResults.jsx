import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchResults.scss';

const SearchResults = ({ results }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/productpage/${id}`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const truncateDescription = (description) => {
    return description.length > 15 ? description.substring(0, 15) + '...' : description;
  };
console.log(results)
  return (
    <div className="search-results">
      {results.map(result => (
        <div key={result.activityId} className="search-result-item" onClick={() => handleClick(result.activityId)}>
          <img src={`data:image/png;base64,${result.photo[0]}`} alt={result.name} />
          <div className="result-details">
            <h3>{result.name}</h3>
            <p>{formatDate(result.date)}</p>
            <p>{truncateDescription(result.description)}</p>
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
