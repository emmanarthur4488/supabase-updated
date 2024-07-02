import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimer from './Shimer'

const SkeletonArticle = ({theme}) => {

  const themeClass = theme || 'light'
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
          <SkeletonElement type="title"/>
          <SkeletonElement type="text"/>
          <SkeletonElement type="text"/>
          <SkeletonElement type="text"/>
      </div>
      <Shimer/>
    </div>
  )
}

export default SkeletonArticle
