import React from 'react'
import './home.css'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'
import MoreArticle from '../Article/MoreArticles/MoreArticles'






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
      </div>
      <div>
        <MoreArticle/>
        <Subscribe/>
        <Footer/>
      </div>
      
    </div>
    
    
  )
}

export default Home
