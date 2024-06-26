import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <div className="subscribe-box">
      <div className="subscribe-container">
          <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 105 103" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M80.9117 0C81.2181 2.66993 81.3755 5.38514 81.3755 8.13712C81.3755 47.1353 49.7612 78.7496 10.763 78.7496C7.10374 78.7496 3.50948 78.4713 0.000244141 77.9346V101.767C3.53227 102.168 7.12355 102.375 10.763 102.375C62.8089 102.375 105.001 60.183 105.001 8.13712C105.001 5.39583 104.883 2.68188 104.654 0H80.9117Z" fill="#F7DF61"/>
            </svg></a>
          <div className="subscribe">
            <h1>Subscribe to my blog.</h1>
            <p>I post fresh content every week.</p>
            <div className="address">
                <input type="email" placeholder="Enter address"/>
                <button>Subscribe</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Subscribe
