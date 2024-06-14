import React, { useState, useEffect } from "react";
import "./GridPic.css";

const transitionDuration = 300;

const GridPic = ({ images }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => {
        setFade(false);
      }, transitionDuration);
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
    }, transitionDuration);
  };

  const handlePrevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }, transitionDuration);
  };

  // 檢查圖片數量，少於三張時不渲染右側的小圖片區域
  if (images.length < 3) {
    return (
      <div className="grid-container">
        <div className="left-image-container">
          <img
            src={images[0].src}
            alt={images[0].description}
            className="large-image"
            onClick={handleViewAll}
          />
        </div>
        {!showOverlay && (
          <div className="view-all-container" onClick={handleViewAll}>
            查看照片
          </div>
        )}
        {showOverlay && (
          <div className="overlay">
            <div className="close-button" onClick={handleCloseOverlay}>
              ×
            </div>
            <div className="overlay-content">
              <div className="main-image-container">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].description}
                  className={`main-image ${fade ? "fade" : ""}`}
                  style={{ transitionDuration: `${transitionDuration}ms` }}
                />
              </div>
              <div className="thumbnail-container">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.description}
                    className={`thumbnail-image ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                      }, transitionDuration);
                    }}
                  />
                ))}
              </div>
              <div className="arrow left-arrow" onClick={handlePrevImage}>
                ‹
              </div>
              <div className="arrow right-arrow" onClick={handleNextImage}>
                ›
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 正常渲染包含三張圖片的情況
  return (
    <div className="grid-container">
      <div className="left-image-container">
        <img
          src={images[0].src}
          alt={images[0].description}
          className="large-image"
          onClick={handleViewAll}
        />
      </div>
      <div className="right-image-container">
        <img
          src={images[1].src}
          alt={images[1].description}
          className="small-image top-image"
          onClick={handleViewAll}
        />
        <img
          src={images[2].src}
          alt={images[2].description}
          className="small-image bottom-image"
          onClick={handleViewAll}
        />
      </div>
      {!showOverlay && (
        <div className="view-all-container" onClick={handleViewAll}>
          查看照片
        </div>
      )}
      {showOverlay && (
        <div className="overlay">
          <div className="close-button" onClick={handleCloseOverlay}>
            ×
          </div>
          <div className="overlay-content">
            <div className="main-image-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].description}
                className={`main-image ${fade ? "fade" : ""}`}
                style={{ transitionDuration: `${transitionDuration}ms` }}
              />
            </div>
            <div className="thumbnail-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.description}
                  className={`thumbnail-image ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                      setCurrentImageIndex(index);
                    }, transitionDuration);
                  }}
                />
              ))}
            </div>
            <div className="arrow left-arrow" onClick={handlePrevImage}>
              ‹
            </div>
            <div className="arrow right-arrow" onClick={handleNextImage}>
              ›
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridPic;
