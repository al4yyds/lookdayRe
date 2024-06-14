// ImageDescription.js

import React from 'react';
import './ImageDescription.scss'; // 样式文件

const ImageDescription = ({ images }) => {
  return (
    <div className="image-description">
      {images.slice(0, 4).map((image, index) => ( // 仅显示前四张图片
        <div key={index} className="image-description-item">
          <div className="large-image">
            <img src={image.src} alt={`Large ${index}`} />
          </div>
          <div className="description">
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageDescription;
