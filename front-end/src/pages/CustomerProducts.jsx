import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientHeader from '../components/ClientHeader';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';
import {
  ROUTE,
  BTN_CART,
  CHECKOUT,
} from '../dataTestedId/CustomerProductsIds';

function CustomerProducts() {
  const { products, globalCart, totalPrice, setTotalPrice } = useContext(Context);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const valueToUpdate = globalCart
      .reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

    const fixedValue = valueToUpdate.toFixed(2).replace('.', ',');
    setTotalPrice(fixedValue);

    if (valueToUpdate > 0) setDisabled(false);
    else setDisabled(true);
  }, [globalCart]);

  return (
    <div>
      <ClientHeader />
      <Link to="/customer/checkout">
        <button
          type="button"
          data-testid={ `${ROUTE}${BTN_CART}` }
          disabled={ disabled }
        >
          CARRINHO
        </button>
      </Link>
      <p data-testid={ `${ROUTE}${CHECKOUT}` }>
        {totalPrice}
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
