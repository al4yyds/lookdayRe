import React from "react";
import "./ProInfo.css";

const ProInfo = () => {
  return (
    <div className="pro-info">
      <div className="pro-header">
        <div className="pro-title">
          <h1>德立莊酒店(Hotel Midtown Richardson)</h1>
          <div className="pro-rating">
            <span className="stars">★★★★☆</span>
            <span className="promotion">結帳優惠【HOTEL92JU】享92折</span>
          </div>
        </div>
        <div className="pro-price">
          <span>NT$ 2,219</span> 每晚
        </div>
      </div>
      <div className="pro-content">
        <div className="promo-code">專屬優惠碼</div>
        <div className="rating-box">
          <div className="rating-score">
            <span className="score">4.5</span> /5 超讚
            <div className="reviews">1K+ 則評論</div>
          </div>
          <div className="user-review">
            <div className="review-logo">K</div>
            <div className="review-text">
              <strong>Klook用戶</strong> <br />
              地點非常方便又近捷運站! 不過隔音有少少差...
            </div>
          </div>
        </div>
        <div className="pro-details">
          <div className="details-item">
            <span className="details-icon">💪</span>
            <span>免費健身中心</span>
          </div>
          <div className="details-item">
            <span className="details-icon">🍽</span>
            <span>餐廳</span>
          </div>
          <a href="#more-details" className="more-details">
            查看更多詳情
          </a>
        </div>
        <div className="pro-location">
          <div>台北市放店514-2號</div>
          <div className="location-details">
            <div>捷運西門站, 200m</div>
            <div>台北站 (台鐵站), 1.0km</div>
            <div>台北松山機場, 4.8km</div>
          </div>
          <a href="#map" className="view-map">
            查看地圖
          </a>
        </div>
      </div>
      <button className="select-room-button">選擇房型</button>
    </div>
  );
};

export default ProInfo;
