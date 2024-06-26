import React from 'react'
import {supabase} from '../../Config/Client'
import './articlecard.css'
import Post8 from '/src/IMG/Post8.png'

const ArticleCard = ({smoothie}) => {


  return (
    <div className="card">
      <div className="card-box">
        <div className="header">
          <div>
            <div className="cardlink">
              <button className="headingcap">{smoothie.heading}</button>
              <h4 >{smoothie.date}</h4>
            </div>
          </div>
          <div className="card-note">
            <h1>{smoothie.title}</h1>
            <p>{smoothie.method}</p>
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
