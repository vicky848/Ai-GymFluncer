import React from 'react';
import './index.css'

const ContentSection = () => {
  const handleButtonClick = () => {
    alert('Stay motivated and keep pushing your limits!');
  };

  return (
    <div className="content-container">
    
     <img src = "/image/gym-logo.png" alt='logo' className='logo-image'/>
     
    <div className='content-card'>
    <h1>Fitness Zone</h1>
      <p>Welcome to your ultimate workout guide!</p>
      <p>
        Whether you’re a beginner or a seasoned athlete, this section is here to
        inspire your fitness journey.
      </p>
      <p>
        Discover tips, tricks, and routines to help you build strength, endurance,
        and confidence.
      </p>
      <p>Last updated: {new Date().toLocaleString()}</p>
      <button className='button' onClick={handleButtonClick}>Get Motivated!</button> <br/>
       
       <img src='/image/image2.jpg' alt='Workout illustration' className = "content-image"/>

      <hr />
      <h2>Quick Tips:</h2>
      <ul className='content-list'>
        <li>Start with a dynamic warm-up to activate your muscles.</li>
        <li>Focus on form over speed to avoid injuries.</li>
        <li>Stay hydrated and take short breaks when needed.</li>
      </ul>
    </div>
    </div>
  );
};

export default ContentSection;