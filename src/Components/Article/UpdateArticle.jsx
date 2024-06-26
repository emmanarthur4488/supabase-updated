import React, { useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import { supabase} from '../Config/Client'

const UpdateArticle = () => {

  const { id} = useParams()
  const navigate = useNavigate()

  const [title, setTile] = useState('')
  const [method, setMethod] = useState('')
  const [date, setDate] = useState('')
  const [heading, setHeading] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !date || !heading ) {
        setFormError('please fill in all the field correctly')
        return
    }

    const {data, error} = await supabase
        .from('smoothies')
        .update({title, method, rating, date, heading})
        .eq('id', id)


        if (error) {
         console.log(error)
          setFormError('please fill in all the field correctly')
        }
        if (data) {
          console.log(data)
          setFormError(null)
          navigate('/morearticles')
        }
  }

  useEffect(() => {
    const fetchSmoothie = async () => {
      const {data, error} = await supabase
      .from('smoothies')
      .select()
      .eq('id', id)
      .single()

      if (error) {
        navigate('/morearticles', {replace: true})
      }
      if (data) {
        setTile(data.title)
        setMethod(data.method)
        setDate(data.date)
        setHeading(data.heading)
        console.log(data)
      }
    }
    fetchSmoothie()
},[id, navigate])
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTile(e.target.value)}
      /> <br/>


      <label htmlFor="method">Method:</label>
        <textarea
         id="method"
         value={method}
         onChange={(e) => setMethod(e.target.value)}
      /> <br/>

      <label htmlFor="date">Date:</label>
        <input
        type="text"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /> <br/>

      <label htmlFor="heading">Heading:</label>
        <input
        type="text"
        id="heading"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      /> <br/>
      

      <button>Update An Article</button>
      {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default UpdateArticle
