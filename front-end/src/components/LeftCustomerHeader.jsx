import React from 'react';
import { Link } from 'react-router-dom';
import {
  ROUTE,
  HEADER_PRODUCTS,
  HEADER_ORDERS,
} from '../dataTestedId/clientHeaderIds';
import '../styles/LeftCustomerHeader.css';

function LeftCustomerHeader() {
  return (
    <div className="LeftCustomerHeader-left-container">
      <Link to="/customer/products" className="LeftCustomerHeader-products-link">
        <p
          data-testid={ `${ROUTE}${HEADER_PRODUCTS}` }
        >
          Produtos
        </p>
      </Link>
      <Link
        to="/customer/orders"
        className="LeftCustomerHeader-orders-link"
      >
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
