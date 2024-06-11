import React from 'react';
import './ProductHeader.scss';

const ProductHeader = ({ title, averageRating, isFavorite, toggleFavorite }) => {
  return (
    <div className="product-header">
      <h1 className="product-title">{title}</h1>
      <button className="favorite-button" onClick={toggleFavorite}>
        {isFavorite ? '❤️' : '🤍'}
      </button>
      {averageRating && <p className="average-rating">平均評分：{averageRating}</p>}
    </div>
  );
};

export default ProductHeader;
