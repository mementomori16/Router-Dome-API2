import axios from 'axios';
import { Product } from '../../types/Product';

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    const data = response.data.message;
    const productDataArray: Product[] = [];
    for (const breed in data) {
      if (Object.prototype.hasOwnProperty.call(data, breed)) {
        const breedData = data[breed];
        if (Array.isArray(breedData)) {
          const breedImages = await fetchBreedImages(breed);
          productDataArray.push({
            id: breed,
            name: breed,
            image: breedImages,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', // Add this line
          });
        } else {
          const breedImages = await fetchBreedImage(breedData);
          productDataArray.push({
            id: breedData,
            name: breedData,
            image: breedImages,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', // Add this line
          });
        }
      }
    }
    return productDataArray;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};

const fetchBreedImages = async (breed: string): Promise<string[]> => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    const data = response.data.message;
    return data.slice(0, 3); // Get the first 3 images for the breed
  } catch (error) {
    console.error('Failed to fetch breed images:', error);
    throw error;
  }
};

const fetchBreedImage = async (breed: string): Promise<string> => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    const data = response.data.message;
    return data[0]; // Get the first image for the breed
  } catch (error) {
    console.error('Failed to fetch breed image:', error);
    throw error;
  }
};

export default fetchProducts;


