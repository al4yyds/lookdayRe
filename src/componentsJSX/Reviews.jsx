import React from 'react';
import './Reviews.scss';

const Reviews = ({ reviews }) => {
  return (
    <div className="product-reviews">
      <h2>評論</h2>
      {reviews && reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.reviewId} className="review">
            <p><strong>用戶名:</strong> {review.username}</p>
            <p className='star'><strong>評分:★</strong> {review.rating}</p>
            <p><strong>評論:</strong> {review.comment}</p>
          </div>
        ))
      ) : (
        <p>目前沒有評論。</p>
      )}
    </div>
  );
};

export default Reviews;
