import React from "react";
import "./Introduction.css";
import awardImage from "../assets/images/adHome/ad2.jpg"; // 替换为实际的奖项图片路径

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-header">
        <span className="intro-icon">🔶</span>
        <h2>簡介</h2>
      </div>
      <div className="intro-content">
        <img src={awardImage} alt="Award" className="award-image" />
        <div className="award-details">
          <div className="award-title">
            <span className="award-year">2023</span> Best of Taiwan
          </div>
          <p>
            靠近國立台灣博物館（德立莊酒店位於台北西門町，步行15分鐘即可抵達國立台灣博物館和總統府。此4星級飯店位置絕佳，從這裡開車1.8公里可以抵達龍山寺，開車1.8公里則會到達西門街觀光夜市。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
