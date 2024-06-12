import React from 'react';
import PriceRangeFilter from './PriceRangeFilter';
import DateFilter from './DateFilter';
import './FilterSidebar.scss';

const FilterSidebar = ({ setFilters }) => {
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
    setFilters(prevFilters => ({
      ...prevFilters,
      priceRange: { min, max }
    }));
  };

  const handleDateRangeChange = ({ start, end }) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      dateRange: {
        start: start ? start.toISOString().split('T')[0] : null,
        end: end ? end.toISOString().split('T')[0] : null
      }
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
  };

  return (
    <div className="filter-sidebar">
      <h2>已選</h2>
      <div className="filter-category">
        <span>主題樂園</span>
      </div>
      <button className="clear-filters" onClick={handleClearFilters}>清空選項</button>
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
      <DateFilter setDateRange={handleDateRangeChange} />
      <PriceRangeFilter setPriceRange={handlePriceRangeChange} />
    </div>
  );
};

export default FilterSidebar;
