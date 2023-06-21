import React from 'react';
import ImageCard from './ImageCard';

const LikedPhotos = ({ likes, title }) => {
  return (
    <div >
      <h1>{title}</h1>
      <div className="likes">
        {
        likes.map((item) => { return <img src={item} alt='error'/>; })
        }
      </div>
    </div>
  );
};

export default LikedPhotos;
