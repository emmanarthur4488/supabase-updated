import React, { Component } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'



class Navbar extends Component {
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <nav>
      <h2 className="logo">BLOGGA</h2>

      <div>
        <ul id="navbar" className={this.state.clicked ? "#navabr active" : "#navbar"}>
          <li className="active"><Link to='/'>Design Tools</Link></li>
          <li><Link to='/blog'>Daily Update</Link></li>
          <li><Link to='/about'>Tutorial</Link></li>
          <li><Link to='/contact'>Library</Link></li>
        </ul>
      </div>

      <div>
          <button className="btn">Subscribe</button>
        </div>

      <div id="mobile" onClick={this.handleClick}>
        <i id="bars" className={this.state.clicked ?"fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  )
}
}

export default Navbar