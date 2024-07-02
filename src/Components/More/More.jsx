import React from 'react'
import './more.css'
import {Link} from "react-router-dom"

const More = () => {
  return (
    <div>
      <div className="more">
        <Link to='/createarticle'><button>Post articles</button></Link>
      </div>
    </div>
  )
}

export default More
