import React from 'react'
import ImageCard from './ImageCard';

const DislikedPhotos = ({dislikes, title}) => {
  return (
    <div> 
      <h1>{title}</h1>
      <div className="dislikes">
        {
        dislikes.map((item) => { return <img src={item} alt='error'/>; })
        }
      </div>
    </div>
  )
}

export default DislikedPhotos