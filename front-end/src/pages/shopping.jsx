import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ClientHeader from '../components/clientHeader';
import ProductsTable from '../components/productsTable';
import Context from '../context/context';

function Shopping() {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ClientHeader />
      { products.map((product) => (
        <ProductsTable key={ product.id } />
      ))}
    </div>
  );
}

export default Shopping;
