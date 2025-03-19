import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src="/public/assets/product-placeholder.webp" alt="Product image" />
      <p>{product.name}</p>
      <p>{`$${product.price}`}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
