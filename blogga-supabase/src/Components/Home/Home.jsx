import React from 'react'
import './home.css'
import DesignToolsBtn from '../DesignToolsBtn/DesignToolsBtn'
import WeeklyUpdates from '../WeeklyUpdates/WeeklyUpdates'
import TutorialUpdates from '../TutorialUpdates/TutorialUpdates'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'






const Home = () => {

  return (
    <div>
      <div className="home">
        <div className="introduction">
          <p>👋 HELLO</p>
          <h2>Insight about my personal work <br/> life, and the in-betweens</h2>
        </div>
      </div>
      
      <div>
        <DesignToolsBtn/>
        <WeeklyUpdates/>
        <TutorialUpdates/>
      </div>

      <div>
        <Subscribe/>
        <Footer/>
      </div>
      
    </div>
    
    
  )
}

export default Home
