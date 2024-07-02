import React from 'react'
import Post8 from '/src/IMG/Post8.png'
import {Link} from "react-router-dom"


const PageCard = ({smoothie}) => {
  

  return (
    <div className="card">
        <div className="card-box">
          <div className="header">
            <div className="cardlink">
              <button className="headingcap">{smoothie.heading}</button>
              <h4 className="date">{smoothie.date}</h4>
            </div>
              
            <div className="card-title">
              <h1 className="title">{smoothie.title}</h1>
              <p className="method">{smoothie.method}</p>
            </div>  
          </div>
        </div>
        <div className="navigation-button">
          <Link to='/' className="links">
            <button>Back</button>
          </Link>
          <Link to='/pagecard2' className="links">
            <button>Next</button>
          </Link>
        </div>
    </div>
  )
}

export default PageCard
