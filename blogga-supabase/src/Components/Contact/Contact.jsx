import React from 'react'
import './contact.css'
import Image1 from '/src/IMG/Image-1.png'
import Image2 from '/src/IMG/Image-2.png'
import Image3 from '/src/IMG/Image-3.png'
import Image4 from '/src/IMG/Image-4.png'
import Image5 from '/src/IMG/Image-5.png'
import Image6 from '/src/IMG/Image-6.png'
import Image7 from '/src/IMG/Image-7.png'
import Image8 from '/src/IMG/Image-8.png'
import Image9 from '/src/IMG/Image-9.png'
import Image10 from '/src/IMG/Image-10.png'
import Image11 from '/src/IMG/Image-11.png'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div className="lib">
      <div className="library">
        <div className="introduction-library">
          <p>👋 HELLO</p>
          <h2>Insight about my personal work <br/> life, and the in-betweens</h2>
          <h4 className="products">
            When products are made for you, you never realise how their design can be <br/> exclusionary towards people of color.
          </h4>
        </div>
      </div>

      <div className="books">
        <h1>Books I'v read</h1>
        <p>2020</p>
      </div>
      <div className="book-images">
        <img src={Image1} alt=""/>
        <img src={Image2} alt=""/>
        <img src={Image3} alt=""/>
        <img src={Image4} alt=""/>
      </div>
      <div className="books">
        <p>2019</p>
      </div>
      <div className="book-images">
        <img src={Image5} alt=""/>
        <img src={Image6} alt=""/>
        <img src={Image7} alt=""/>
        <img src={Image8} alt=""/>
      </div>
      <div className="books">
        <p>2018</p>
      </div>
      <div className="book-images">
        <img src={Image9} alt=""/>
        <img src={Image10} alt=""/>
        <img src={Image11} alt=""/>
      </div>
      <div className="books">
        <p>2017</p>
      </div>
      <div className="book-images">
        <img src={Image1} alt=""/>
        <img src={Image2} alt=""/>
        <img src={Image3} alt=""/>
        <img src={Image4} alt=""/><br/>
        <img src={Image2} alt=""/>
        <img src={Image3} alt=""/>
        <img src={Image1} alt=""/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
