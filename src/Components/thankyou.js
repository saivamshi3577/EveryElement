import React from 'react';
import './ThankYou.css';
import thankYouImage from '../assets/thank-you-image.jpg';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-page">
      <h1>Thank You for Your Message!</h1>
      <p>We appreciate your interest in Every Element. We'll get back to you shortly.</p>
      <div className="thank-you-image">
        <img src={thankYouImage} alt="Thank You" />
      </div>
      <button onClick={handleExploreMore}>Explore More</button>
    </div>
  );
};

export default ThankYou;
