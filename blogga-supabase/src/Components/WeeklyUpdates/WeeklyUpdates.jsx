import React from 'react'
import './weeklyupdates.css'
import Post4 from '/src/IMG/Post4.png'
import Post5 from '/src/IMG/Post5.png'
import Post6 from '/src/IMG/Post6.png'

const WeeklyUpdates = () => {
  return (
    <div className="card">
      <div className="design">
          <h1>Weekly Updates</h1>
          <hr/>
        </div>
      <div className="card-link">
            <button className="bttn">Weekly Updates</button>
            <h4>August 13, 2021</h4>
        </div>

        <div className="card-box">
          <div className="card-note">
              <h1>
                  10 hilarious cartoons the depict real-life <br/> problems in programmers
              </h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
          </div>

          <div className="image">
            <img src={Post4} alt=""/>
          </div>
        </div>

        <div className="card-link">
            <button className="bttn">Weekly Updates</button>
            <h4>August 13, 2021</h4>
        </div>

        <div className="card-box">
          <div className="card-note">
              <h1>
                  10 hilarious cartoons the depict real-life <br/> problems in programmers
              </h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
          </div>

          <div className="image">
            <img src={Post5} alt=""/>
          </div>
        </div>

        <div className="card-link">
            <button className="bttn">Weekly Updates</button>
            <h4>August 13, 2021</h4>
        </div>

        <div className="card-box">
          <div className="card-note">
              <h1>
                  10 hilarious cartoons the depict real-life <br/> problems in programmers
              </h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
          </div>

          <div className="image">
            <img src={Post6} alt=""/>
          </div>
        </div>
    </div>
  )
}

export default WeeklyUpdates

