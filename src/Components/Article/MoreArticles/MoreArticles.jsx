import React, {useEffect, useState} from 'react'
import {supabase} from "../../Config/Client"
import ArticleCard from '../ArticleCard/ArticleCard'
import SkeletonArticle from '../../Skeletons/SkeletonArticle'





const MoreArticles = () => {

  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)
  

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
        setTimeout(() => {
          setSmoothies(data)
        }, 8000);
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
              />
            ))}
          </div>
        </div>
      )}
      {!smoothies && [1,2,3,4,5].map((n) => <SkeletonArticle key= {n} theme="light"/>)}
    </div>
  )
}

export default MoreArticles
