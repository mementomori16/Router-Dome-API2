import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';
import DogCard from '../DogCard/DogCard';
import './DogBreeds.module.css';

interface DogCardParams extends Params<string | undefined> {}

const DogBreeds: React.FC = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const { breed: paramsBreed } = useParams<DogCardParams>();

  useEffect(() => {
    setSelectedBreed(paramsBreed || null);
  }, [paramsBreed]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchImages = async (breed: string) => {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        setImages(prevImages => ({...prevImages, [breed]: data.message }));
      } catch (error) {
        console.error(error);
      }
    };

    if (breeds.length > 0) {
      breeds.forEach(breed => fetchImages(breed));
    }
  }, [breeds]);

  return (
    <div className="dog-breeds-container">
      {loading? (
        <p>Loading...</p>
      ) : (
        breeds.map(breed => (
          <div key={breed} className="product-card">
            <img src={images[breed]} alt={breed} />
            <h2 className="product-card-title">{breed}</h2>
            <p className="product-card-description">Description: {breed} is a wonderful breed!</p>
            <Link
              to={`/dogcard/`}
              className="product-card-link"
              onClick={() => setSelectedBreed(breed)}
            >
              Click for More
            </Link>
          </div>
        ))
      )}
      {selectedBreed && <DogCard breed={selectedBreed} />}
    </div>
  );
};

export default DogBreeds;