import React from "react";
import "./ProductDesc.css";

const Description = ({ price, date, remaining, description }) => {
  return (
    <div className="product-info">
      <div className="product-price">NT$ {price}</div>
      <div className="product-date">日期：{date}</div>
      <div className="product-location">剩餘名額：{remaining}</div>
      <div className="product-description">
        <h2>活動詳情</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
