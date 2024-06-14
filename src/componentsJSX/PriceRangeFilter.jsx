import React, { useState } from 'react';
import './PriceRangeFilter.scss';

const PriceRangeFilter = ({ setPriceRange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApply = () => {
    setPriceRange({ min: Number(minPrice), max: Number(maxPrice) });
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setPriceRange({ min: 0, max: 5000 });
  };

  return (
    <div className="price-range-filter">
      <h3>價格範圍</h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="最低價格"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="最高價格"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button className="reset-button" onClick={handleReset}>重設</button>
        <button className="ok-button" onClick={handleApply}>OK</button>
      </div>
    </div>
  );
};

export default PriceRangeFilter;