import React from 'react'

const Images = ({ photo, index, handleLikes, handleDislikes }) => {
  console.log(index, photo)
  return (
    <div>
      
      <img className="image-container
      " src={photo}
       alt='error' />
       <div>
      <button onClick={() => handleLikes(photo)}>Like</button>
      <button onClick={() => handleDislikes(photo)} >Dislike</button>
      </div>
    </div>

  )
}

export default Images