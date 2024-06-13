import React from 'react';
import './ProductHeader.scss';
import HeartButton from './HeartButton';

const ProductHeader = ({ title, averageRating, isFavorite, toggleFavorite }) => {
  return (
    <div className="product-header">
      <h1 className="product-title">{title}</h1>
      <HeartButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      {averageRating && <p className="average-rating">★ {averageRating}</p>}
    </div>
  );
};

export default ProductHeader;
