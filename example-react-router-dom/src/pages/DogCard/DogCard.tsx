import React, { useState, useEffect } from 'react';

interface DogCardProps {
  breed?: string;
}

const DogCard: React.FC<DogCardProps>= ({ breed }) => {
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (breed) {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
          setImage(data.message);
        });

      fetch(`https://dog.ceo/api/breed/${breed}/info`)
        .then(response => response.json())
        .then(data => {
          setDescription(data.message.breed.description);
        });
   }
  }, [breed]);

  return (
    <div className="dog-card">
      <h1>{breed ?? 'Select a breed'}</h1>
      <img src={image} alt={breed ?? 'Breed'} />
      <p>{description}</p>
    </div>
  );
};

export default DogCard;