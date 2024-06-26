import React from 'react'
import './designtoolsbtn.css'
import Post from '/src/IMG/Post.png'
import Post2 from '/src/IMG/Post2.png'
import Post3 from '/src/IMG/Post3.png'


const DesignToolsBtn = () => {
  return (
    <div className="card">
        <div className="design">
          <h1>Design Tools</h1>
          <hr/>
        </div>
        <div className="card-link">
            <button className="bttn">Design Tools</button>
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
            <img src={Post} alt=""/>
          </div>
        </div>

        <div className="card-link">
            <button className="bttn">Design Tools</button>
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
            <img src={Post2} alt=""/>
          </div>
        </div>

        <div className="card-link">
            <button className="bttn">Design Tools</button>
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
            <img src={Post3} alt=""/>
          </div>
        </div>
      
    </div>
  )
}

export default DesignToolsBtn
