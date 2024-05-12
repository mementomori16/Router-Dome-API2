import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../../../types/Product';
import './ItemPage.module.css'
interface ItemPageProps {}

interface ProductWithDescription extends Product {
    name: string;
  }

const ItemPage: React.FC<ItemPageProps> = () => {
    const [product, setProduct] = useState<ProductWithDescription | null>(null);
  
    const { productId } = useParams<{ productId: string }>();
  
    useEffect(() => {
        const fetchProduct = async (productId: string) => {
          try {
            const response = await axios.get(`/api/product/${productId}`);
            const data = response.data;
            setProduct(data);
          } catch (error) {
            console.error("Failed to fetch product:", error);
          }
        };
      
        if (productId) {
          fetchProduct(productId);
        }
      }, [productId]);
  
    return (
      <div className="item-page">
        {product ? (
          <div className="product-card">
            {Array.isArray(product.image) && product.image.length > 0 && (
              <img src={product.image[0]} alt={product.name} className="product-image" />
            )}
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
          </div>
        ) : (
          <div>Product not found</div>
        )}
      </div>
    );
  };

export default ItemPage;