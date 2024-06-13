import React, { useState } from 'react';
import './FilterSidebar.scss';
import DateFilter from './DateFilter';
import PriceRangeFilter from './PriceRangeFilter';

const FilterSidebar = ({ setFilters }) => {
  const [locationFilters, setLocationFilters] = useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLocationFilters(prevFilters => [...prevFilters, value]);
    } else {
      setLocationFilters(prevFilters => prevFilters.filter(filter => filter !== value));
    }
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
    setLocationFilters([]);
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
        {['台北', '台中', '高雄', '台南', '宜蘭'].map(location => (
          <label key={location}>
            <input 
              type="checkbox" 
              name="location" 
              value={location} 
              checked={locationFilters.includes(location)} 
              onChange={handleFilterChange} 
            />
            {location}
          </label>
        ))}
      </div>
      <DateFilter setDateRange={handleDateRangeChange} />
      <PriceRangeFilter setPriceRange={handlePriceRangeChange} />
    </div>
  );
};

export default FilterSidebar;