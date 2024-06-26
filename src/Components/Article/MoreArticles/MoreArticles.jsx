import React, {useEffect, useState} from 'react'
import {supabase} from "../../Config/Client"
import ArticleCard from '../ArticleCard/ArticleCard'





const MoreArticles = () => {

  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  const handleDelete = (id) => {
    setSmoothies(prevBloggas => {
      return setSmoothies.filter(sb => sb.id !== id)
    })
  }


  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error} = await supabase
        .from('smoothies')
        .select()

        if (error) {
          setFetchError('could not fetch the article')
          setSmoothies(null)
          console.log(error)
        }
        if (data) {
          setSmoothies(data)
          setFetchError(null)
        }
    }
      fetchSmoothies()
  }, [])

  
  return (
    <div className="article">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="blogga">
          <div className="blogga-grid">
            {smoothies.map(smoothie => (
              <ArticleCard key={smoothie.id} smoothie={smoothie}
              onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MoreArticles
