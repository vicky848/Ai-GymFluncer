
import React from 'react'
import './index.css'
import ContentSection from '../ContentSection'
import WorkoutGallery from '../WorkoutGallery'

// Home 

const Home = () => {
  return (
    
      <>
      <div className="home">
       
       <h1 className='home-heading'>Welcome to the Gym!</h1>
       <p className='home-text'>Our gym offers a variety of workout classes and accommodations. <br/>Join us today and experience the best in fitness!</p>
        
          <div className='button-container'>
          <button className='home-btn'>Book a Class</button>
          <button className='home-btn'>Learn More</button>
          </div>
     
  
   </div>
      
      <ContentSection/>
      <WorkoutGallery/>
      </>
  )
}


export default Home