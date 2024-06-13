import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction-header">
        <span className="introduction-icon">🔶</span>
        <h2>簡介</h2>
      </div>
      <div className="introduction-content">
        <div className="award">
          <img src="path/to/award-image.png" alt="Award" />
          <div>
            <strong>2023 Best of Taiwan</strong>
            <p>
              靠近國立台灣博物館（德立莊酒店位於台北西門町，步行15分鐘即可抵達國立台灣博物館和總統府。此4星級飯店位置絕佳，從這裡開車1.8公里可以抵達龍山寺，開車1.8公里則會到達西門街觀光夜市。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
