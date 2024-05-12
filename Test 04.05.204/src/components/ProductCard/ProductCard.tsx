import React from 'react';


interface ProductCardProps {
  name: string;
  image: string;
  description: string[];
  searchTerm: string;
  isLarge?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, description, searchTerm }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;