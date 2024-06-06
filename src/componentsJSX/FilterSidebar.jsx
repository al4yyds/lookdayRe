import React, { useState } from 'react';
import './FilterSidebar.scss';

const FilterSidebar = ({ setFilters }) => {
  const [minPrice, setMinPrice] = useState(0); // 初始最低價格
  const [maxPrice, setMaxPrice] = useState(20000); // 初始最高價格

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

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters, minPrice: value };

      // 更新 URL 的查詢參數
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("minPrice", value);
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, '', newUrl);

      return updatedFilters;
    });
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters, maxPrice: value };

      // 更新 URL 的查詢參數
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("maxPrice", value);
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
        setMinPrice(0);
        setMaxPrice(20000);
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
      <div className="filter-group">
        <h3>價格範圍</h3>
        <label>
          最低價格:
          <input type="range" name="minPrice" min="0" max="1000" value={minPrice} onChange={handleMinPriceChange} />
          {minPrice}
        </label>
        <label>
          最高價格:
          <input type="range" name="maxPrice" min="0" max="1000" value={maxPrice} onChange={handleMaxPriceChange} />
          {maxPrice}
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
