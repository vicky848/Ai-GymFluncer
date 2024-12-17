
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import './index.css'

 const Footer = () => {
  return (
    
    <div className='footer-container'>
    
     <div className='social-media-logo'>
      <ul className='list-container'>
        <li>
          <i>
            <FaFacebook className=' image facebook' />
          </i>
        </li>
        <li>
          <i>
            <FaTwitter className=' image twitter'/>
          </i>
        </li>
        <li>
          <i>
            <IoLogoInstagram className='image instagram' />
          </i>
        </li>
        <li>
          <i>
            <FaLinkedin className=' image linkedin' />
          </i>
        </li>
      </ul>

     </div>




    <div className='content-container'>
    <p>�� 2021 Your Website. All rights reserved.</p>
      <p>Privacy Policy | Terms of Service</p>
      <p>Contact Us</p>
      <p>Follow Us</p>
    </div>
    </div>
    

    
  )
}

export default Footer