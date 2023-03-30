import React, { useEffect, useState } from 'react';

function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:3001/products',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
          },
          body: JSON.stringify(requestBody),
        },
      );
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Products Table</h1>
      {products.map((product, index) => (
        <img key={ index } alt="" src={ product.urlImage } />))}
    </div>
  );
}

export default ProductsTable;
