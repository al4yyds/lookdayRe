import React, { useState } from 'react';
import PriceRangeFilter from './PriceRangeFilter';
import './FilterSidebar.scss';

const FilterSidebar = ({ setFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        if (!updatedFilters[name]) {
          updatedFilters[name] = [];
        }
        updatedFilters[name].push(value);
      } else {
        if (updatedFilters[name]) {
          updatedFilters[name] = updatedFilters[name].filter(item => item !== value);
          if (updatedFilters[name].length === 0) {
            delete updatedFilters[name];
          }
        }
      }
      return updatedFilters;
    });
  };

  const handlePriceRangeChange = ({ min, max }) => {
    setMinPrice(min);
    setMaxPrice(max);
    setFilters(prevFilters => ({
      ...prevFilters,
      priceRange: { min, max }
    }));
  };

  return (
    <div className="filter-sidebar">
      <h2>已選</h2>
      <div className="filter-category">
        <span>主題樂園</span>
      </div>
      <button className="clear-filters" onClick={() => {
        setFilters({});
        setMinPrice(0);
        setMaxPrice(20000);
      }}>清空選項</button>
      <div className="filter-group">
        <h3>目的地</h3>
        <label>
          <input type="checkbox" name="location" value="台北" onChange={handleFilterChange} />
          台北
        </label>
        <label>
          <input type="checkbox" name="location" value="台中" onChange={handleFilterChange} />
          台中
        </label>
        <label>
          <input type="checkbox" name="location" value="高雄" onChange={handleFilterChange} />
          高雄
        </label>
        <label>
          <input type="checkbox" name="location" value="台南" onChange={handleFilterChange} />
          台南
        </label>
        <label>
          <input type="checkbox" name="location" value="宜蘭" onChange={handleFilterChange} />
          宜蘭
        </label>
      </div>
      <PriceRangeFilter setPriceRange={handlePriceRangeChange} />
    </div>
  );
};

export default FilterSidebar;
