import React from 'react'
import './articlecard.css'
import Post8 from '/src/IMG/Post8.png'
import {Link} from "react-router-dom"

const ArticleCard = ({smoothie}) => {
  

  return (
    <div className="card">
        <div className="card-box">
          <div className="header">
            <div className="cardlink">
              <button className="headingcap">{smoothie.heading}</button>
              <h4 className="date">{smoothie.date}</h4>
            </div>
                
            <div className="card-title">
              <Link to='./pagecard' className="links">
                <h1 className="title">{smoothie.title}</h1>
                <p className="method">{smoothie.method}</p>
              </Link>
            </div>  
          </div>
          <div className="image">
            <img src={Post8} alt=""/>
          </div>
        </div>
    </div>
  )
}

export default ArticleCard
