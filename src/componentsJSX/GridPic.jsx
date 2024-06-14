import React, { useState, useEffect } from 'react';
import './GridPic.css';

// 设定过渡时间变量（单位：毫秒）
const transitionDuration = 300;

const GridPic = ({ images }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // 控制淡入淡出效果的持续时间
  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => {
        setFade(false);
      }, transitionDuration); // 使用变量
      return () => clearTimeout(timer);
    }
  }, [fade]);

  const handleViewAll = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDuration); // 使用变量
  };

  const handlePrevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, transitionDuration); // 使用变量
  };

  return (
    <div className="grid-container">
      <div className="left-image-container">
        <img src={images[0]} alt="ad1" className="large-image" onClick={handleViewAll} />
      </div>
      <div className="right-image-container">
        <img src={images[1]} alt="ad2" className="small-image top-image" onClick={handleViewAll} />
        <img src={images[2]} alt="ad3" className="small-image bottom-image" onClick={handleViewAll} />
      </div>
      {!showOverlay && (
        <div className="view-all-container" onClick={handleViewAll}>
          查看照片
        </div>
      )}
      {showOverlay && (
        <div className="overlay">
          <div className="close-button" onClick={handleCloseOverlay}>×</div>
          <div className="overlay-content">
            <div className="main-image-container">
              <img 
                src={images[currentImageIndex]} 
                alt={`ad${currentImageIndex + 1}`} 
                className={`main-image ${fade ? 'fade' : ''}`} 
                style={{ transitionDuration: `${transitionDuration}ms` }} // 使用变量
              />
            </div>
            <div className="thumbnail-container">
              {images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`ad${index + 1}`} 
                  className={`thumbnail-image ${index === currentImageIndex ? 'active' : ''}`} 
                  onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                      setCurrentImageIndex(index);
                    }, transitionDuration); // 使用变量
                  }}
                />
              ))}
            </div>
            <div className="arrow left-arrow" onClick={handlePrevImage}>‹</div>
            <div className="arrow right-arrow" onClick={handleNextImage}>›</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridPic;
