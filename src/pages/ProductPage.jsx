import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

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

  return (
    <div className="product-page">
      <div className="product-header">
        <h1 className="product-title">{product.name}</h1>
        {averageRating && <p>平均評分：{averageRating}</p>}
        {product.photo && product.photo.length > 0 && (
          <img src={`data:image/png;base64,${product.photo[0]}`} alt={product.name} />
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

export default ProductPage;
