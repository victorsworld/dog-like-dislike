import React from 'react';
import ImageCard from './ImageCard';

const Container = ({ allPhotos, handleLikes, handleDislikes, title }) => {
  return (
    <div >
      <h1>{title}</h1>
      <div className="parent">
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
    </div>
  );
};

export default Container;
