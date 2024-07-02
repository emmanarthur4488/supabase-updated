import React from 'react'
import './blog.css'
import Tools from '../Tools/Tools'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'


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
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default Blog
