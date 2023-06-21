import React from 'react';
import Images from './ImageCard';

const LikedPhotos = ({ likes, title }) => {
  return (
    <div className="likes">
      <h1>{title}</h1>
      <div>
        {
        likes.map((item) => { return <img src={item} alt='error'/>; })
        }
      </div>
    </div>
  );
};

export default LikedPhotos;
