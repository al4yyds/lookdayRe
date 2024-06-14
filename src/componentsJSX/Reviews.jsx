import React from "react";
import "./Reviews.css";
import userImage from "../assets/images/adHome/ad2.jpg"; // 替换为实际的用户图片路径

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-header">
        <div className="reviews-title">
          <span className="reviews-icon">🔶</span>
          <h2>評價</h2>
        </div>
        <div className="reviews-score">
          <span className="score">4.5</span> /5 超讚
          <div className="total-reviews">1K+則評論</div>
        </div>
      </div>
      <div className="reviews-content">
        <div className="review-category">
          <span>地點</span>
          <div className="review-bar">
            <div className="review-fill" style={{ width: "90%" }}></div>
          </div>
          <span>4.9</span>
        </div>
        <div className="review-category">
          <span>服務滿意度</span>
          <div className="review-bar">
            <div className="review-fill" style={{ width: "85%" }}></div>
          </div>
          <span>4.5</span>
        </div>
        <div className="review-category">
          <span>整潔度</span>
          <div className="review-bar">
            <div className="review-fill" style={{ width: "80%" }}></div>
          </div>
          <span>4.3</span>
        </div>
        <div className="review-category">
          <span>氛圍 & 設施</span>
          <div className="review-bar">
            <div className="review-fill" style={{ width: "70%" }}></div>
          </div>
          <span>4.3</span>
        </div>
        <div className="review-filters">
          <button>全部</button>
          <button>有照片</button>
          <button>4.5+</button>
          <button>3.0+</button>
        </div>
        <div className="individual-reviews">
          <div className="review-card">
            <img src={userImage} alt="User" className="user-image" />
            <div className="review-content">
              <div className="review-user">
                <strong>Klook User</strong>
                <span className="review-date">評價時間：2024年4月14日</span>
              </div>
              <div className="review-score">
                <span className="score">4.0</span> /5 很好
              </div>
              <div className="review-text">
                精緻三人房: 3位成人·1晚
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
                交通方便，但房間狹窄，早餐人太多，沒有分流，秩序混亂，食物選擇一般。
              </div>
            </div>
          </div>
          <div className="review-card">
            <img src={userImage} alt="User" className="user-image" />
            <div className="review-content">
              <div className="review-user">
                <strong>蔡**</strong>
                <span className="review-date">評價時間：2024年4月6日</span>
              </div>
              <div className="review-score">
                <span className="score">5.0</span> /5 超讚
              </div>
              <div className="review-text">
                高級房(雙人床或兩床): 2位成人·1晚
                Cp值高，早餐好吃，住宿體驗很好，服務人員服務很好，下次有來台南會再入住，推！！！
              </div>
            </div>
          </div>
        </div>
        <div className="view-all-reviews">
          <a href="#all-reviews">查看全部評價</a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
