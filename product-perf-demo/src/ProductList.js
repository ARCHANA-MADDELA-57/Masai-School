// ProductList.js
import React from 'react';

const ProductList = ({ products, onSelect }) => {
  console.log("Rendering ProductList..."); // To track re-renders
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id} onClick={() => onSelect(product)}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;