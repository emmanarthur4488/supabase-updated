import React from 'react'
import './interestpost.css'
import Post7 from '/src/IMG/Post7.png'
import Post8 from '/src/IMG/Post8.png'

const InterestPost = () => {
  return (
    <div className="card">
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
              <img src={Post7} alt=""/>
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
              <img src={Post8} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default InterestPost
