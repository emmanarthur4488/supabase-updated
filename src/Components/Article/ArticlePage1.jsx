import React, {useEffect, useState} from 'react'
import {supabase} from "../Config/Client"
import PageCard1 from './PageCard'
import SkeletonArticle from '../Skeletons/SkeletonArticle'

const ArticlePage1 = () => {

    const [fetchError, setFetchError] = useState(null)
    const [smoothies, setSmoothies] = useState(null)
    const [title, setTile] = useState('')
    const [method, setMethod] = useState('')
    const [date, setDate] = useState('')
    const [heading, setHeading] = useState('')

    useEffect(() => {
        const fetchSmoothies = async () => {
          const { data, error} = await supabase
            .from('smoothies')
            .select()
            .eq('id', 38)
            
    
            if (error) {
              setFetchError('could not fetch the article')
              setSmoothies(null)
              console.log(error)
            }
            if (data) {
              setSmoothies(data)
              setFetchError(null)
            }
            if (data) {
              setTile(data.title)
              setMethod(data.method)
              setDate(data.date)
              setHeading(data.heading)
              console.log(data)
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
              <PageCard1 key={smoothie.id} smoothie={smoothie}
              />
            ))}
          </div>
        </div>
      )}
      {!smoothies && [1,2,3].map((n) => <SkeletonArticle key= {n} theme="light"/>)}
    </div>
  )
}

export default ArticlePage1
