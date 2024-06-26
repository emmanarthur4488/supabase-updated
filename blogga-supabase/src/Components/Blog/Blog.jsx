import React from 'react'
import './blog.css'
import Tools from '../Tools/Tools'
import DesignCard from '../DesignCard2/DesignCard'
import More from '../More/More'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'
import MoreArticle from '../Article/MoreArticles/MoreArticles'

const Blog = () => {
  return (
    <div>
      <div className="home">
        <div className="introduction">
          <Tools/>
          <h2>Insight about my personal work <br/> life, and the in-betweens</h2>
        </div>
      </div>

      <div>
        <div className="design">
          <h1>Design Tools</h1>
          <hr/>
        </div>
        <DesignCard/>
        <More/>
        <MoreArticle/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default Blog
