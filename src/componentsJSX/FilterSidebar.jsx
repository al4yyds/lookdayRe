import React from 'react';
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

      // 更新 URL 的查詢參數
      const searchParams = new URLSearchParams(window.location.search);
      for (const key in updatedFilters) {
        searchParams.delete(key);
        updatedFilters[key].forEach(filterValue => searchParams.append(key, filterValue));
      }
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, '', newUrl);

      return updatedFilters;
    });
  };

  return (
    <div className="filter-sidebar">
      <h2>已選</h2>
      <div className="filter-category">
        <span>主題樂園</span>
      </div>
      <button className="clear-filters" onClick={() => {
        setFilters({});
        window.history.pushState({}, '', window.location.pathname); // 清空查詢參數
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
    </div>
  );
};

export default FilterSidebar;
