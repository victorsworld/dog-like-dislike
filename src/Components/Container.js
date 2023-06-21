import React from 'react';
import ImageCard from './ImageCard';

const Container = ({ allPhotos, handleLikes, handleDislikes, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {allPhotos.map((photo, index) => {
        return (
          <ImageCard
            photo={photo}
            index={index}
            handleLikes={handleLikes}
            handleDislikes={handleDislikes}
            key={photo}
          />
        );
      })}
    </div>
  );
};

export default Container;
