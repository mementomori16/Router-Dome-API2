import React, { useEffect, useState } from 'react';
import fetchProducts from './components/fetchProducts/fetchProducts';
import ProductCard from './components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { Product } from './types/Product';

const App: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProductData(products);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h1>Dogs Breeds List</h1>
      <input
        type="text"
        placeholder="Search breeds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input" // Add the new class
      />
      <ul className="product-grid">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <ProductCard
                name={product.name}
                image={product.image[0]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." // Replace with Lorem Ipsum text
                searchTerm={searchTerm}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
