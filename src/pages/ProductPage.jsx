import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductPage.scss';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:7148/api/ActivitiesAPI/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);

        // Calculate average rating
        if (data.reviews && data.reviews.length > 0) {
          const totalRating = data.reviews.reduce((acc, review) => acc + review.rating, 0);
          const avgRating = totalRating / data.reviews.length;
          setAverageRating(avgRating.toFixed(2)); // 保留兩位小數
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // 格式化日期為西元年、月、日
  const formattedDate = format(new Date(product.date), 'yyyy年MM月dd日');
  console.log(formattedDate);

  // 將base64字符串添加data:image/png;base64, 前綴
  const productImages = product.photo.map(photo => `data:image/png;base64,${photo}`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="product-page">
      <div className="product-header">
        <h1 className="product-title">{product.name}</h1>
        {averageRating && <p>平均評分：{averageRating}</p>}
        {product.photo && product.photo.length > 0 && (
          <div className="carousel-container">
            <Slider {...settings}>
              {productImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image} alt={`Product ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      <div className="product-info">
        <div className="product-price">NT$ {product.price}</div>
        <div className="product-date">日期：{formattedDate}</div>
        <div className="product-location">剩餘名額：{product.remaining}</div>
        <div className="product-description">
          <h2>活動詳情</h2>
          <p>{product.description}</p>
        </div>
      </div>

      <div className="product-reviews">
        <h2>評論</h2>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map(review => (
            <div key={review.reviewId} className="review">
              <p><strong>用戶名:</strong> {review.username}</p><br></br>
              <p><strong>評分:</strong> {review.rating}</p><br></br>
              <p><strong>評論:</strong> {review.comment}</p>
            </div>
          ))
        ) : (
          <p>目前沒有評論。</p>
        )}
      </div>

      <div className="product-footer">
        <button className="book-now-button">立即預訂</button>
        <div className="share-buttons">
          {/* 在這裡放置分享按鈕 */}
        </div>
      </div>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <svg viewBox="0 0 24 24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
      </svg>
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
      </svg>
    </div>
  );
};

export default ProductPage;
