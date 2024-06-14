import React from 'react';
import './Reviews.scss';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-container">
      <h2>評論</h2>
      <div className="reviews-list">
        {reviews && reviews.length > 0 ? (
          reviews.map(review => (
            <div key={review.reviewId} className="review">
              <div className="review-header">
                <p><strong>用戶名:</strong> {review.username}</p>
                <p className="star"><strong> ★</strong> {review.rating}</p>
              </div>
              <div className="review-content">
                <p><strong>評論:</strong> {review.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p>目前沒有評論。</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
