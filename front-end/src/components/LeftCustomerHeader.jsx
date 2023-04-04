import React from 'react';
import { Link } from 'react-router-dom';
import {
  ROUTE,
  HEADER_PRODUCTS,
  HEADER_ORDERS,
} from '../dataTestedId/clientHeaderIds';

function LeftCustomerHeader() {
  return (
    <div>
      <Link to="/customer/products">
        <p
          data-testid={ `${ROUTE}${HEADER_PRODUCTS}` }
        >
          Produtos
        </p>
      </Link>
      <Link to="/customer/orders">
        <p
          data-testid={ `${ROUTE}${HEADER_ORDERS}` }
        >
          Meus Pedidos
        </p>
      </Link>
    </div>
  );
}

export default LeftCustomerHeader;
