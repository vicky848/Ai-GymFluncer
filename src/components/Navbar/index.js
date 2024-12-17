
import React from 'react'

import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
  <h1 className='navbar-heading'>GymFluncer</h1>
  <ul className='un-order-list-container'>
  <li><Link to="/" className='link'>Home</Link></li>
  <li><Link to="/about" className='link'>About</Link></li>
  <li><Link to="/contact" className='link'>Contact</Link></li>
  <li><Link to="/plans" className='link'>Membership Plans</Link></li>
  <li><Link to="/schedule" className='link'>Schedule</Link></li>


  </ul>
  <div className='button-container'>
    <button className='navbar-btn btn btn-success'>Login</button>
    <button className='navbar-btn btn btn-success'>Get Started</button>

  </div>



    </nav>
  )
}

export default Navbar