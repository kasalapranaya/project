import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h1 className="title">How does it works?</h1>
      <div className="workflow">
        <div className="step">Time Capsule Creation</div>
        <div className="arrow">↓</div>
        <div className="step">Content Upload</div>
        <div className="arrow">↓</div>
        <div className="step">Sealing and Opening Mechanism</div>
        <div className="arrow">↓</div>
        <div className="step">Reminder System</div>
      </div>
    </div>
  );
};

export default HowItWorks;