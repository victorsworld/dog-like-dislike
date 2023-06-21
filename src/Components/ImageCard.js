import React from 'react';
import './imagecard.css';

const Images = ({ photo, index, handleLikes, handleDislikes }) => {
  console.log(index, photo);
  return (
    <div >
      <img  className='images' src={photo} alt="error" />

      <div>
        <button onClick={() => handleLikes(photo)}>Like</button>
        <button onClick={() => handleDislikes(photo)}>Dislike</button>
      </div>
    </div>
  );
};

export default Images;
