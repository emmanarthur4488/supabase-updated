import React from 'react'
import './about.css'
import Tools2 from '../Tools2/Tools2'
import Rect1 from '/src/IMG/Rect1.png'
import Rect2 from '/src/IMG/Rect2.png'
import InterestPost from '../InterestPost/InterestPost'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
      <div className="home">
        <div className="introduction">
          <Tools2/>
          <h2>Insight about my personal work <br/> life, and the in-betweens</h2>
        </div>
      </div>
      <div className="image-box">
        <img src={Rect1} alt=""/>
      </div>

      <div className="note">
        <p>
          Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever. <br/> <br/>
          Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br/> its use is merely the symptom of a worse problem to take into consideration. <br/> <br/>
          The toppings you may chose for that TV dinner pizza slice when you forgot to <br/> shop for foods, the paint you may slap on your face to impress the new boss is <br/> your business. But what about your daily bread?
        </p>
      </div>

      <div className="image2">
        <img src={Rect2} alt=""/>
        <p>Image caption or credit</p>
      </div>

      <div className="note-2">
        <p>
          The topping you may chose for that TV dinner pizza slice when you forgot to <br/> to shop for foods, the paints you may slap on your face to impress the new boss is <br/> your business. But what about your daily bread? Not so fast, i'd say, there are <br/> some redeeming
          factors in favour greeking text, as it's use is merely the <br/> symptom of a worse problem to take into consideration. <br/> <br/>
          Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>

      <div className="note-3">
        <p>
          Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>

      <div className="note-4">
        <p>
        Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever. <br/> <br/>
        The topping you may chose for that TV dinner pizza slice when you forgot to <br/> to shop for foods, the paints you may slap on your face to impress the new boss is <br/> your business. But what about your daily bread? Not so fast, i'd say, there are <br/> some redeeming
        factors in favour greeking text, as it's use is merely the <br/> symptom of a worse problem to take into consideration. <br/> <br/>
        Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br/> its use is merely the symptom of a worse problem to take into consideration. <br/> <br/>
        Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>
      <div className="section-hr">
        <hr/>
      </div>
      <div className="design">
        <h1>Other Interesting Post</h1>
      </div>
      <InterestPost/>
      <div>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default About
