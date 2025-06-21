// utils/renderStars.js
import React from 'react';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="text-warning">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star me-1" />
      ))}
      {halfStar && <i className="fas fa-star-half-alt me-1" />}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className="far fa-star me-1" />
      ))}
    </div>
  );
};

export default renderStars;
