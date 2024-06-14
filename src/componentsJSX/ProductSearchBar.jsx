import React from "react";
import "./ProductSearchBar.css";

const ProductSearchBar = () => {
  return (
    <div className="product-search-bar">
      <div className="search-bar-container">
        <input type="text" className="search-input" placeholder="搜尋關鍵字" />
        <div className="date-picker">
          7月2日 - 7月3日{" "}
          <span role="img" aria-label="calendar">
            📅
          </span>
        </div>
        <div className="guest-room-picker">2 成人，1客房</div>
        <button className="search-button">搜尋</button>
      </div>
    </div>
  );
};

export default ProductSearchBar;
