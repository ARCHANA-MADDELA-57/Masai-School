import React, { useState, useMemo, useCallback } from 'react';
import ProductList from './ProductList';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 },
  // Imagine thousands of items here...
];

function App() {
  const [products] = useState(initialProducts);
  const [count, setCount] = useState(0);

  // 1. Optimize Total Price Calculation
  // Only recalculates if the 'products' array changes
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // 2. Optimize Function Reference
  // Prevents the function from being recreated on every render
  const handleSelect = useCallback((product) => {
    alert(`Selected: ${product.name}`);
  }, []); // Empty dependency array means it's created once

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Dashboard</h1>
      
      <div>
        <strong>Total Price: ${totalPrice}</strong>
      </div>

      <div style={{ margin: '20px 0' }}>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Counter
        </button>
      </div>

      <hr />
      
      <h3>Products</h3>
      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}

export default App;