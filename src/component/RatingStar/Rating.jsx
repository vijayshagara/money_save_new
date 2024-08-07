import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      value={4}
    />
  );
};

export default Rating;