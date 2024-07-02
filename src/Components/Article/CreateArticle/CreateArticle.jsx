import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {supabase} from "../../Config/Client"
import './createarticle.css'


const CreateArticle = () => {

  const navigate = useNavigate();

  const [title, setTile] = useState('')
  const [method, setMethod] = useState('')
  const [date, setDate] = useState('')
  const [heading, setHeading] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !date || !heading) {
      setFormError('please fill in all the field correctly')
      return
    }
    
    const { data, error} = await supabase
      .from('smoothies')
      .insert([{title, method, date, heading}])
      

      if (error) {
        console.log(error)
        setFormError('please fill in all the field correctly')
      }
      if (data) {
        console.log(data)
        setFormError(null)
        
      }
      setTimeout(()=>{
        navigate('/')
      }, 5000);
    }

    


  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
         type="text"
         id="title"
         value={title}
         onChange={(e) => setTile(e.target.value)}
        /> <br/>

        <label htmlFor="heading">Heading:</label>
        <input
        type="text"
        id="heading"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        /> <br/>

        <label htmlFor="date">Date:</label>
        <input
        type="text"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        /> <br/>

        <label htmlFor="method">Method:</label>
        <textarea
         id="method"
         value={method}
         onChange={(e) => setMethod(e.target.value)}
        /> <br/>

        <button>Post An Article</button>
        {formError && <p className="error">{formError}</p>}
        {/* {!smoothies && <div>Loading....</div>} */}
      </form>
    </div>
  )
}

export default CreateArticle
