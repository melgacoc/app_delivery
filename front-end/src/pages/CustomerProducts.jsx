import React, { useContext, useEffect, useState } from 'react';
import ClientHeader from '../components/ClientHeader';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';
import {
  ROUTE,
  BTN_CART,
  CHECKOUT,
} from '../dataTestedId/CustomerProductsIds';

function CustomerProducts() {
  const { products, globalCart } = useContext(Context);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    const valueToUpdate = globalCart
      .reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

    const fixedValue = valueToUpdate.toFixed(2).replace('.', ',');
    setCartValue(fixedValue);
  }, [globalCart]);

  return (
    <div>
      <ClientHeader />
      <button
        type="button"
        data-testid={ `${ROUTE}${BTN_CART}` }
      >
        CARRINHO
      </button>
      <p data-testid={ `${ROUTE}${CHECKOUT}` }>
        {cartValue}
      </p>
      {products.map(({ id, name, price, urlImage }) => (
        <ProductCard
          key={ id }
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
