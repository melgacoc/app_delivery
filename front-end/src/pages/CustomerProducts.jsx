import React, { useEffect, useContext } from 'react';
import uuid from 'react-uuid';
import ClientHeader from '../components/ClientHeader';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';

function CustomerProducts() {
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
      {products.map(({ id, name, price, urlImage }) => (
        <ProductCard
          key={ uuid() }
          id={ id }
          name={ name }
          price={ price }
          urlImage={ urlImage }
        />
      ))}
    </div>
  );
}

export default CustomerProducts;
