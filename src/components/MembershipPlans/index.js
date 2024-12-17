import React from 'react'
import './index.css'
 const MembershipPlans = () => {
  return (
    <div className='membership-plans-container'>
      <h2>Membership Plans</h2>
      <div className='plans'>
        <div className='plan'>
          <h3>Basic Plan</h3>
          <ul>
            <li>500 members</li>
            <li>Unlimited storage</li>
            <li>Basic features</li>
          </ul>
          <button>Sign Up</button>
        </div>
        <div className='plan'>
          <h3>Premium Plan</h3>
          <ul>
            <li>1,000 members</li>
            <li>Unlimited storage</li>
            <li>Premium features</li>
          </ul>
          <button>Sign Up</button>
        </div>
      </div>
      <p></p>

    </div>
  )
}

export default MembershipPlans